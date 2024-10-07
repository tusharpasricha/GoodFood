import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import Button from "./Button";

const data = [
  { date: "01", last6days: 400, lastweek: 240 },
  { date: "02", last6days: 300, lastweek: 456 },
  { date: "03", last6days: 200, lastweek: 139 },
  { date: "04", last6days: 278, lastweek: 390 },
  { date: "05", last6days: 189, lastweek: 480 },
  { date: "06", last6days: 339, lastweek: 380 },
  { date: "07", last6days: 349, lastweek: 430 },
  { date: "08", last6days: 400, lastweek: 240 },
  { date: "09", last6days: 300, lastweek: 456 },
  { date: "10", last6days: 200, lastweek: 139 },
  { date: "11", last6days: 278, lastweek: 390 },
  { date: "12", last6days: 189, lastweek: 480 },
];

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
            {/* Set text color to #A6ABC8 */}
            {formatLegend(entry.value)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function Revenue() {
  return (
    <div className="mx-1 my-1 px-10 py-10">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[14px]">Revenue</p>
          <h2 className="text-black text-[20px] py-2">IDR 7.852.000</h2>
          <p className="text-[12px] font-medium flex items-center">
            <span className="text-greeny">↑ 2.1%</span>
            <span className="text-secondary px-1">vs last week</span>
          </p>
          <p className="text-secondary text-[13px] py-4">
            Sales from 1-12 Dec, 2020
          </p>
        </div>
        <div>
          <Button>View Report</Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <BarChart
          width={900}
          height={210}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="4 4"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="date"
            tick={{ fill: "#D8D9DB" }}
            tickLine={false}
            axisLine={false}
            padding={{ left: -25, right: -25 }}
          />
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            align="left"
            iconType="circle"
            content={<CustomLegend />}
          />
          <Bar dataKey="last6days" fill="#5A6ACF" barSize={10} />
          <Bar dataKey="lastweek" fill="#E6E8EC" barSize={10} />
        </BarChart>
      </div>
    </div>
  );
}
