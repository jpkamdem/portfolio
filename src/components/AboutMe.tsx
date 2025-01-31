import Desc from "./text/Desc";
import { Header, HeaderProp } from "./text/Header";
import SmallHeader from "./text/SmallHeader";

export default function AboutMe() {
  return (
    <section
      id="about_me"
      className="h-[70dvh] flex flex-col justify-center bg-gray-50 shadow-xs"
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
            , je suis un développeur web qui a pour mission de produire des
            sites interactifs ainsi qu'une architecture côté serveur solide pour
            divers projets.
          </p>
          <p className="text-lg">
            Au cours de ma formation, divers langages ont été abordés, notamment{" "}
            <span className="text-rose-800 font-black">PHP, Java, SQL</span>{" "}
            ainsi que <span className="font-black">Javascript</span> et surtout{" "}
            <span className="font-black">Typescript</span> que j'apprécie
            beaucoup. Des concepts très présents tels que la{" "}
            <span className="text-rose-800 font-black">
              programmation orienté objet
            </span>
            , le modèle MVC ou encore la méthode AGILE m'a permis de mieux
            manoeuvrer lorsque je travaillais sur divers projets.
          </p>
          <p className="text-lg">
            Dans l'optique de consolider mes récents acquis, je me tiens
            disponible pour de nouvelles expériences, que cela soit côté client
            ou serveur.
          </p>
        </div>
        <div>
          <SmallHeader title="mes compétences" />
          <Skills />
        </div>
      </section>
    </section>
  );
}

function Skills() {
  return (
    <ul className="flex-wrap w-2/3">
      <Skill title="Docker" />
      <Skill title="Git" />
      <Skill title="React" />
      <Skill title="Typescript" />
      <Skill title="Adonis.js" />
      <Skill title="SQL" />
      <Skill title="Tailwind" />
      <Skill title="Programmation orienté objet" />
      <Skill title="MVC" />
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
