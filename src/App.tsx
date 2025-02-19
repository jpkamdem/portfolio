import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import AboutMe from "./components/AboutMe";
import Home from "./pages/Home";
import Projects from "./components/Projects";
import Veille from "./components/Veille";

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
      <Veille />
      <Projects />
    </>
  );
}
