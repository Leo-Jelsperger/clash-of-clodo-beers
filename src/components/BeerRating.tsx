import { useState, useEffect } from "react";
// import Judge from "./Judge";
// import { Range } from "react-daisyui";

interface Props {
  name: string;
  alcohol: number;
  price: number;
  picture: string;
  // factor: number;
  onScoreChange?: (score: number, name: string) => void;
}

export default function BeerRating({
  name,
  alcohol,
  price,
  picture,
  onScoreChange = () => {},
}: Props) {
  const calc = alcohol && price ? alcohol / price : 0;
  const factor = calc.toPrecision(4);

  const [scoreLaurent, setScoreLaurent] = useState(0);
  const [scoreLeo, setScoreLeo] = useState(0);
  const [averageTaste, setAverageTaste] = useState(0);
  const [finalScore, setFinalScore] = useState(0);

  const RangeChangeLaurent = (event: any) => {
    setScoreLaurent(event.target.value);
  };

  const RangeChangeLeo = (event: any) => {
    setScoreLeo(event.target.value);
  };

  function NewScore() {
    const averageTaste = (Number(scoreLaurent) + Number(scoreLeo)) / 2;
    setAverageTaste(averageTaste);
    const score =
      ((Number(scoreLaurent) + Number(scoreLeo)) / 20 + 1) * Number(factor);
    const roundedScore = Math.round(score * 100) / 100;
    setFinalScore(roundedScore);
    onScoreChange(roundedScore, name);
  }

  // useEffect(() => {
  //   const averageTaste = (Number(scoreLaurent) + Number(scoreLeo)) / 2;
  //   setAverageTaste(averageTaste);
  //   const score =
  //     ((Number(scoreLaurent) + Number(scoreLeo)) / 20 + 1) * Number(factor);
  //   const roundedScore = Math.round(score * 100) / 100;
  //   setFinalScore(roundedScore);
  //   onScoreChange(roundedScore, name);
  // }, [scoreLaurent, scoreLeo, name]);

  return (
    <div className="flex flex-col lg:grid grid-cols-3 grid-rows-1 gap-8 p-8 w-full bg-gray-200 dark:bg-gray-400 rounded-2xl shadow-2xl ">
      <div className="flex w-full mx-auto">
        <div className="card bg-base-100 w-full shadow-xl">
          <figure className="h-56 bg-white">
            <img
              src={picture}
              alt={name}
              className="object-contain h-4/5"
            />
          </figure>
          <div className="card-body bg-stone-400">
            <h2 className="card-title text-2xl mx-auto my-8">{name}</h2>
            <p className="text-center w-full">Degré alcoolique : {alcohol}°</p>
            <p className="text-center w-full">Prix : {price}€</p>
            <p className="text-center w-full">Clodo Factor : {factor}</p>
            <p className="px-4 py-2 mt-8 bg-white w-full text-center text-xl rounded-full">
              Score Final <br />
              <span className="text-3xl font-extrabold">{finalScore}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-16 my-auto">
        {/* <Judge name="Romuald" />
        <Judge name="Clément" /> */}
        <div className="flex flex-col w-auto mt-16 lg:mt-0 gap-4 items-center">
          <p className="text-xl text-center w-full">Laurent</p>
          <div className="flex flex-col w-full">
            <input
              type="range"
              id="rangeLaurent"
              min={0}
              max={10}
              value={scoreLaurent}
              onChange={RangeChangeLaurent}
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
        <div className="flex flex-col w-auto gap-4 items-center">
          <p className="text-xl text-center w-full">Léo</p>
          <div className="flex flex-col w-full">
            <input
              type="range"
              min={0}
              max={10}
              value={scoreLeo}
              onChange={RangeChangeLeo}
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
        <div className="px-4 py-2 flex mx-auto bg-white rounded-xl hover:bg-gray-600 hover:text-white">
          <button
            className="text-2xl"
            onClick={NewScore}>
            Valider
          </button>
        </div>
        <div className="flex flex-col w-full gap-4">
          <p className="text-center text-xl">Note moyenne pour le goût</p>
          <div className="h-16 aspect-square flex mx-auto bg-white rounded-full">
            <p className="m-auto text-3xl font-bolder">{averageTaste}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
