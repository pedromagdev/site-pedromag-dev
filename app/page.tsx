import InfoAbout from "@/components/home/info-about";
import InfoCondo from "@/components/home/info-condo";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <div className="flex gap-20 flex-col">
      <Services />
      <InfoAbout />
      <InfoCondo />
    </div>
  );
}
