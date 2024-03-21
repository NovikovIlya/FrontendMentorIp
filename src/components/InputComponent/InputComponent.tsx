import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "../../hooks/redux";
import { setData } from "../../store/todoSlice";
import styles from "./InputComponent.module.css";

const InputComponent = ({ setDataInfo }: any) => {
  const [text, setText] = useState("178.238.11.6");
  const dispatch = useAppDispatch();

  const { refetch, data, isError, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchIp(),
  });
  const fetchIp = async () => {
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_9RcjRUHmfnLODI8HcU5J5dxf2vAo9&ipAddress=${text}`,
      );
      const data = await response.json();
      setDataInfo(data.location);
      dispatch(setData(data));
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const hanldeClick = () => {
    refetch();
  };

  return (
    <div className={styles.container}>
      <div>IP adress tracker</div>
      <div>
        <input placeholder="Enter IP adress" onChange={handleInput} />
        <button onClick={hanldeClick}>Submit</button>
      </div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data ? (
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
      ) : (
        <>No data...</>
      )}
    </div>
  );
};

export default InputComponent;
