import React, { useEffect, useState } from "react";
import Button from "../Reusable Components/Button";
import PriceCard from "../Reusable Components/PriceCard";
import { monthlyPlanDetails } from "../JsonData/pricingData";
import { yearlyPlanDetails } from "../JsonData/pricingData";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [arrayToMap, setArrayToMap] = useState([]);

  const handleButtonToggle = (id) => {
    setActiveTab(id);
  };

  useEffect(() => {
    if (activeTab === 1) {
      setArrayToMap(monthlyPlanDetails);
    } else if (activeTab === 2) {
      setArrayToMap(yearlyPlanDetails);
    }
  }, [activeTab]);

  return (
    <div className="mb-20 pt-16 md:px-20 px-12">
      <p className="text-center text-[16px]">Choose the perfect plan for you</p>
      <h1 id="custom_font" className="text-center mt-6 text-4xl font-semibold">
        Pricing plan
      </h1>
      <p className="text-center mt-7 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex justify-center mt-12">
        <Button
          text={"Monthly"}
          firstType={activeTab === 1 ? true : false}
          width={"w-[120px]"}
          height={"h-[60px]"}
          onClick={() => handleButtonToggle(1)}
        />
        <Button
          text={"Yearly"}
          width={"w-[120px]"}
          firstType={activeTab === 2 ? true : false}
          height={"h-[60px]"}
          onClick={() => handleButtonToggle(2)}
        />
      </div>
      <div className="flex justify-center">
      <div className="grid lg:grid-cols-3  grid-cols-1 gap-8 mt-12">
        {arrayToMap.map((item, index) => (
          <PriceCard key={index} priceDetails={item} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Pricing;
