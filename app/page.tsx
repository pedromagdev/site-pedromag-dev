import InfoAbout from "@/components/home/info-about";
import InfoCondo from "@/components/home/info-condo";

export default function Home() {
  return (
    <div className="flex gap-20 flex-col">
      <InfoAbout />
      <InfoCondo />
    </div>
  );
}
