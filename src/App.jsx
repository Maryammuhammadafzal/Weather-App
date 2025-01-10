import { useState } from "react";
import Loading from "./assets/Pages/Loading";

function App() {
  let [isLoading, setLoading] = useState(true);
  // setTimeout(() => {
  //   setLoading(false);
  // });

  return <>
  {isLoading ? <Loading /> : <h1>App</h1>}
  </>;
}

export default App;
