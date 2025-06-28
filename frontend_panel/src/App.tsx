import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import LoadingBox from "./utilities/message loading/LoadingBox";
import HomeScreen from "./screens/homescreen/HomeScreen";
import NotFoundScreen from "./utilities/404 error/PageNotFound";
import LoginScreen from "./screens/formscreens/LoginScreen";

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

        {/* AUTH */}
        {/* <Route path="/register" element={<RegisterScreen />} /> */}
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </div>
  );
}

export default App;
