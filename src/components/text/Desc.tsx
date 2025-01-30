export type DescProp = {
  text: string;
};

export default function Desc({ text }: DescProp) {
  return (
    <p className="mt-8 w-[70dvw] text-center text-gray-800 text-xl">{text}</p>
  );
}
