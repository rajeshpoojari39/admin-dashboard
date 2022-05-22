import "./App.css";
import { LineChart } from "./components/charts/LineChart";
import { PieChart } from "./components/charts/PieChart";
import { EarningsCard } from "./components/EarningsCard";
import { NavBar } from "./components/NavBar";
import { PendingRequestCard } from "./components/PendingRequestCard";
import { Sidebar } from "./components/Sidebar";
import { TaskCard } from "./components/TaskCard";
import { data } from "./data/data";
import ProfileContext from "./context/ProfileContext";
import ColorInfo from "./components/ColorInfo";
import Illustrations from "./components/Illustrations";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
import ProjectsInfoBar from "./components/ProjectsInfoBar";

function App() {
  return (
    <>
      <ProfileContext value={data.profile.name}>
        <Sidebar />
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id='content-wrapper' className='d-flex flex-column'>
          {/* <!-- Main Content --> */}
          <div id='content'>
            {/* <!-- Topbar --> */}
            <NavBar />
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className='container-fluid'>
              {/* <!-- Page Heading --> */}
              <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                <h1 className='h3 mb-0 text-gray-800'>Dashboard</h1>
                <a
                  href='#'
                  className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'
                >
                  <i className='fas fa-download fa-sm text-white-50'></i>{" "}
                  Generate Report
                </a>
              </div>

              {/* <!-- Content Row --> */}
              <div className='row'>
                {/* <!-- Earnings (Monthly) Card Example --> */}
                <EarningsCard data={data.monthlyEarning} />

                {/* <!-- Earnings (Monthly) Card Example --> */}
                <EarningsCard data={data.yearlyEarning} />

                {/* <!-- Earnings (Monthly) Card Example --> */}

                <TaskCard data={data.task} />

                {/* <!-- Pending Requests Card Example --> */}
                <PendingRequestCard data={data.pendingRequest} />
              </div>

              {/* <!-- Content Row --> */}

              <div className='row'>
                {/* <!-- Area Chart --> */}
                <div className='col-xl-8 col-lg-7'>
                  <div className='card shadow mb-4'>
                    {/* <!-- Card Header - Dropdown --> */}
                    <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
                      <h6 className='m-0 font-weight-bold text-primary'>
                        Earnings Overview
                      </h6>
                      <div className='dropdown no-arrow'>
                        <a
                          className='dropdown-toggle'
                          href='#'
                          role='button'
                          id='dropdownMenuLink'
                          data-toggle='dropdown'
                          aria-haspopup='true'
                          aria-expanded='false'
                        >
                          <i className='fas fa-ellipsis-v fa-sm fa-fw text-gray-400'></i>
                        </a>
                        <div
                          className='dropdown-menu dropdown-menu-right shadow animated--fade-in'
                          aria-labelledby='dropdownMenuLink'
                        >
                          <div className='dropdown-header'>
                            Dropdown Header:
                          </div>
                          <a className='dropdown-item' href='#'>
                            Action
                          </a>
                          <a className='dropdown-item' href='#'>
                            Another action
                          </a>
                          <div className='dropdown-divider'></div>
                          <a className='dropdown-item' href='#'>
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div className='card-body'>
                      <div className='chart-area'>
                        {/* <canvas id='myAreaChart'></canvas> */}
                        <LineChart />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Pie Chart --> */}
                <div className='col-xl-4 col-lg-5'>
                  <div className='card shadow mb-4'>
                    {/* <!-- Card Header - Dropdown --> */}
                    <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
                      <h6 className='m-0 font-weight-bold text-primary'>
                        Revenue Sources
                      </h6>
                      <div className='dropdown no-arrow'>
                        <a
                          className='dropdown-toggle'
                          href='#'
                          role='button'
                          id='dropdownMenuLink'
                          data-toggle='dropdown'
                          aria-haspopup='true'
                          aria-expanded='false'
                        >
                          <i className='fas fa-ellipsis-v fa-sm fa-fw text-gray-400'></i>
                        </a>
                        <div
                          className='dropdown-menu dropdown-menu-right shadow animated--fade-in'
                          aria-labelledby='dropdownMenuLink'
                        >
                          <div className='dropdown-header'>
                            Dropdown Header:
                          </div>
                          <a className='dropdown-item' href='#'>
                            Action
                          </a>
                          <a className='dropdown-item' href='#'>
                            Another action
                          </a>
                          <div className='dropdown-divider'></div>
                          <a className='dropdown-item' href='#'>
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div className='card-body'>
                      <div className='chart-pie pt-4 pb-2'>
                        {/* <canvas id='myPieChart'></canvas> */}
                        <PieChart />
                      </div>
                      <div className='mt-4 text-center small'>
                        <span className='mr-2'>
                          <i className='fas fa-circle text-primary'></i> Direct
                        </span>
                        <span className='mr-2'>
                          <i className='fas fa-circle text-success'></i> Social
                        </span>
                        <span className='mr-2'>
                          <i className='fas fa-circle text-info'></i> Referral
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Content Row --> */}
              <div className='row'>
                {/* <!-- Content Column --> */}
                <div className='col-lg-6 mb-4'>
                  {/* <!-- Project Card Example --> */}
                  <div className='card shadow mb-4'>
                    <div className='card-header py-3'>
                      <h6 className='m-0 font-weight-bold text-primary'>
                        Projects
                      </h6>
                    </div>
                    <div className='card-body'>
                      {data.projectsInfo.map((project) => {
                        return <ProjectsInfoBar projectInfo={project} />;
                      })}
                    </div>
                  </div>

                  {/* <!-- Color System --> */}
                  <div className='row'>
                    {data.colorsInfo.map((color) => {
                      return <ColorInfo color={color} />;
                    })}
                  </div>
                </div>

                <div className='col-lg-6 mb-4'>
                  {/* <!-- Illustrations --> */}
                  <Illustrations />

                  {/* <!-- Approach --> */}
                  <Approach />
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}

          {/* <!-- Footer --> */}
          <Footer />
          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}

        {/* <!-- End of Page Wrapper --> */}

        {/* <!-- Scroll to Top Button--> */}
        <a className='scroll-to-top rounded' href='#page-top'>
          <i className='fas fa-angle-up'></i>
        </a>

        {/* <!-- Logout Modal--> */}
        <div
          className='modal fade'
          id='logoutModal'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Ready to Leave?
                </h5>
                <button
                  className='close'
                  type='button'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>×</span>
                </button>
              </div>
              <div className='modal-body'>
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className='modal-footer'>
                <button
                  className='btn btn-secondary'
                  type='button'
                  data-dismiss='modal'
                >
                  Cancel
                </button>
                <a className='btn btn-primary' href='#'>
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </ProfileContext>
    </>
  );
}

export default App;
