import Image from "next/image";
import image from "@/assets/images/guy-sitting.jpg";
import Faq from "../common/Faq";
import WorkForceGallery from "./WorkForceGallery";
function FrequentlyAsked() {
  return (
    <section>
      <div className="max-w-310 mx-auto px-5  flex-col-reverse gap-25 flex lg:flex-col">
        <WorkForceGallery />
        <div className="space-y-5.75">
          <div className="space-y-4 md:space-y-11">
            <div className="md:hidden h-60.75  relative">
              {/* gradient overlay */}
              <div className="bg-linear-to-b from-[#50247800] to-[#502478] absolute inset-0  rounded-2xl overflow-hidden" />
              <Image
                src={image.src}
                blurDataURL={image.blurDataURL}
                height={image.blurHeight}
                width={image.width}
                alt="a guy sitting"
                className="w-full h-full rounded-2xl  object-cover object-[40%_10%] "
              />
            </div>
            {/* barge */}
            <div className="px-2 py-1 text-xs font-normal text-[#4A4A4A] bg-[#E5E7EB] rounded w-fit">
              <p>Frequently Asked Questions</p>
            </div>
            <h4 className="text-2xl md:text-3xl  lg:text-[2.5rem] font-medium leading-[120%]">
              Got Questions? We've Got Answers!
            </h4>
          </div>
          <div className="flex  gap-6">
            <div className="md:flex hidden   border border-[#F3F4F6] rounded-[40px] px-5 py-6">
              <div className="   w-81 h-124  relative">
                {/* gradient overlay */}
                <div className="bg-linear-to-b from-[#50247800] to-[#502478] absolute inset-0  rounded-2xl overflow-hidden" />
                <Image
                  src={image.src}
                  blurDataURL={image.blurDataURL}
                  height={image.blurHeight}
                  width={image.width}
                  alt="a guy sitting"
                  className="w-full h-full rounded-2xl  object-cover object-[40%_10%] "
                />
              </div>
            </div>
            <div className="w-full">
              <Faq />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FrequentlyAsked;
