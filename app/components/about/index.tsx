import Image from "next/image";
import { Card, CardTitle } from "../../../components/ui/card";
import AboutEmailCard from "./about-email-card";
import AboutSkillsCard from "./about-skills-card";

export default function About() {
  return (
    <section id="about" className="flex__col gap-section">
      <h3 className="section__heading">
        Who is <span className="text-color">Aissa Bedr</span>?
      </h3>
      <div className="flex__col gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <Card className="card card--gradient1">
            <div className="card__spacing card__spacing--responsive">
              <Image
                src="/about/project.svg"
                alt="project"
                width={75}
                height={75}
              />
              <CardTitle className="text-center lg:text-start">
                Turning business ideas into functional and scalable web
                solutions.
              </CardTitle>
            </div>
          </Card>
          <Card className="card">
            <div className="card__spacing card__spacing--responsive">
              <Image src="/about/time.svg" alt="time" width={75} height={75} />
              <CardTitle className="text-center lg:text-start">
                Delivering on deadlines while maintaining clear expectations.
              </CardTitle>
            </div>
          </Card>
        </div>
        <div className="grid grid-cols-1">
          <AboutSkillsCard />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <Card className="card">
            <div className="card__spacing card__spacing--responsive">
              <Image
                src="/about/heart-hand.svg"
                alt="heart-hand"
                width={75}
                height={75}
              />
              <CardTitle className="text-center lg:text-start">
                Building projects with love and passion.
              </CardTitle>
            </div>
          </Card>
          <AboutEmailCard />
        </div>
      </div>
    </section>
  );
}
