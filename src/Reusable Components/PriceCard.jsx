import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import Button from "../Reusable Components/Button";


const PriceCard = ({ priceDetails, ...rest }) => {

    const features = priceDetails?.features || []

    const bg = priceDetails?.bg_color || 'bg-white'

  return (
    <div className={`flex flex-col lg:min-h-[500px] xl:w-[375px] p-9 border ${bg} border-black`} {...rest}>
      <p className="text-center text-lg font-semibold">{priceDetails?.plan_type}</p>
      <h1 id="custom_font" className="text-center mt-3 text-5xl font-semibold">
       {priceDetails?.price}
      </h1>
      <p className="text-center mt-6 text-lg">{priceDetails?.or_plan}</p>

      <ul className="space-y-4 mt-9 flex-1">
        {features.map((item, index) => (
          <li className="flex items-center" key={index}>
            <IoMdCheckmark className="text-2xl mr-4" />
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <Button text={"Get Started"} firstType={priceDetails?.isButton1} width={"w-full"} />
      </div>
    </div>
  );
};

export default PriceCard;
