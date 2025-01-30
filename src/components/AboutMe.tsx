type HeaderProp = {
  title: string;
};

export default function AboutMe() {
  return (
    <>
      <Header title="à propos de moi" />
    </>
  );
}

function Header({ title }: HeaderProp) {
  return (
    <>
      <h1 className="uppercase font-bold text-lg">{title}</h1>
    </>
  );
}
