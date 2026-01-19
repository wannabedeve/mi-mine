import Link from "next/link";
import { Card } from "../ui/card";
import { Icons } from "../icon";
import './style.css';


export default function ContactCard() {
  return (
    <Link id="contact-card" aria-label="Contact" title="Contact" href="/contact">
      <Card className="card-text relative flex justify-center items-center flex-row text-primary dark:text-secondary text-3xl tracking-wide">
        Contact{" "}
        <div className="absolute top-0 right-0 p-6">
          <Icons.link />
        </div>
      </Card>
    </Link>
  );
}
