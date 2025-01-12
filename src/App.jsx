import { useState } from "react";
import Loading from "./assets/Pages/Loading";
import Slider from "./assets/Pages/Slider";

function App() {
  let [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  });

  return <>
  {isLoading ? <Loading /> : <Slider/>}
  </>;
}

export default App;
