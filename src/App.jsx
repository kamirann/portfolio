import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import { Globaly } from "./GlobalVariable";

const App = () => {
  return (
    <>
      <Globaly />
      <Hero />
      <About />
      <div style={{ height: "100vh" }}></div>
    </>
  );
};

export default App;
