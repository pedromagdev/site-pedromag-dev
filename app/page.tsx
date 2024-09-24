import InfoAbout from "@/components/home/info-about";
import InfoCondo from "@/components/home/info-condo";
import PricingInitial from "@/components/home/pricing-initial";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <div className="flex gap-20 flex-col">
      <Services />
      <PricingInitial/>
      <InfoAbout />
      <InfoCondo />
    </div>
  );
}
