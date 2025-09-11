"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { UserData } from "@/types";

interface IDCardProps {
  userData: UserData;
}

const IDCard = forwardRef<HTMLDivElement, IDCardProps>(({ userData }, ref) => {
  return (
    <div
      ref={ref}
      className="w-80 h-[520px] bg-white border border-gray-200 rounded-lg shadow-2xl ring-1 ring-black/5 overflow-hidden flex flex-col items-center p-6"
      style={{ fontFamily: "Montserrat, ui-sans-serif, system-ui" }}
    >
      {/* Logo Image */}
      <div className="w-full flex justify-center -mb-1">
        <Image
          src="/image.png"
          alt="Axzons HomeCare Logo"
          width={260}
          height={96}
          className="w-auto h-[72px] object-contain"
          priority
        />
      </div>

      {/* Photo */}
      <div className="mt-5 mb-4 w-[130px] h-[130px] rounded-xl border-2 border-gray-200 overflow-hidden shadow-md">
        {userData.photo ? (
          <Image
            src={URL.createObjectURL(userData.photo)}
            alt="Staff Photo"
            width={130}
            height={130}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
            PHOTO
          </div>
        )}
      </div>

      {/* Name / Role */}
      <div className="text-[22px] font-extrabold uppercase tracking-wider text-purple-800 mb-1 text-center">
        {userData.name || "GAUSARI PUN"}
      </div>
      <div className="text-[18px] font-extrabold uppercase text-purple-800 leading-none">
        {userData.staffType?.toUpperCase() || "PCA"}
      </div>
      <div className="text-[14px] font-semibold uppercase text-gray-600 mb-5">
        Non-Medical Staff
      </div>

      {/* Divider (fade on both sides) */}
      <div className="h-[2px] w-[92%] rounded mx-auto bg-gradient-to-r from-transparent via-green-600 to-transparent opacity-70 mb-5" />

      {/* Contact */}
      <div className="text-center text-[13px] font-bold text-gray-800 leading-relaxed">
        <div className="uppercase mb-3">
          70 EAST SUNRISE HIGHWAY,
          <br />
          SUITE 500 VALLEY STREAM, NY 11581
        </div>
        <div className="text-[20px] font-extrabold tracking-widest text-purple-800 mb-2">
          866-429-9667
        </div>
        <div className="text-[13px] font-semibold text-gray-800 lowercase">
          www.axzonshomecare.com
        </div>
      </div>
    </div>
  );
});

IDCard.displayName = "IDCard";

export default IDCard;
