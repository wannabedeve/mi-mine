import Link from "next/link";
import { Card } from "../ui/card";
import { Icons } from "../icon";
import './style.css';

export default function AboutCard() {
  return (
    <Link id="about-card" aria-label="About" title="About" href="/about">
      <Card className="card-text relative flex justify-center items-center flex-row text-primary dark:text-secondary text-3xl tracking-wide">
        About{" "}
        <div className="absolute top-0 right-0 p-6">
          <Icons.link />
        </div>
      </Card>
    </Link>
  );
}
