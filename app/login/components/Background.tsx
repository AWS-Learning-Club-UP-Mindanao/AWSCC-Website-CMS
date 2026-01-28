import React from "react";

const bgVectorLeft = "/assets/top-left-vector.png";
const bgVectorBottomRight = "/assets/bottom-right-vector.png";
const bgVectorCenter = "/assets/center-vector.png";
const bgVectorTopRight = "/assets/top-right-vector.png";
const bgVectorTopRight2 = "/assets/top-right-vector2.png";

export default function LoginBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden p-4">
      {/* Background container */}
      <div className="absolute inset-0 bg-[#de5fb7] overflow-hidden">
        {/* Top right vector */}
        <div className="absolute -top-[124px] -right-[176px] w-[447px] h-[525px] overflow-hidden">
          <img
            alt=""
            src={bgVectorTopRight2}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top left vector */}
        <div className="absolute bottom-[50%] right-[75%] w-2xl h-[600px] overflow-hidden">
          <img alt="" src={bgVectorLeft} draggable={false} />
        </div>

        {/* Bottom right vector */}
        <div className="absolute top-[38%] left-[75%] w-2xl h-full overflow-hidden">
          <img alt="" src={bgVectorBottomRight} draggable={false} />
        </div>

        {/* Center vector */}
        <div className="absolute right-[15%] w-full h-[800px]">
          <img alt="" src={bgVectorCenter} draggable={false} />
        </div>

        {/* Top right vector 2 */}
        <div className="absolute bottom-[20%] left-[72%] w-2xl h-[800px] overflow-hidden">
          <img alt="" src={bgVectorTopRight} draggable={false} />
        </div>
      </div>

      {/* Content */}
      {children}
    </div>
  );
}
