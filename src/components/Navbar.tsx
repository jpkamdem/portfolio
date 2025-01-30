type NavItemProp = {
  value: string;
};

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-10 flex items-center justify-center shadow-xl">
      <ul className="inline-flex">
        <NavItem value="accueil" />
        <NavItem value="à propos" />
        <NavItem value="projects" />
      </ul>
    </nav>
  );
}

function NavItem({ value }: NavItemProp) {
  return (
    <li className="uppercase px-4 py-5 font-bold hover:cursor-pointer hover:bg-rose-800 hover:text-white">
      {value}
    </li>
  );
}
