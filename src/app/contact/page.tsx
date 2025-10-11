import ContactMe from "@/components/contact/Contact";
import SectionTitle from "@/components/Heading/SectionTitle";
import Social from "@/components/Social2/Social";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <Card className="glass relative flex flex-col text-white w-full xs:w-9/12 h-full p-6 xs:p-12">
      <h1 className="text-primary dark:text-secondary text-4xl tracking-wide mb-6">

        <SectionTitle title="Contact" progressBgClass="bg-primary"></SectionTitle>


      </h1>
      {/* <Social /> */}

      <ContactMe />


    </Card>
  );
}
