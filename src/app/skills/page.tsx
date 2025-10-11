import ExpandingCardGrid from "@/components/expand/Expnad";
import SectionTitle from "@/components/Heading/SectionTitle";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Skills() {
  return (
    <Card className="glass relative flex flex-col text-white w-full xs:w-9/12 h-full p-6 xs:p-12">
      <SectionTitle title="Skills" progressBgClass="bg-primary"></SectionTitle>

      <ExpandingCardGrid />
    </Card>
  );
}
