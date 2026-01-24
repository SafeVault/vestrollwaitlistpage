import Image from "next/image";
import FrequentlyAsked from "@/components/sections/frequentlyAsked";
import Pricing from "@/components/sections/Pricing";
export default function Home() {
  return (
    <div>
      <FrequentlyAsked />
      <Pricing />
    </div>
  );
}
