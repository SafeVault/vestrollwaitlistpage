import { CircleCheckIcon, CrowIcon } from "@/assets/svg";
import { Button } from "../common/button";

function Pricing() {
  return (
    <section className="mt-25 lg:mt-50 ">
      <div className="max-w-310 mx-auto px-5 flex flex-col gap-6 lg:flex-row lg:gap-3">
        <div className="border-[0.5px] border-[#E5E7EB] rounded-3xl py-6 px-4 bg-linear-to-b from-[#FFFFFF] to-[#F3E5FF] space-y-6 ">
          <div className="pb-4 border-b border-[rgb(200,143,251)] space-y-5">
            <div className="flex flex-col">
              <p className="text-[#374151] leading-[150%]">Starter Plan</p>
              <p className="font-semibold text-[44px] pt-2 leading-[130%]">
                $0<span className="text-xl leading-[150%]">/mo</span>
              </p>
              <p className="text-sm font-medium text-[#374151] leading-7">
                Best for Beginners
              </p>
            </div>
            <div className="space-y-5">
              <Button
                variant="primary"
                className="bg-[#5E2A8C] rounded-lg px-4 py-3 text-white w-full font-medium text-sm"
              >
                Get Started
              </Button>
              <p className="text-[#374151] font-medium text-center">
                No credit card required
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="font-semibold leading-[130%]">What's Included:</p>
            <div className="space-y-4 md:space-y-8">
              <div className="flex gap-4 items-start">
                <CircleCheckIcon className="text-[#5E2A8C]" />
                <p className="text-sm leading-[130%] md:text-xl">
                  Basic budgeting & expense tracking
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <CircleCheckIcon className="text-[#5E2A8C]" />
                <p className="text-sm leading-[130%] md:text-xl">
                  Secure transactions & bill payments{" "}
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <CircleCheckIcon className="text-[#5E2A8C]" />
                <p className="text-sm leading-[130%] md:text-xl">
                  Access to financial reports & insights
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <CircleCheckIcon className="text-[#5E2A8C]" />
                <p className="text-sm leading-[130%] md:text-xl">
                  Standard customer support
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <CircleCheckIcon className="text-[#5E2A8C]" />
                <p className="text-sm leading-[130%] md:text-xl">
                  Limited investment tools
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-10 lg:mt-0 ">
          <div className="flex bottom-full z-20 items-center gap-2.5 bg-[#643490] rounded-t-[10px] left-1/2 -translate-x-1/2 h-9 px-9 w-fit  absolute">
            <CrowIcon />
            <p className="text-white">Popular</p>
          </div>
          <div className="border-[0.5px] border-[#E5E7EB] rounded-3xl py-6 px-4 bg-linear-to-b from-[#5E2A8C] to-[#1A0B26] space-y-6">
            <div className="pb-4 border-b border-[rgb(200,143,251)] space-y-5">
              <div className="flex flex-col">
                <p className="text-white leading-[150%]">Starter Plan</p>
                <p className="font-semibold text-[44px] pt-2 leading-[130%] text-white">
                  $0<span className="text-xl leading-[150%]">/mo</span>
                </p>
                <p className="text-sm font-medium text-white leading-7">
                  Best for Beginners
                </p>
              </div>
              <div className="space-y-5">
                <Button
                  variant="primary"
                  className="bg-[#FFFFFF] rounded-lg px-4 py-3 text-[#5E2A8C] w-full font-medium text-sm"
                >
                  Get Started
                </Button>
                <p className="text-white font-medium text-center">
                  No credit card required
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="font-semibold leading-[130%] text-[#E5E7EB]">
                What's Included:
              </p>
              <div className="space-y-4 md:space-y-8 text-[#E5E7EB]">
                <div className="flex gap-4 items-start">
                  <CircleCheckIcon className="text-[#E5E7EB]" />
                  <p className="text-sm leading-[130%] md:text-xl">
                    Basic budgeting & expense tracking
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <CircleCheckIcon />
                  <p className="text-sm leading-[130%] md:text-xl">
                    Secure transactions & bill payments{" "}
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <CircleCheckIcon />
                  <p className="text-sm leading-[130%] md:text-xl">
                    Access to financial reports & insights
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <CircleCheckIcon />
                  <p className="text-sm leading-[130%] md:text-xl">
                    Standard customer support
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <CircleCheckIcon />
                  <p className="text-sm leading-[130%] md:text-xl">
                    Limited investment tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-[0.5px] border-[#E5E7EB] rounded-3xl py-6 px-4 bg-linear-to-b from-[#FFFFFF] to-[#F3E5FF] space-y-6">
          <div className="pb-4 border-b border-[rgb(200,143,251)] space-y-5">
            <div className="flex flex-col">
              <p className="text-[#374151] leading-[150%]">Starter Plan</p>
              <p className="font-semibold text-[44px] pt-2 leading-[130%]">
                $0<span className="text-xl leading-[150%]">/mo</span>
              </p>
              <p className="text-sm font-medium text-[#374151] leading-7">
                Best for Beginners
              </p>
            </div>
            <div className="space-y-5">
              <Button
                variant="primary"
                className="bg-[#5E2A8C] rounded-lg px-4 py-3 text-white w-full font-medium text-sm"
              >
                Get Started
              </Button>
              <p className="text-[#374151] font-medium text-center">
                No credit card required
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="font-semibold leading-[130%]">What's Included:</p>
            <div className="space-y-4 md:space-y-8">
              <div className="flex gap-4 items-start">
                <CircleCheckIcon className="text-[#5E2A8C]" />
                <p className="text-sm leading-[130%] md:text-xl">
                  Basic budgeting & expense tracking
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <CircleCheckIcon className="text-[#5E2A8C]" />
                <p className="text-sm leading-[130%] md:text-xl">
                  Secure transactions & bill payments{" "}
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <CircleCheckIcon className="text-[#5E2A8C]" />
                <p className="text-sm leading-[130%] md:text-xl">
                  Access to financial reports & insights
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <CircleCheckIcon className="text-[#5E2A8C]" />
                <p className="text-sm leading-[130%] md:text-xl">
                  Standard customer support
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <CircleCheckIcon className="text-[#5E2A8C]" />
                <p className="text-sm leading-[130%] md:text-xl">
                  Limited investment tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
