import { Header } from "./text/Header";

export default function Veille() {
  return (
    <>
      <div id="veille" className="flex flex-col items-center justify-center">
        <Header title="veille" />
        <ul>
          <li>Fréquence : 1 fois par semaine</li>
          <li>Doc react : image ? -{'>'} infos relatives à réact </li>
          <li>Doc angular : image ? -{'>'} infos relatives à angular </li>
          <li>grafikart : image ? -{'>'} infos globales </li>
          <li>hackernews : image ? -{'>'} infos globales </li>
          <li>comptes twi 1 : image ? -{'>'} infos globales </li>
          <li>comptes twi 2 : image ? -{'>'} infos globales </li>
        </ul>
      </div>
    </>
  )
}