'use client'

import { homebanner } from "@/utils/assets";
import Image from "next/image";
import bannerhome from "../../assets/blood-home-banner.png";

const HomePage = () => {
  const { banner } = homebanner;
  return (
    // <div className="flex flex-col lg:flex-row justify-around items-center space-y-4 lg:space-y-0 lg:space-x-8 p-8 bg-gray-50 rounded-md shadow-lg">
    //   <div className="text-4xl font-bold text-red-500 text-center lg:text-left">
    //     <h2>Donate Blood, Save Lives</h2>
    //     <h2>Be A Hero Today</h2>
    //     <p className="text-lg text-gray-700 mt-4">
    //       Join our mission to help those in need. Your donation can save lives!
    //     </p>
    //     <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
    //       Find a Blood Bank
    //     </button>
    //   </div>
    //   <Image
    //     src={bannerhome}
    //     width={500}
    //     height={500}
    //     alt="blood donate home banner"
    //     className="rounded-md "
    //   />
    // </div>

    <div >
    <div  className="flex flex-col lg:flex-row justify-around items-center space-y-4 lg:space-y-0 lg:space-x-8 p-8 bg-gray-50">
      <div className="text-4xl font-bold text-[#DC143C] text-center lg:text-left -mt-">
        <h2 className="typewriter">Donate Blood, Save Lives</h2>
        <h2>Be A Hero Today</h2>
        <p className="text-lg text-gray-700 mt-4">
          Join our mission to help those in need. Your donation can save lives!
        </p>
        <button className="mt-6 px-6 py-3 bg-[#DC143C] text-white rounded-md hover:bg-red-600 transition">
          Find a Blood Bank
        </button>
      </div>
      <Image
        src={banner}
        width={500}
        height={400}
        alt="blood donate home banner"
        className="w-96"
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

export default HomePage;
