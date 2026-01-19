import StickyTabs from "@/components/stickytabs/categories";
import SectionTitle from "@/components/Heading/SectionTitle";
// import MyIoTWork from "@/components/projects/iot/MyIoTWorks";
// import MyWebWork from "@/components/projects/web/MyWebWorks";
import { Card } from "@/components/ui/card";

export default function Projects() {
  return (
    <Card className="glass relative flex flex-col text-white w-full xs:w-9/12 h-full p-6 xs:p-12">
      <div className="items-center">

        <SectionTitle title="Projects" progressBgClass="bg-primary"></SectionTitle>
      </div>
      <StickyTabs />

      {/* <MyWebWork />
      <MyIoTWork /> */}
    </Card>
  );
}
