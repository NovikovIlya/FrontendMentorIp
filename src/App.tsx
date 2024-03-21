import "./App.css";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import Map from "./components/Map/Map";
import InputComponent from "./components/InputComponent/InputComponent";

function App() {
  const [dataInfo, setDataInfo] = useState({});

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <InputComponent setDataInfo={setDataInfo} />
        <Map dataInfo={dataInfo} />
      </QueryClientProvider>
    </>
  );
}

export default App;
