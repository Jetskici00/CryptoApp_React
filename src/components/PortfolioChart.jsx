import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useCrypto } from "../context/crypto-context";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PortfolioChart() {
  const { assets } = useCrypto();

  const data = {
    labels: assets.map(a => a.name),
    datasets: [
      {
        label: "$",
        data: assets.map((a) => a.totalAmount),
        backgroundColor: [
          "rgba(7, 3, 255, 1)",
          "rgba(198, 0, 200, 1)",
          "rgba(254, 0, 142, 1)",
          "rgba(255, 0, 90, 1)",
          "rgba(255, 57, 48, 1)",
          "rgba(255, 125, 3, 1)",
        ],
      },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "1rem",
        justifyContent: "center",
        height: 400,
      }}
    >
      <Pie data={data} />
    </div>
  );
}
