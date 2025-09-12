"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { UserData } from "@/types";

interface IDCardProps {
  userData: UserData;
}

const IDCard = forwardRef<HTMLDivElement, IDCardProps>(({ userData }, ref) => {
  const role = (userData.staffType || "PCA").toUpperCase();
  const subtitle = role === "RN" ? "MEDICAL STAFF" : "NON-MEDICAL STAFF";

  return (
    <div
      ref={ref}
      className="w-80 h-[520px] bg-white border rounded-lg shadow-xl overflow-hidden flex flex-col items-center p-6"
      style={{
        fontFamily: "Montserrat, ui-sans-serif, system-ui",
        borderColor: "#e5e7eb",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Logo Image (plain <img> to match html2canvas output) */}
      <div className="w-full flex justify-center -mb-1">
        <img
          src="/image.png"
          alt="Axzons HomeCare Logo"
          style={{ height: 72, width: "auto" }}
          loading="eager"
          crossOrigin="anonymous"
        />
      </div>

      {/* Photo */}
      <div
        className="mt-5 mb-4 w-[130px] h-[130px] rounded-xl overflow-hidden shadow-md border-2"
        style={{ borderColor: "#e5e7eb" }}
      >
        {userData.photo ? (
          <Image
            src={URL.createObjectURL(userData.photo)}
            alt="Staff Photo"
            width={130}
            height={130}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-xs"
            style={{ backgroundColor: "#f3f4f6", color: "#9ca3af" }}
          >
            PHOTO
          </div>
        )}
      </div>

      {/* Name / Role */}
      <div
        className="text-[22px] font-extrabold uppercase tracking-wider mb-1 text-center"
        style={{ color: "#5b21b6" }}
      >
        {userData.name || "GAUSARI PUN"}
      </div>
      <div
        className="text-[18px] font-extrabold uppercase leading-none"
        style={{ color: "#5b21b6" }}
      >
        {role}
      </div>
      <div
        className="text-[14px] font-semibold uppercase mb-5"
        style={{ color: "#4b5563" }}
      >
        {subtitle}
      </div>

      {/* Divider (solid to avoid unsupported color functions) */}
      <div
        className="h-[2px] w-[92%] rounded mx-auto mb-5"
        style={{ backgroundColor: "#16a34a", opacity: 0.7 }}
      />

      {/* Contact */}
      <div
        className="text-center text-[13px] font-bold leading-relaxed"
        style={{ color: "#1f2937" }}
      >
        <div className="uppercase mb-3">
          70 EAST SUNRISE HIGHWAY,
          <br />
          SUITE 500 VALLEY STREAM, NY 11581
        </div>
        <div
          className="text-[20px] font-extrabold tracking-widest mb-2"
          style={{ color: "#5b21b6" }}
        >
          866-429-9667
        </div>
        <div
          className="text-[13px] font-semibold lowercase"
          style={{ color: "#1f2937" }}
        >
          www.axzonshomecare.com
        </div>
      </div>
    </div>
  );
});

IDCard.displayName = "IDCard";

export default IDCard;
