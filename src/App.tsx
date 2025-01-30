import Navbar from "./components/Navbar";
import About from "./components/About";
import Aside from "./components/Aside";
import AboutMe from "./components/AboutMe";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="relative flex-1 flex justify-center items-center">
          <Aside />
          <Home />
        </main>
        <div className="relative flex justify-center items-center">
          <AboutMe />
        </div>
        <About />
      </div>
    </>
  );
}
