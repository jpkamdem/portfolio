type HeroProp = {
  firstName: string;
  lastName: string;
  job: string;
};

export default function Hero({ firstName, lastName, job }: HeroProp) {
  return (
    <div className="flex flex-col">
      <h1>
        <Capitalize value={firstName} color="text-rose-800" />{" "}
        <Capitalize value={lastName} />
      </h1>
      <h2>
        <Capitalize value={job} />
      </h2>
    </div>
  );
}

type CapitalizeProp = {
  value: string;
  color?: string;
};

function Capitalize({ value, color }: CapitalizeProp) {
  return (
    <>
      <span
        className={`capitalize font-bold text-6xl ${color ? `${color}` : ""}`}
      >
        {value}
      </span>
    </>
  );
}
