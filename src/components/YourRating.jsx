import {useState } from "react";
import { PieChart, Pie, Sector } from "recharts";

const data1 = [
  { name: "Food Taste", value: 85 },
  { name: "", value: 0 },
];
const data2 = [
  { name: "Hygiene", value: 85 },
  { name: "", value: 0 },
];
const data3 = [
  { name: "Packaging", value: 92 },
  { name: "", value: 0},
];

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;

  

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        startAngle={endAngle +80}
        endAngle={startAngle +210 }
        innerRadius={outerRadius + 8}
        outerRadius={outerRadius + 10}
        fill={fill}
      />

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={endAngle}
        endAngle={startAngle}
        fill={fill}
      />

      <text
        x={cx}
        y={cy-7}
        dy={0}
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="20px"
      >
        {payload.value}%
      </text>
      <text
        x={cx}
        y={cy+15}
        dy={4}
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="14px"
      >
        {payload.name}
      </text>
    </g>
  );
};

export default function YourRating() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <div className="mx-1  px-10 py-6  h-full">
        <h2 className="text-sm py-2 ">Your Rating</h2>
        <p className="text-secondary text-[12px] py-2">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>

      <PieChart width={400} height={300}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data1}
          cx={260}
          cy={140}
          outerRadius={95}
          fill="#F99C30"
          dataKey="value"
        />
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data2}
          cx={150}
          cy={63}
          outerRadius={50}
          fill="#8884d8"
          dataKey="value"
        />
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data3}
          cx={92}
          cy={208}
          outerRadius={65}
          fill="#2FBFDE"
          dataKey="value"
        />
      </PieChart>
    </div>
  );
}
