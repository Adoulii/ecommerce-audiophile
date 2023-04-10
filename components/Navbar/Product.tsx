import Image from "next/image";
import React from "react";
interface ProductProps {
  name: string;
  description: string;
  price: number;
}
const Product = ({ name, description, price }: ProductProps) => {
  return (
    <div className="relative lg:grid lg:grid-cols-2 lg:grid-rows-1 flex flex-col justify-center lg:items-center gap-8 md:gap-14 lg:gap-24 mt-16 mb-5 md:mt-32 lg:mt-40">
      <div className="relative hidden lg:block lg:h-[560px] lg:w-[540] rounded-lg">
        {/* <Image
        className="object-contain"
        src={makeUrl(children.categoryImage.desktop)}
        alt={children.name}
        layout="fill"
      /> */}
        <p className="text-h4 md:text-h2 md:px-24 lg:px-0 font-bold uppercase mt-5">
          {name}
        </p>
        <p className="mt-5 text-white opacity-70">{description}</p>
        <p className="mt-5 text-white opacity-70">{price}</p>
      </div>
    </div>
  );
};
export default Product;
