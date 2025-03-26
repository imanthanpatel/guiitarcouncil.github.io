// src/components/Scalar.tsx
import React from "react";

interface Stat {
  number: string | number;
  suffix?: string;
  label: string;
}

const Scalar: React.FC = () => {
  const stats: Stat[] = [
    { number: "100+", label: "Startups Mentored" },
    { number: 450, label: "Startups Incubated" },
    { number: 50, suffix: "L+", label: "Startup Funded" },
    { number: 15, label: "IPR Filed" },
    { number: "10,000", label: "Students Sensitized" },
  ];

  return (
    <div className="bg-secondary text-primary text-center px-5 py-[50px] pb-[70px]">
      <h2 className="text-[3rem] mb-[40px] uppercase font text-primary max-[480px]:text-[2.5rem]">
        We Deliver Results
      </h2>
      <div className="flex justify-evenly items-start flex-wrap mt-[30px] max-[768px]:flex-col max-[768px]:items-center">
        {stats.map((stat, index) => (
          <div key={index} className="text-center m-5 max-[768px]:my-[15px] max-[768px]:mx-0">
            <div className="text-[3rem] font text-black mb-[10px] border-b-4 border-black inline-block pb-[5px] max-[480px]:text-[2.5rem]">
              {stat.number}
              {stat.suffix && stat.suffix}
            </div>
            <p className="text-[2rem] text-[#666] mt-[10px] max-[480px]:text-[0.9rem]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scalar;