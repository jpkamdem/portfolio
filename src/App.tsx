import AboutMe from "./components/AboutMe";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import Veille from "./components/Veille";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <div
        id="hero"
        className="bg-gray-100 flex justify-center items-center h-[100dvh]"
      >
        <Aside />
        <Home />
      </div>
      <AboutMe />
      {/* <Veille /> */}
      <Projects />
    </>
  );
}
