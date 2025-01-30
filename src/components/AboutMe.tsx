type HeaderProp = {
  title: string;
};

type DescProp = {
  text: string;
};

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <Header title="à propos de moi" />
        </div>
        <Desc text="Actuellement en BUT Métiers du Multimédia et du Web, je souhaite mettre à l'épreuve mes compétences" />
      </div>
      <section className="flex justify-evenly mt-12">
        <div className="flex flex-col justify-between w-1/2">
          <SmallHeader title="moi" />
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
          <Skill />
        </div>
      </section>
    </>
  );
}

function Header({ title }: HeaderProp) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="uppercase font-bold text-4xl mt-4">{title}</h1>
      <div className="w-1/4 border-b-4 border-b-rose-800 mt-4"></div>
    </div>
  );
}

function Desc({ text }: DescProp) {
  return (
    <>
      <p className="mt-8 w-[70dvw] text-center text-gray-800 text-xl">{text}</p>
    </>
  );
}

function SmallHeader({ title }: HeaderProp) {
  return (
    <>
      <h1 className="capitalize mb-4 font-bold text-2xl">{title}</h1>
    </>
  );
}

function Skill() {
  return (
    <>
      <ul className="flex-wrap">
        <SkillItem title="Docker" />
        <SkillItem title="Git" />
        <SkillItem title="React" />
        <SkillItem title="Typescript" />
        <SkillItem title="Adonis" />
      </ul>
    </>
  );
}

function SkillItem({ title }: HeaderProp) {
  return (
    <>
      <li className="inline-flex bg-gray-300 p-2 rounded-md mx-2 my-2">
        <p className="text-gray-700">{title}</p>
      </li>
    </>
  );
}
