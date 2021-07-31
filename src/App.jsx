import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import { Globaly } from "./GlobalVariable";
import Work from "./components/work/Work";
import SocialMedia from "./components/social-media/SocialMedia";

const App = () => {
  return (
    <>
      <Globaly />
      <Hero />
      <SocialMedia />
      <About />
      <Work />
    </>
  );
};

export default App;
