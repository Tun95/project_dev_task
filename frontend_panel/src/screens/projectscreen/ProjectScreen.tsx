import { Helmet } from "react-helmet-async";
import Sidebar from "../../common/sidebar/Sidebar";
import Navbar from "../../common/navbar/Navbar";
import ProjectDeliverablesTable from "../../components/project/Table";

function ProjectScreen() {
  return (
    <div>
      <Helmet>
        <title>Project History | ProjectFlow</title>
      </Helmet>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-all">
        <div className="max-900px:hidden">
          <Sidebar />
        </div>

        <div className="flex-1 ml-64 w-full max-900px:ml-0">
          <Navbar />
          <main className="p-8 max-900px:p-4 max-480px:p-2">
            {/* Header Section */}
            <div className="mb-6 max-480px:mb-4">
              <div className="content">
                <div className="flex flex-col ">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 max-480px:text-xl max-900px:px-2">
                      Project History
                    </h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-3xl text-sm leading-6 max-900px:px-2">
                    {" "}
                    Complete timeline of all deliverables, versions, and client
                    feedback. Track progress from initial submission to final
                    approval.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-900px:px-2">
              <ProjectDeliverablesTable />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ProjectScreen;
