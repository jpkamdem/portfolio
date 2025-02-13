export type HeaderProp = {
  title: string;
};

export function Header({ title }: HeaderProp) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="uppercase font-bold text-4xl mt-4">{title}</h1>
      <div className="w-36 border-b-3 border-b-rose-800 mt-4"></div>
    </div>
  );
}
