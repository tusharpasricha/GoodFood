import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Button from "./Button";

const data = [
  { name: "Afternoon", value: 40, time: "1pm - 4pm", orders: "1,890" },
  { name: "Evening", value: 32, time: "5pm - 8pm", orders: "1,500" },
  { name: "Morning", value: 28, time: "9am - 12pm", orders: "1,320" }
];

const COLORS = ["#5a67d8", "#7f9cf5", "#b2b7ff"]; // Different shades of purple-blue

export default function OrderTime() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = useCallback((_, index) => {
    setActiveIndex(index);
  }, []);



  return (
    <div className="mx-1 my-1 px-10 py-10">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-black text-[14px] font-medium pb-3">Order Time</p>
          <p className="text-secondary text-[13px] ">From 1-6 Dec, 2020</p>
        </div>
        <div>
          
          <Button>
          View Report
          </Button>
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
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#37375C", // Darker purple background
              borderRadius: "8px",
              border: "none",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              padding: "10px",
            }}
            itemStyle={{
              color: "#fff", // White text for readability
              fontSize: "14px",
              fontWeight: "bold",
            }}
            labelStyle={{
              color: "#fff", // White for the label text as well
              fontSize: "12px",
            }}
            formatter={(value, name, props) => {
              const { payload } = props;
              return (
                <div style={{ color: "#fff", textAlign: "left", lineHeight: "1.6" }}>
                  {/* <div>{payload.name}</div>    */}
                  <div>{payload.time}</div>   
                  <div>{payload.orders} orders</div>   
                </div>
              );
            }}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            wrapperStyle={{ fontSize: "10px", paddingTop: "30px", color: "#4a5568" }}
          />
        </PieChart>
      </div>
    </div>
  );
}
