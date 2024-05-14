import ButtonGradient from "./assets/svg/ButtonGradient";
import Benifits from "./components/Benifits";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <div className="pt-[4.75rem] lg:pt[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benifits />
        <Collaboration />
        <Services />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;

