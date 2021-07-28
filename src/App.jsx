import Hero from "./components/hero/Hero";
import { Globaly } from "./GlobalVariable";

const App = () => {
  return (
    <>
      {/* <Globaly> */}
      <Hero />
      <div style={{ height: "100vh" }}></div>
      {/* </Globaly> */}
    </>
  );
};

export default App;
