import React from "react";
import Desc from "./text/Desc";
import { Header } from "./text/Header";
import { Skill } from "./AboutMe";
import webdocImg from "../assets/webdoc.png";
import pulsoraImg from "../assets/pulsora.png";
import todoAppImg from "../assets/todoapp.png";
import ac2flVideo from "../assets/ac2fl.webm";

type ProjectProp = {
  title: string;
  desc?: string;
  url: string;
  img: string;
  list: string[];
  type: "video" | "img";
};

type Techno = {
  list: string[];
};

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col pt-28">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <Header title="projets" />
        </div>
        <Desc text="Voici les projets auxquels j'ai pris part" />
      </div>
      <section className="flex flex-col my-16">
        <Project
          url="https://github.com/jpkamdem/webdoc-zited"
          img={webdocImg}
          type="img"
          title="Webdocumentaire - Zited"
          desc="Réalisation d'un site web ayant pour but de promouvoir un artiste émergent : Zited"
          list={["Git", "Figma", "Javascript"]}
        />
        <Project
          url="https://github.com/jpkamdem/ac2fl"
          img={ac2flVideo}
          type="video"
          title="AC2FL"
          list={["Git", "Figma", "Javascript"]}
        />
        <Project
          url="https://github.com/jpkamdem/pulsora-final"
          img={pulsoraImg}
          type="img"
          title="Pulsora"
          desc="Pulsora est une application de gestion de clubs de football. Elle permet aux équipes amateurs d'avoir accès à un outil leur permettant de publier des articles, consulter & simuler les matchs ainsi que rendre consultable l'état de santé des joueurs tout en recevant des conseils nutrition."
          list={[
            "Git",
            "Docker",
            "Figma",
            "Typescript",
            "React",
            "Adonis.js",
            "SQL",
            "Tailwind",
          ]}
        />
        <Project
          url="https://github.com/jpkamdem/new-todo-app"
          img={todoAppImg}
          type="img"
          title="Application de liste de tâches"
          list={["Git", "Docker", "Tailwind", "Typescript", "React"]}
        />
      </section>
    </section>
  );
}

function Project({ title, desc, url, img, list, type }: ProjectProp) {
  return (
    <div className="flex items-center justify-around my-8">
      {type === "img" ? (
        <img src={img} alt={title} className="w-1/2 border-6" />
      ) : (
        <video loop src={img} className="w-1/2" />
      )}
      <div className="flex flex-col gap-5 w-1/4">
        <h3 className="font-black text-2xl">{title}</h3>
        {desc ? <p>{desc}</p> : null}
        <ul>
          <UsedTechnos list={list} />
        </ul>
        <p className="bg-rose-800 p-4 rounded-lg text-white duration-100 hover:cursor-pointer hover:bg-white border hover:text-black">
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
