import { Helmet } from "react-helmet-async";
import Sidebar from "../../common/sidebar/Sidebar";
import Navbar from "../../common/navbar/Navbar";
import Home from "../../components/home/home";

function HomeScreen() {
  return (
    <div>
      <Helmet>
        <title>Dashboard | ProjectFlow </title>
      </Helmet>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-all">
        {/* Sidebar - hidden on screens smaller than 900px */}
        <div className="max-900px:hidden">
          <Sidebar />
        </div>

        {/* Main content area */}
        <div className="flex-1 ml-64 w-full max-900px:ml-0">
          <Navbar />
          <main className="p-8 max-900px:p-4 max-480px:p-2">
            <Home />
          </main>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
