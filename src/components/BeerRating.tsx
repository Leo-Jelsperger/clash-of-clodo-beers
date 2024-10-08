import { useState } from "react";
import { useEffect } from "react";
import Judge from "./Judge";

interface Props {
  name: string;
  alcohol: number;
  price: number;
  picture: string;
  onScoreChange?: (score: number, name: string) => void;
  playerList: string[];
}

export default function BeerRating({
  name,
  alcohol,
  price,
  picture,
  onScoreChange = () => {},
  playerList,
}: Props) {
  const calc = alcohol && price ? alcohol / price : 0;
  const factor = calc.toPrecision(3);

  const [playerScores, setPlayerScores] = useState<number[]>([]);
  const [averageTaste, setAverageTaste] = useState(0);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    setPlayerScores(new Array(playerList?.length).fill(0));
  }, [playerList]);

  const handleScoreChange = (index: number, score: number) => {
    const newScores = [...playerScores];
    newScores[index] = score;
    setPlayerScores(newScores);
  };

  useEffect(() => {
    if (playerScores.length > 0) {
      const sum = playerScores.reduce((acc, score) => acc + score, 0);
      const average = sum / playerScores.length;
      setAverageTaste(parseFloat(average.toFixed(1)));
    }
  }, [playerScores]);

  const NewScore = () => {
    if (!playerList || playerList.length === 0) {
      alert("Ajoutez au moins un dégustateur.");
    } else {
      const average =
        playerScores.reduce((acc, score) => acc + score, 0) /
        playerScores.length;
      const score = (average / 10 + 1) * Number(factor);
      const roundedScore = Math.round(score * 100) / 100;
      setFinalScore(roundedScore);
      onScoreChange(roundedScore, name);
    }
  };

  return (
    <div className="relative flex flex-col lg:grid grid-cols-3 grid-rows-1 gap-8 p-8 w-full bg-gray-200 dark:bg-gray-400 rounded-2xl shadow-2xl ">
      <div className="flex w-full h-fit mx-auto lg:sticky top-8">
        <div className="card bg-base-100 w-full shadow-xl">
          <figure className="h-56 bg-white">
            <img
              src={picture}
              alt={name}
              className="object-contain h-4/5"
            />
          </figure>
          <div className="card-body bg-stone-400">
            <h2 className="card-title text-center text-2xl mx-auto my-8">
              {name}
            </h2>
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
        {playerList?.map((player, index) => (
          <Judge
            key={index}
            name={player}
            score={playerScores[index] ?? 0}
            onScoreChange={(score) => handleScoreChange(index, score)}
          />
        ))}
        <div className="flex flex-col w-full gap-4">
          <p className="text-center text-xl">Note moyenne pour le goût</p>
          <div className="h-16 aspect-square flex mx-auto bg-white rounded-full">
            <p className="m-auto text-3xl font-bolder">{averageTaste}</p>
          </div>
        </div>
        <div className="flex">
          <button
            className="px-4 py-2 flex mx-auto bg-white rounded-xl hover:bg-gray-600 hover:text-white text-2xl"
            onClick={NewScore}>
            Valider
          </button>
        </div>
      </div>
    </div>
  );
}
