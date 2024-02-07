import React from "react";
import MetaData from "./MetaData";

const SvgChart: React.FC = () => {
  const maxValue = Math.max(
    ...MetaData.map((item) =>
      Math.max(item.malePopulation, item.familePopulation)
    )
  );
  const xScale = 90 / MetaData.length;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="svg w-100">
      {/* Horizontal grid lines for reference */}
      {/* ... (horizontal grid lines) */}
      <line
        x1="5%"
        y1="5%"
        x2="5%"
        y2="93%"
        stroke="#000"
        strokeDasharray="5"
        strokeWidth="0.5"
      />
      <line
        x1="19%"
        y1="5%"
        x2="19%"
        y2="93%"
        stroke="#000"
        strokeDasharray="5"
        strokeWidth="0.5"
      />
      <line
        x1="33%"
        y1="5%"
        x2="33%"
        y2="93%"
        stroke="#000"
        strokeDasharray="5"
        strokeWidth="0.5"
      />
      <line
        x1="46%"
        y1="5%"
        x2="46%"
        y2="93%"
        stroke="#000"
        strokeDasharray="5"
        strokeWidth="0.5"
      />
      <line
        x1="60%"
        y1="5%"
        x2="60%"
        y2="93%"
        stroke="#000"
        strokeDasharray="5"
        strokeWidth="0.5"
      />
      <line
        x1="74%"
        y1="5%"
        x2="74%"
        y2="93%"
        stroke="#000"
        strokeDasharray="5"
        strokeWidth="0.5"
      />
      <line
        x1="88%"
        y1="5%"
        x2="88%"
        y2="93%"
        stroke="#000"
        strokeDasharray="5"
        strokeWidth="0.5"
      />
      <line
        x1="96%"
        y1="5%"
        x2="96%"
        y2="93%"
        stroke="#000"
        strokeDasharray="5"
        strokeWidth="0.5"
      />
      <svg>
        {MetaData.map((item, index) => (
          <rect
            key={index}
            y={`${index * xScale + 3}%`}
            width={`${0 - (-item.malePopulation / maxValue) * 45}%`}
            x={`${50 - (0 - (-item.malePopulation / maxValue) * 45)}%`}
            height={`${3}%`}
            fill="#0082CC"
            rx="5"
            ry="5"
            stroke="#000"
            className="malepop"
          />
        ))}
        {/* Render rectangles for female population */}
        {MetaData.map((item, index) => (
          <rect
            key={index}
            y={`${index * xScale + 3}%`}
            width={`${0 - (-item.familePopulation / maxValue) * 46}%`}
            x={`${50}%`}
            height={`${3}%`}
            fill="#FB4540"
            rx="5"
            ry="5"
            stroke="#000"
          />
        ))}
      </svg>
      <text x="1%" y="5%" fontFamily="Arial" fontSize="10" fill="#000">
        100+
      </text>
      <text x="1%" y="14%" fontFamily="Arial" fontSize="10" fill="#000">
        90-94
      </text>
      <text x="1%" y="23%" fontFamily="Arial" fontSize="10" fill="#000">
        80-84
      </text>
      <text x="1%" y="32%" fontFamily="Arial" fontSize="10" fill="#000">
        70-74
      </text>
      <text x="1%" y="41%" fontFamily="Arial" fontSize="10" fill="#000">
        60-64
      </text>
      <text x="1%" y="50%" fontFamily="Arial" fontSize="10" fill="#000">
        50-54
      </text>
      <text x="1%" y="59%" fontFamily="Arial" fontSize="10" fill="#000">
        40-44
      </text>
      <text x="1%" y="68%" fontFamily="Arial" fontSize="10" fill="#000">
        30-34
      </text>
      <text x="1%" y="75%" fontFamily="Arial" fontSize="10" fill="#000">
        20-24
      </text>
      <text x="1%" y="83%" fontFamily="Arial" fontSize="10" fill="#000">
        10-14
      </text>
      <text x="1%" y="92%" fontFamily="Arial" fontSize="10" fill="#000">
        1-4
      </text>

      {/* Text labels for x-axis (to show percentage) */}
      <text x="5%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        10
      </text>
      <text x="9.5%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        9
      </text>
      <text x="14%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        8
      </text>
      <text x="18.5%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        7
      </text>
      <text x="23%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        6
      </text>
      <text x="27.5%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        5
      </text>
      <text x="32%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        4
      </text>
      <text x="36.5%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        3
      </text>
      <text x="41%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        2
      </text>
      <text x="45.5%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        1
      </text>
      <text x="50%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        0
      </text>
      <text x="54.5%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        1
      </text>
      <text x="59%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        2
      </text>
      <text x="63.5%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        3
      </text>
      <text x="68%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        4
      </text>
      <text x="72.5%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        5
      </text>
      <text x="77%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        6
      </text>
      <text x="81.5%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        7
      </text>
      <text x="86%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        8
      </text>
      <text x="91.5%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        9
      </text>
      <text x="96%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        10
      </text>
      <text x="50%" y="99%" fontFamily="Arial" fontSize="10" fill="#000">
        0
      </text>
    </svg>
  );
};

export default SvgChart;
