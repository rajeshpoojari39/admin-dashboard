import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Direct", "Referral", "Social"],
  datasets: [
    {
      data: [55, 30, 15],
      backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
      hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf"],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    },
  ],
};

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    backgroundColor: "rgb(255,255,255)",
    bodyFontColor: "#858796",
    borderColor: "#dddfeb",
    borderWidth: 1,
    xPadding: 15,
    yPadding: 15,
    displayColors: false,
    caretPadding: 10,
  },
  legend: {
    display: false,
  },
  cutoutPercentage: 80,
};

export const PieChart = () => {
  return (
    <Doughnut
      id='myPieChart'
      className='chartjs-render-monitor'
      options={options}
      data={data}
    />
  );
};
