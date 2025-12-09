import SectionTitle from "@/components/Heading/SectionTitle";
import { Card } from "@/components/ui/card";
import Work from "@/components/Work/Work";


export default function Experience() {
  return (
    <Card className="glass relative flex flex-col items-center text-white w-full xs:w-9/12 h-full p-6 xs:p-12">
      <h1 className="text-primary dark:text-secondary text-4xl tracking-wide mb-6">
        <SectionTitle title="Experience" progressBgClass="bg-primary"></SectionTitle>


      </h1>



      <div className="flex flex-col justify-center my-0 mx-auto">
        <div className="absolute bottom-20 z-40 p-3">
        </div>



        <Work />

      </div>
    </Card>
  );
}
