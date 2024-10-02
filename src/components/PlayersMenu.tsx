import { useState } from "react";

export default function PlayersMenu({ onUpdatePlayerList }: any) {
  const [playerName, setPlayerName] = useState("");
  const [playerList, setPlayerList] = useState<string[]>([]);

  const handleInputChange = (event: any) => {
    setPlayerName(event.target.value);
  };

  const handleAddPlayer = (event: any) => {
    event.preventDefault();
    if (playerName.trim().length >= 3) {
      const newPlayerList = [...playerList, playerName];
      setPlayerList(newPlayerList);
      setPlayerName("");
      onUpdatePlayerList(newPlayerList);
    } else {
      alert("Attention, ajoutez un nom valable !");
    }
  };

  const deletePlayer = (indexToDelete: number) => {
    setPlayerList(playerList.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="flex flex-col gap-8 p-8 w-full bg-gray-200 dark:bg-gray-400 rounded-2xl shadow-2xl text-center">
      <p className="text-xl lg:text-4xl font-bold">Ajouter des dégustateurs</p>
      <form className="flex flex-col lg:flex-row w-3/4 lg:w-auto mx-auto gap-4 lg:text-xl">
        <input
          type="text"
          placeholder="Nom du dégustateur"
          className="px-4 py-2 bg-white rounded-full text-center"
          value={playerName}
          onChange={handleInputChange}
        />
        <button
          className="px-4 py-2 bg-gray-500 rounded-full text-white font-semibold hover:text-black hover:bg-white text-center"
          onClick={handleAddPlayer}>
          Ajouter le dégustateur
        </button>
      </form>
      <ul className="lg:text-xl flex flex-col gap-2">
        {playerList.map((player, index) => (
          <div
            key={index}
            className="grid grid-cols-2 grid-rows-1 w-full lg:w-1/2 mx-auto py-2 rounded-full bg-gray-300">
            <li className="mr-auto px-8">{player}</li>
            <button
              onClick={() => deletePlayer(index)}
              className="bg-gray-300 w-fit px-8 rounded-full ml-auto font-semibold">
              X
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
