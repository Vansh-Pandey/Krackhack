import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingOverlay from "./components/loading/LoadingOverlay.jsx";
import TargetCursor from "./components/ui/TargetCursor.jsx";
import Home from "./pages/Home.jsx"; 
import EndSubmission from "./pages/EndSubmission.jsx";
import Admin from "./pages/Admin.jsx";

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
        <Route path="/final-submission" element={<EndSubmission />} />
        <Route path="/krackhack-admin" element={<Admin />} />
      </Routes>
    </>
  );
}
 