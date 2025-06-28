import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import LoadingBox from "./utilities/message loading/LoadingBox";
import HomeScreen from "./screens/homescreen/HomeScreen";
import NotFoundScreen from "./utilities/404 error/PageNotFound";
import LoginScreen from "./screens/formscreens/LoginScreen";
import ProjectScreen from "./screens/projectscreen/ProjectScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div>
        <LoadingBox />
      </div>
    );
  }

  return (
    <div className="app">
      <Toaster expand visibleToasts={1} />
      <Routes>
        <Route path="*" element={<NotFoundScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/projects" element={<ProjectScreen />} />

        {/* AUTH */}
        <Route path="/login" element={<LoginScreen />} />
        {/* AUTH */}
      </Routes>
    </div>
  );
}

export default App;
