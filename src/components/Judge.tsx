interface Props {
  name: string;
  score: number;
  onScoreChange: (score: number) => void;
}

export default function Judge({ name, score, onScoreChange }: Props) {
  const handleRangeChange = (event: any) => {
    const newScore = Number(event.target.value);
    onScoreChange(newScore);
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
          onChange={handleRangeChange}
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
