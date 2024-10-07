import { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Button from "./Button";

const data = [
  { name: "Afternoon", value: 1890, time: "1pm - 4pm", orders: "1,890" },
  { name: "Evening", value: 1400, time: "5pm - 8pm", orders: "1,400" },
  { name: "Morning", value: 1320, time: "9am - 12pm", orders: "1,320" },
];

const COLORS = ["#5a67d8", "#7f9cf5", "#b2b7ff"];

export default function OrderTime() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = useCallback((_, index) => {
    setActiveIndex(index);
  }, []);

  const totalValue = data.reduce((acc, cur) => acc + cur.value, 0);

  const CustomLegend = (props) => {
    const { payload } = props;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {payload.map((entry, index) => {
          const percentage = ((entry.payload.value / totalValue) * 100).toFixed(
            2
          );

          return (
            <div
              key={`item-${index}`}
              style={{
                display: "flex",
                paddingLeft: "45px",
                paddingRight: "45px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  marginRight: "5px",
                  marginTop: "4px",
                  backgroundColor: entry.color,
                  borderRadius: "50%",
                  width: "10px",
                  height: "10px",
                }}
              ></span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                }}
              >
                <span style={{ color: "#121212", fontSize: "12px" }}>
                  {entry.value}
                </span>
                <span style={{ color: "#737B8B", fontSize: "10px" }}>
                  {percentage}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="mx-1 my-1 px-10 py-10">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-black text-[14px] font-medium pb-3">Order Time</p>
          <p className="text-secondary text-[13px]">From 1-6 Dec, 2020</p>
        </div>
        <div>
          <Button>View Report</Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <PieChart width={400} height={300}>
          <Pie
            activeIndex={activeIndex}
            data={data}
            cx={200}
            cy={150}
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#37375C",
              borderRadius: "8px",
              border: "none",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              padding: "10px",
            }}
            itemStyle={{
              color: "#fff",
              fontSize: "12px",
            }}
            labelStyle={{
              color: "#fff",
              fontSize: "12px",
            }}
            formatter={(value, name, props) => {
              const { payload } = props;
              return (
                <div style={{ color: "#fff", textAlign: "left" }}>
                  <div style={{ fontSize: "12px", paddingTop: "10px" }}>
                    {payload.time}
                  </div>
                  <div style={{ fontSize: "16px", paddingTop: "10px" }}>
                    {payload.orders} orders
                  </div>
                </div>
              );
            }}
          />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </div>
    </div>
  );
}
