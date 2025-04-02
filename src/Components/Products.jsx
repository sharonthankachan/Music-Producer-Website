import React from "react";
import Button from "../Reusable Components/Button";

const Products = () => {
  return (
    <div className="md:flex justify-between lg:px-20 px-12 mt-[23vh] pb-24">
      <div className="relative">
        <div className="sticky top-36">
          <h1 id="custom_font" className="text-[2.15rem] font-semibold">
            Discover the Power of Our Products
          </h1>
          <p className="mt-8 text-lg text-start mr-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <div className="mt-5 mb-14">
            <Button width={"w-36"} firstType={true} text={"Main action"} />
          </div>
        </div>
      </div>
      <div className="relative space-y-8">
        <div className="min-h-40 lg:w-[96vh] p-8 sticky flex flex-col justify-between rotate-[-2deg] top-36 bg-[#ccc7d6] text-center text-3xl ">
          <div className="text-4xl flex justify-between font-semibold">
            <h1 id="custom_font">Submit Your Project</h1>{" "}
            <p id="custom_font" className="">01</p>
          </div>
          <p className="text-base font-normal mt-6">
            Send us your music project and let us know your vision and goals.
          </p>
        </div>
        <div className="min-h-48  p-8 lg:w-[96vh]  flex flex-col justify-between sticky rotate-[2deg] top-36 bg-[#aea7bf] text-center text-3xl">
          <div className="text-4xl flex justify-between font-semibold">
            <h1 id="custom_font">Custom Production</h1>{" "}
            <p id="custom_font" className="">02</p>
          </div>
          <p className="text-base font-normal mt-6">
            Our team of experienced producers will work on creating a custom
            sound tailored to your project.
          </p>
        </div>
        <div className="min-h-48 p-8 lg:w-[96vh]  flex flex-col justify-between sticky rotate-[-2deg] top-36 bg-[#ccc7d6] text-center text-3xl">
          <div className="text-4xl flex justify-between font-semibold">
            <h1 id="custom_font">Review and Feedback</h1>{" "}
            <p id="custom_font" className="">03</p>
          </div>
          <p className="text-base font-normal mt-6">
            You will receive the produced music for review and provide any
            feedback for revisions.
          </p>
        </div>
        <div className="min-h-48 p-8 lg:w-[96vh] flex flex-col justify-between sticky rotate-[2deg] top-36 bg-[#aea7bf] text-center text-3xl">
          <div className="text-4xl flex justify-between font-semibold">
            <h1 id="custom_font">Final Delivery</h1> <p id="custom_font" className="">04</p>
          </div>
          <p className="text-base font-normal mt-6">
            Once the revisions are completed and approved, you will receive the
            final high-quality production for your project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
