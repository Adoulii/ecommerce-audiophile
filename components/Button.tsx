import Image from "next/image";
import Link from "next/link";
import React from "react";
type ButtonProps = {
  text: string;
};
const Button = ({ text }: ButtonProps) => {
  return (
    <button className="h-[48px] w-[160px] bg-[#D87D4A] text-subtitle font-bold text-white hover:bg-[#FBAF85] uppercase">
      <Link href="{}">
        {text}
      </Link>
    </button>
  );
};

export default Button;
