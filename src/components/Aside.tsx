import { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import cv from "../assets/cv.pdf";
import cvImage from "../assets/cv.png";
import email from "../assets/email.png";

type AsideProp = {
  link: string;
  icon: IconType;
};

export default function Aside() {
  return (
    <aside className="absolute left-0 flex items-center justify-center shadow-md">
      <ul>
        <AsideItem
          link="https://www.linkedin.com/in/jean-philippe-kamdem-92b699210/"
          icon={FaLinkedin}
        />
        <li className="hover:cursor-pointer">
          <div className="inline-flex items-center justify-center bg-gray-50 p-4">
            <a href={cv} target="_blank">
              <img src={cvImage} alt="" className="h-8"/>
            </a>
          </div>
        </li>
        <li className="hover:cursor-pointer">
          <div className="inline-flex items-center justify-center bg-gray-50 p-4">
            <a href="mailto:jpkamdem@proton.me">
              <img src={email} alt="" className="h-8"/>
            </a>
          </div>
        </li>
      </ul>
    </aside>
  );
}

function AsideItem({ link, icon: Icon }: AsideProp) {
  return (
    <li className="hover:cursor-pointer">
      <div className="inline-flex items-center justify-center bg-gray-50 p-4">
        <a href={link} target="_blank">
          <Icon className="mr-2" size={36} />
        </a>
      </div>
    </li>
  );
}
