import Button from "../components/Button";
import Image from "next/image";
import header from "../assets/home/desktop/image-hero.jpg";
const FeaturedProduct = () => {
  return (
    <section className="relative flex justify-center items-center bg-[#191919] mb-24 md:mb-32 lg:mb-52">
      <div className="hidden lg:block max-w-[1200px] w-screen h-[729px]">
        <Image src={header} alt="Headphone" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute md:w-[380px] z-20 left-1/2 lg:left-[16%] lg:ml-10 lg:text-left md:top-[52%] top-[57%] transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div>
          <p className="text-overline text-white opacity-[49.64%] mb-4 uppercase">
            new product
          </p>
          <h1 className="md:text-h1 text-white text-[36px] leading-[40px] tracking-[1.29px] font-bold uppercase mb-7">
            xx99 mark II headphones
          </h1>
          <p className="md:mx-4 lg:mx-0 lg:mb-12 text-body text-white opacity-75 mb-7">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast
          </p>
          <Button
            text={"See Product"}
          />
            
        </div>
      </div>
    </section>
  );
};
export default FeaturedProduct;