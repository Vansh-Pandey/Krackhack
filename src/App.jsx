import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingOverlay from "./components/loading/LoadingOverlay";
import TargetCursor from "./components/ui/TargetCursor";
import Home from "./pages/Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);  

    return () => clearTimeout(timer);
  }, []);
 
  if (loading) {
    return <LoadingOverlay />;
  }
 
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
