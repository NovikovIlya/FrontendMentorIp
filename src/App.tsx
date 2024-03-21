import "./App.css";
import "leaflet/dist/leaflet.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import Map from "./components/Map/Map";
import InputComponent from "./components/InputComponent/InputComponent";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <InputComponent />
        <Map />
      </QueryClientProvider>
    </>
  );
}

export default App;
