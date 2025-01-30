import { HeaderProp } from "./Header";

export default function SmallHeader({ title }: HeaderProp) {
  return <h1 className="capitalize mb-4 font-bold text-2xl">{title}</h1>;
}
