type NavItemProp = {
  value: string;
  anchor?: string;
};

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-10 flex items-center justify-center shadow-xl">
      <ul className="inline-flex">
        <NavItem value="accueil" anchor="hero" />
        <NavItem value="à propos" anchor="about_me" />
        {/* <NavItem value="veille" anchor="veille" /> */}
        <NavItem value="projects" anchor="projects" />
      </ul>
    </nav>
  );
}

function NavItem({ value, anchor }: NavItemProp) {
  return (
    <a href={`#${anchor}`}>
      <li className=" uppercase px-4 py-5 font-bold hover:cursor-pointer hover:bg-rose-800 hover:text-white">
        {value}
      </li>
    </a>
  );
}
