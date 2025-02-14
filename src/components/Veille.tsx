import reactDoc from "../assets/reactdoc.png";
import angularDoc from "../assets/angulardoc.png"
import grafikartImg from "../assets/grafikart.png"
import mattImg from "../assets/mattImg.png"
import llCoolChrisImg from "../assets/llcoolChrisImg.png"
import { Header } from "./text/Header";

type ImageProp = {
  image: string;
};

type VeilleItem = {
  image: string;
  text: string;
};

export default function Veille() {
  return (
    <section id="veille" className="pt-28 flex flex-col justify-center items-center">
      <Header title="veille" />
      <h3 className="my-4">
        <span className="font-bold">Fréquence :</span> 1 fois par semaine
      </h3>
      <Carousel />
    </section>
  );
}

function Carousel() {
  const items = [
    { image: reactDoc, text: "Documentation React.js" },
    { image: angularDoc, text: "Documentation Angular" },
    { image: grafikartImg, text: "Grafikart" },
    { image: mattImg, text: "Matt Pocock" },
    { image: llCoolChrisImg, text: "LlCoolChris" },
  ];

  return (
    <ul className="overflow-x-scroll flex gap-x-4 w-[75dvw] p-8 duration-75 hover:shadow-lg">
      {items.map((item, index) => (
          <VeilleItem key={index} image={item.image} text={item.text} />
      ))}
    </ul>
  );
}

function Image({ image }: ImageProp) {
  return <img src={image} alt="" className="w-96 h-96 object-cover rounded-sm border-2 border-black-200" />;
}

function VeilleItem({ image, text }: VeilleItem) {
  return (
    <li className="shrink-0">
      <Image image={image} />
      <p>{text}</p>
    </li>
  );
}
