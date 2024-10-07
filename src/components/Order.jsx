import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Button from "./Button";

const s1 = {
  name: "Last 6 days",
  data: [
    { category: "01", value: 2.1 },
    { category: "02", value: 1 },
    { category: "03", value: 2.4 },
    { category: "04", value: 2 },
    { category: "05", value: 0.8 },
    { category: "06", value: 2.6 },
  ],
};

const s2 = {
  name: "Last Week",
  data: [
    { category: "01", value: 2.3 },
    { category: "02", value: 2.2 },
    { category: "03", value: 1 },
    { category: "04", value: 2.5 },
    { category: "05", value: 2.1 },
    { category: "06", value: 2.3 },
  ],
};

const formatLegend = (value) => {
  switch (value) {
    case "last6days":
      return "Last 6 Days";
    case "lastweek":
      return "Last Week";
    default:
      return value;
  }
};
const CustomLegend = (props) => {
  const { payload } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {payload.map((entry, index) => (
        <div
          key={`item-${index}`}
          style={{ display: "flex", alignItems: "center", marginRight: "15px" }}
        >
          <span
            style={{
              display: "inline-block",
              marginRight: "5px",
              backgroundColor: entry.color,
              borderRadius: "50%",
              width: "10px",
              height: "10px",
            }}
          ></span>
          <span style={{ color: "#121212", fontSize: "12px" }}>
            {" "}
            {formatLegend(entry.value)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function Order() {
  return (
    <div className="mx-1 my-1 px-10 py-10  h-full">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-black text-[14px] font-medium ">Order</p>
          <h2 className="text-black text-[20px] py-2 ">2.568</h2>
          <p className=" text-[12px] font-medium flex items-center ">
            <span className="text-redy mr-1">↓ 2.1%</span>
            <span className="text-secondary">vs last week</span>
          </p>
          <p className="text-secondary text-[13px] py-4">
            Sales from 1-6 Dec, 2020
          </p>
        </div>
        <div>
          <Button>View Report</Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <LineChart width={500} height={210}>
          <CartesianGrid strokeDasharray="8 8" vertical={false} />
          <XAxis
            dataKey="category"
            tick={{ fill: "#D8D9DB" }}
            type="category"
            allowDuplicatedCategory={false}
            tickLine={false}
            axisLine={{ stroke: "#D8D9DB", strokeWidth: 2 }}
            padding={{ left: 20, right: 20 }}
          />
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            align="left"
            iconType="circle"
            content={<CustomLegend />}
          />

          <Line
            dataKey="value"
            data={s1.data}
            name={s1.name}
            key={s1.name}
            stroke="#5A6ACF"
            strokeWidth={5}
            dot={false}
          />
          <Line
            dataKey="value"
            data={s2.data}
            name={s2.name}
            key={s2.name}
            stroke="#E6E8EC"
            strokeWidth={5}
            dot={false}
          />
        </LineChart>
      </div>
    </div>
  );
}
