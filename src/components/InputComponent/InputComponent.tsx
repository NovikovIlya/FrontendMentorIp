import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "../../hooks/redux";
import { setData } from "../../store/todoSlice";
import styles from "./InputComponent.module.css";

const InputComponent = () => {
  const [text, setText] = useState("178.238.11.6");
  const [isMy, setIsMy] = useState(false);
  const dispatch = useAppDispatch();

  const { refetch, data, isError, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchIp(),
    refetchOnWindowFocus: false,
  });
  
  const fetchIp = async () => {
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_9RcjRUHmfnLODI8HcU5J5dxf2vAo9&ipAddress=${text}`
      );
      const data = await response.json();

      dispatch(setData(data));
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e: any) => {
    setText(e.target.value);
  };

  const hanldeClick = () => {
    console.log(text);
    if (text === "" || text.length < 14) {
      alert("Enter ip!");
      return;
    }
    refetch();
    setIsMy(false);
  };

  const showPosition = (position: any) => {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    const data = {
      location: {
        lat: lat,
        lng: lon,
      },
    };
    dispatch(setData(data));
    setIsMy(true);
    console.log(position);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Геолокация не поддерживается.");
    }
  };

  if (isLoading) {
    return (
      <div className={styles.load}>
        <div className={styles.ldsring}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  if (isError) {
    return <span>Error</span>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>IP adress tracker</div>
      <button className={styles.btnMy} onClick={getLocation}>
        Get my geolocation
      </button>
      <div className={styles.input}>
        <input
          className={styles.miniInp}
          placeholder="Enter IP adress"
          onChange={handleInput}
        />
        <button className={styles.btn} onClick={hanldeClick}>
          &gt;
        </button>
      </div>

      {data ? (
        isMy === false && (
          <>
            <div className={styles.info}>
              <div className={styles.border}>
                <div>IP:</div> <div>{data?.ip}</div>
              </div>
              <div className={styles.border}>
                <div>Location:</div>{" "}
                <div>{`${data?.location.city}, ${data?.location.region}`}</div>
              </div>
              <div className={styles.border}>
                <div>Timezone:</div> <div>{data?.location.timezone}</div>
              </div>
              <div>
                <div>ISP:</div> <div>{data?.isp}</div>
              </div>
            </div>
          </>
        )
      ) : (
        <>No data...</>
      )}
    </div>
  );
};

export default InputComponent;
