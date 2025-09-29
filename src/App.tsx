import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "@/pages/home";
import Forms from "@/pages/Forms";
import { Button } from "./components/ui/button";
function App() {
  return (
    <div className="bg-accent-foreground text-white h-screen w-screen flex justify-center items-center flex-col gap-5">
      <nav className="flex gap-4">
        <Button className="border-2 border-white" asChild>
          <Link to="/">Home</Link>
        </Button>
        <Button className="border-2 border-white" asChild>
          <Link to="/forms">Forms</Link>
        </Button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </div>
  );
}

export default App;
