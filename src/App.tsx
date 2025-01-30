import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Aside from "./components/Aside";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="relative flex-1 flex justify-center items-center">
          <Aside />
          <Outlet />
        </main>
        <About />
      </div>
    </>
  );
}

export default App;
