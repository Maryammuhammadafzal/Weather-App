import { useState } from "react";
import Loading from "./assets/Pages/Loading";
import Home from "./assets/Pages/Home";

function App() {
  let [isLoading, setLoading] = useState(true);
   setTimeout(() => {
    setLoading(false);
  });

  return <>
  {isLoading ? <Loading /> : <Home />}
  </>;
}

export default App;
