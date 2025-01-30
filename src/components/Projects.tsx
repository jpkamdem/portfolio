import Desc from "./text/Desc";
import { Header } from "./text/Header";
import webdocImg from "../assets/webdoc.png";
import pulsoraImg from "../assets/pulsora.png";
import React from "react";
import { Skill } from "./AboutMe";

type ProjectProp = {
  title: string;
  desc: string;
  url: string;
  img: string;
  list: string[];
};

type Techno = {
  list: string[];
};

export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <Header title="projets" />
        </div>
        <Desc text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur non eum laboriosam." />
      </div>
      <section className="flex flex-col my-16">
        <Project
          url="https://github.com/jpkamdem/webdoc-zited"
          img={webdocImg}
          title="Webdocumentaire - Zited"
          desc="Réalisation d'un site web ayant pour but de promouvoir un artiste émergent : Zited"
          list={["Git", "Figma", "Javascript"]}
        />
        <Project
          url="https://github.com/jpkamdem/pulsora-final"
          img={pulsoraImg}
          title="Pulsora"
          desc="Pulsora est une application de gestion de clubs de football. Elle permet aux équipes amateurs d'avoir accès à un outil leur permettant de publier des articles, consulter les matchs ainsi que l'état de santé des joueurs tout en recevant des conseils nutrition."
          list={["Git", "Docker", "Typescript", "React", "Adonis"]}
        />
      </section>
    </>
  );
}

function Project({ title, desc, url, img, list }: ProjectProp) {
  return (
    <div className="flex items-center justify-around my-8">
      <img src={img} alt={title} className="w-1/2" />
      <div className="flex flex-col gap-5 w-1/4">
        <h3 className="font-black text-2xl">{title}</h3>
        <p>{desc}</p>
        <ul>
          <UsedTechnos list={list} />
        </ul>
        <p className="bg-rose-800 p-4 rounded-sm text-white duration-100 hover:cursor-pointer hover:bg-white border hover:text-black">
          <a href={url} target="_blank">
            Voir le code
          </a>
        </p>
      </div>
    </div>
  );
}

function UsedTechnos({ list }: Techno) {
  return (
    <>
      {list.map((item, index) => (
        <React.Fragment key={index}>
          <Skill title={item} />
        </React.Fragment>
      ))}
    </>
  );
}
