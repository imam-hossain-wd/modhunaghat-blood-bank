"use client";

import { Button } from "@/components/ui/button";
import { homebanner } from "@/utils/assets";
import Image from "next/image";

const HomeBanner = () => {
  const { banner } = homebanner;
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row justify-around items-center space-y-4 lg:space-y-0 lg:space-x-8 p-8 bg-gray-50">
        <div className="text-2xl lg:text-4xl font-bold text-[#DC143C] text-center lg:text-left -mt-">
          <h2 className="typewriter">Donate Blood, Save Lives</h2>
          <h2>Be A Hero Today</h2>
          <p className="text-lg text-gray-700 mt-4">
            Join our mission to help those in need. Your donation can save
            lives!
          </p>
          {/* <b className="mt-6 px-6 py-3 bg-[#DC143C] text-white rounded-md hover:bg-red-600 transition">
            Join as a Donor
          </b>
          <button className="mt-6 px-6 py-3 bg-[#DC143C] text-white rounded-md hover:bg-red-600 transition">
            Find Donor
          </button> */}

         <div className="flex  mt-5 items-center">
         <Button className="text-xl font-bold">
          Join as a Donor
          </Button>
          <Button className="text-xl ml-5 font-bold">
          Find Donor
          </Button>
         </div>
        </div>
        <Image
          src={banner}
          width={500}
          height={300}
          alt="blood donate home banner"
          className="w-80 lg:w-96 lg:h-auto h-72"
        />
      </div>

      <style jsx>{`
        .typewriter {
          overflow: hidden;
          white-space: nowrap;
          letter-spacing: 0.15em;
          animation: typing 3.5s steps(40, end);
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeBanner;
