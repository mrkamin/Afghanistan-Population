import '../styles/Chart.css'; // Importing the CSS styles for the chart
import SvgChart from './SvgChart';

// Define the Chart component
const Chart = () => (
  <div className="chart-container d-flex flex-column gap-2 p-5 justify-content-center">
    {/* Upper header section */}
    <div className="chart-cont-uper-head d-flex w-100 align-items-center justify-content-between">
      {/* Right side of the upper header */}
      <div className="uper-head-right-side">
        <h4>Afghanistan Population (2023)</h4>
      </div>
      {/* Left side of the upper header */}
      <div className="uper-head-left-side d-flex gap-5">
        {/* Item for male population */}
        <div className="uper-head-left-side-item d-flex align-items-center gap-2">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M 0 0 L 20 0 Q 20 0 20 20 L 20 20 L 0 20 Z"
              fill="#0082CC"
            />
          </svg>
          <div className="">Male Population</div>
        </div>
        {/* Item for female population */}
        <div className="uper-head-left-side-item d-flex align-items-center gap-2">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M 0 0 L 20 0 Q 20 0 20 20 L 20 20 L 0 20 Z"
              fill="#FB4540"
            />
          </svg>
          <div className="white-dark">Famile Population</div>
        </div>
      </div>
    </div>
    {/* Chart section */}
    <div className="chart-cont-chart w-100 d-flex flex-column gap-3">
      {/* Age labels and SVG chart */}
      <div className="d-flex gap-2 align-items-center">
        <h5 className="chart-age">Age/Years</h5>
        <SvgChart />
      </div>
      {/* Population percentage label */}
      <h5 className="p-0 m-0">Percentage of Population</h5>
    </div>
  </div>
);

export default Chart; // Exporting the Chart component
