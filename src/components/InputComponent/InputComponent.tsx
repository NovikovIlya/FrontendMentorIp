import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const InputComponent = ({ setDataInfo }: any) => {
  const [text, setText] = useState("178.238.11.6");

  const { refetch, data, isError, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchIp(),
    enabled: false,
  });
  const fetchIp = async () => {
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_9RcjRUHmfnLODI8HcU5J5dxf2vAo9&ipAddress=${text}`,
      );
      const data = await response.json();
      setDataInfo(data.location);
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
    <div>
      <input onChange={handleInput} />
      <button onClick={hanldeClick}>Submit</button>
      <div></div>
    </div>
  );
};

export default InputComponent;
