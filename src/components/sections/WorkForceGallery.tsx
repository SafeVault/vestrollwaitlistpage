import React from "react";
import { Button } from "../common/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import freelancers from "@/assets/images/Freelancers.jpg";
import remoteTeams from "@/assets/images/Remote teams.png";
import employers from "@/assets/images/Employers.png";
import startups from "@/assets/images/Startups.jpg";
function WorkForceGallery() {
  return (
    <section>
      <div className="space-y-2 flex-col  xl:flex-row flex justify-between ">
        <div className="flex flex-col lg:flex-row max-w-236.25">
          <h5 className="text-2xl font-medium leading-[120%] md:text-[2.5rem]  md:w-fit">
            Built for Every Modern Workforce
          </h5>
          <div className="max-w-120">
            <p className="text-sm leading-[150%] text-[#4B5563]">
              Whether you’re an employer, freelancer, remote team, or a Web3
              startup, our platform makes managing payments, contracts, and
              timesheets simple and seamless.
            </p>
          </div>
        </div>
        <div className="">
          <Button
            variant="primary"
            className="bg-[#5E2A8C] text-white px-4! text-sm! rounded-xl h-10!  py-3! flex gap-2 items-center  cursor-pointer focus:bg-[#5e2a8cd5] transition-colors ease-in-out duration-300 hover:bg-[#8b3dd0cf]  text-nowrap"
          >
            Join the wait list
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
      <div className="mt-8 flex  flex-col lg:flex-row gap-5 lg:gap-8">
        <div className="relative rounded-2xl  overflow-hidden  h-60.75 lg:h-143.75  flex-1">
          <p className="py-1 px-6 bg-[#FFFFFF4D] text-white backdrop-blur-sm rounded-full absolute left-4.5 bottom-4 md:top-4 md:bottom-auto md:right-4 md:left-auto z-20 text-xs font-bold">
            freelancers
          </p>
          <div className="w-full h-full relative">
            {/* bg gradient */}
            <div className="absolute inset-0 bg-[#00000033] " />
            <Image
              src={freelancers}
              alt="freelancers"
              width={freelancers.width}
              blurDataURL={freelancers.blurDataURL}
              height={freelancers.height}
              className="h-full w-full object-cover "
            />
          </div>
        </div>
        <div className="flex gap-5 md:gap-8 flex-row lg:flex-col flex-1  justify-between">
          <div className="relative rounded-2xl  overflow-hidden  h-67.75  flex-1 lg:flex-none">
            <p className="py-1 px-6 bg-[#FFFFFF4D] text-white backdrop-blur-sm rounded-full absolute left-1/2 -translate-x-1/2 md:translate-0 md:left-auto md:right-4 top-4 z-20 text-xs font-bold">
              Remote Teams
            </p>
            <div className="w-full h-full relative">
              {/* bg gradient */}
              <div className="absolute inset-0 bg-[#00000033] " />
              <Image
                src={remoteTeams}
                alt="remote Teams"
                width={remoteTeams.width}
                blurDataURL={remoteTeams.blurDataURL}
                height={remoteTeams.height}
                className="h-full w-full object-cover object-[30%_40%] md:object-[50%_40%]"
              />
            </div>
          </div>
          <div className="relative rounded-2xl  overflow-hidden  h-67.75  md:flex-1 lg:flex-none ">
            <p className="py-1 px-6 bg-[#FFFFFF4D] text-white backdrop-blur-sm rounded-full absolute left-1/2 -translate-x-1/2 md:translate-0 md:left-auto md:right-4 top-4 z-20 text-xs font-bold">
              Startups
            </p>
            <div className="w-full h-full relative">
              {/* bg gradient */}
              <div className="absolute inset-0 bg-[#00000033] " />
              <Image
                src={startups}
                alt="startups"
                width={startups.width}
                blurDataURL={startups.blurDataURL}
                height={startups.height}
                className="h-full w-full object-cover object-[30%_40%]"
              />
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl  overflow-hidden h-60.75 lg:h-143.75  flex-1 ">
          <p className="py-1 px-6 bg-[#FFFFFF4D] text-white backdrop-blur-sm rounded-full absolute left-4.5 bottom-4 md:top-4 md:bottom-auto md:right-4 md:left-auto z-20 text-xs font-bold">
            Employers
          </p>
          <div className="w-full h-full relative">
            {/* bg gradient */}
            <div className="absolute inset-0 bg-[#00000033] " />
            <Image
              src={employers}
              alt="Remote teams"
              width={employers.width}
              blurDataURL={employers.blurDataURL}
              height={employers.height}
              className="h-full w-full object-cover object-[30%_40%] md:object-[100%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkForceGallery;
