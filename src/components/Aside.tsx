import { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

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
        <AsideItem link="https://x.com/Konnnnro" icon={FaTwitter} />
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
