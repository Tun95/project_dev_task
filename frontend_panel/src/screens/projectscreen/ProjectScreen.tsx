import { Helmet } from "react-helmet-async";
import Sidebar from "../../common/sidebar/Sidebar";
import Navbar from "../../common/navbar/Navbar";
import ProjectDeliverablesTable from "../../components/project/Table";

function ProjectScreen() {
  return (
    <div>
      <Helmet>
        <title>Projects</title>
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
            <div className="mb-2 max-480px:mb-1">
              <div className="content">
                <h2 className="font-semibold fz-28 text-gray-900 dark:text-gray-100 max-480px:text-xl max-480px:p-2">
                  Project History
                </h2>
              </div>
            </div>

            <ProjectDeliverablesTable />
          </main>
        </div>
      </div>
    </div>
  );
}

export default ProjectScreen;
