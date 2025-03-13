import Desc from "./text/Desc";
import { Header, HeaderProp } from "./text/Header";
import SmallHeader from "./text/SmallHeader";

export default function AboutMe() {
  return (
    <section
      id="about_me"
      className="h-[70dvh] flex flex-col justify-center items-center bg-gray-50-50 shadow-xs pt-28"
    >
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <Header title="à propos de moi" />
        </div>
        <Desc text="Féru de nouvelles technologies et désireux d'apprendre, je suis à la recherche d'expérience afin de solidifier mes compétences." />
      </div>
      <section className="flex justify-evenly my-16">
        <div className="flex flex-col justify-between w-1/3">
          <SmallHeader title="parcours" />
          <p className="text-lg">
            Actuellement en 3e année de{" "}
            <span className="font-black">
              BUT Métiers du Multimédia et de l'Internet
            </span>
            , je suis un développeur web FullStack qui a pour mission de produire des
            sites interactifs ainsi qu'une architecture côté serveur solide pour
            divers projets.
          </p>
        </div>
        <div className="flex flex-col w-1/3">
          <SmallHeader title="mes compétences" />
          <Skills />
        </div>
      </section>
    </section>
  );
}

function Skills() {
  return (
    <ul className="flex-wrap">
      <Skill title="Typescript" />
      <Skill title="Javascript" />
      <Skill title="Php" />
      <Skill title="Node.js" />
      <Skill title="Git" />
      <Skill title="Docker" />
      <Skill title="SQL" />
      <Skill title="Angular" />
      <Skill title="React" />
      <Skill title="Symfony" />
      <Skill title="Tailwind" />
    </ul>
  );
}

export function Skill({ title }: HeaderProp) {
  return (
    <li className="inline-flex bg-gray-300 p-2 rounded-md mx-2 my-2">
      <p className="text-gray-700">{title}</p>
    </li>
  );
}
