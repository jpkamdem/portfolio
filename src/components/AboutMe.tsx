import Desc from "./text/Desc";
import { Header, HeaderProp } from "./text/Header";
import SmallHeader from "./text/SmallHeader";

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <Header title="à propos de moi" />
        </div>
        <Desc
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas sit excepturi error, optio doloremque fuga hic ad velit repellendus dolorem.
"
        />
      </div>
      <section className="flex justify-evenly my-16">
        <div className="flex flex-col justify-between w-1/3">
          <SmallHeader title="parcours" />
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            corrupti, minima voluptas quod culpa, dolore quis hic necessitatibus
            placeat itaque accusantium iure quibusdam esse, deserunt illum sint
            saepe! Aliquid, omnis libero. Expedita molestias unde, quod incidunt
            dignissimos maxime voluptate sunt excepturi odit cupiditate
            provident, ratione ex nesciunt modi debitis doloribus natus soluta
            illo libero nemo! Accusamus ea perspiciatis temporibus voluptatum
            unde sapiente inventore soluta eum adipisci, aliquam nostrum, alias
            officiis eveniet, earum nobis quas labore illo atque beatae esse
            cumque expedita. Nulla odit magnam earum totam sed minima,
            laudantium, placeat, perspiciatis facilis qui consequuntur alias.
            Earum, pariatur error.
          </p>
        </div>
        <div>
          <SmallHeader title="mes compétences" />
          <Skills />
        </div>
      </section>
    </>
  );
}

function Skills() {
  return (
    <ul className="flex-wrap">
      <Skill title="Docker" />
      <Skill title="Git" />
      <Skill title="React" />
      <Skill title="Typescript" />
      <Skill title="Adonis" />
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
