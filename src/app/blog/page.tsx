import SectionTitle from "@/components/Heading/SectionTitle";
import { Card } from "@/components/ui/card";

export default function Blog() {
  return (
    <Card className="glass relative flex flex-col text-white w-full xs:w-9/12 h-full p-6 xs:p-12">
      <h1 className="text-primary dark:text-secondary text-4xl font-semibold tracking-wide mb-6">
        <SectionTitle title="Blog" progressBgClass="bg-primary"></SectionTitle>


      </h1>


      Coming soon ...

      <br /><br />
    </Card>
  );
}
