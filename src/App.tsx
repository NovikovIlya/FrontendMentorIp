import './App.css';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

import Map from './components/Map/Map';

function App() {
  const [coordinateLeft, setCoordinateLeft] = useState('')
  const [coordinateRight, setCoordinateRight] = useState('')

  return (
    <>
   <QueryClientProvider client={queryClient}>
      <Map />
      </QueryClientProvider>
    </>
  );
}


export default App;
