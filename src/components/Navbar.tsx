export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-center shadow-xl">
        <ul className="inline-flex">
          <NavItem value="home" />
          <NavItem value="à propos" />
          <NavItem value="projets" />
          <NavItem value="contact" />
        </ul>
      </nav>
    </>
  );
}

type NavItemProp = {
  value: string;
};

function NavItem({ value }: NavItemProp) {
  return (
    <>
      <li className="uppercase px-4 py-5 font-bold hover:cursor-pointer hover:bg-rose-800 hover:text-white">
        {value}
      </li>
    </>
  );
}
