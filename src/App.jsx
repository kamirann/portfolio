import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import { Globaly } from "./GlobalVariable";
import Work from "./components/work/Work";

const App = () => {
  return (
    <>
      <Globaly />
      <Hero />
      <About />
      <Work />
    </>
  );
};

export default App;
