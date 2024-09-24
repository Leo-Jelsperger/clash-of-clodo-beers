import { useState } from "react";

interface Props {
  name: string;
}

export default function Judge({ name }: Props) {
  const [score, setScore] = useState(0);
  const ScoreChange = (event: any) => {
    console.log(event.target.value);
    setScore(event.target.value);
  };

  return (
    <div className="flex flex-col w-auto gap-4 items-center">
      <p className="text-xl text-center w-full">{name}</p>
      <div className="flex flex-col w-full">
        <input
          type="range"
          min={0}
          max={10}
          value={score}
          onChange={ScoreChange}
          className="w-full flex justify-between mx-auto text-xs"
        />
        <div className="flex w-full justify-between mx-auto text-sm">
          <span>0</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
      </div>
    </div>
  );
}
