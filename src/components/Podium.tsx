type Beer = {
  name: string;
  key: string;
  alcohol: number;
  price: number;
  picture: string;
};

interface Props {
  first: Beer | undefined;
  second: Beer | undefined;
  third: Beer | undefined;
  close: boolean;
  onCrossClick: () => void;
}

export default function Podium({
  first,
  second,
  third,
  close,
  onCrossClick,
}: Props) {
  return (
    <div className="grid grid-cols-3 grid-rows-8 h-full w-full gap-1 px-4 bg-gray-200 rounded-3xl relative">
      {close ? (
        <button
          className="col-start-3 row-start-1 flex font-extrabold text-4xl absolute top-4 right-6 font-mono"
          onClick={onCrossClick}>
          X
        </button>
      ) : (
        ""
      )}
      <div className="col-start-2 row-start-2 flex mx-auto animate-bounce pt-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/988/988868.png"
          alt=""
          className="mx-auto"
        />
      </div>
      <div className="col-start-2 row-start-4 flex">
        <p className="m-auto text-black text-xl font-semibold">{first?.name}</p>
      </div>
      <div className="col-start-2 row-start-3 flex bg-white w-fit mx-auto rounded-xl p-1">
        <img
          src={first?.picture}
          alt=""
          className="mx-auto object-contain"
        />
      </div>
      <div className="row-span-4 col-start-2 row-start-5 flex bg-stone-400 rounded-t-xl">
        <div className="flex m-auto bg-amber-400 h-14 aspect-square text-3xl text-black font-bold rounded-full">
          <p className="m-auto">1</p>
        </div>
      </div>

      <div className="col-start-1 row-start-5 flex">
        <p className="m-auto text-black text-xl font-semibold">
          {second?.name}
        </p>
      </div>
      <div className="col-start-1 row-start-4 flex bg-white w-fit mx-auto rounded-xl p-1">
        <img
          src={second?.picture}
          alt=""
          className="mx-auto object-contain"
        />
      </div>
      <div className="row-span-3 row-start-6 flex bg-stone-400 rounded-t-xl">
        <div className="flex m-auto bg-gray-200 h-14 aspect-square text-3xl text-black font-bold rounded-full">
          <p className="m-auto">2</p>
        </div>
      </div>

      <div className="col-start-3 row-start-6 flex">
        <p className="m-auto text-black text-xl font-semibold">{third?.name}</p>
      </div>
      <div className="col-start-3 row-start-5 flex bg-white w-fit mx-auto rounded-xl p-1">
        <img
          src={third?.picture}
          alt=""
          className="mx-auto object-contain"
        />
      </div>
      <div className="row-span-2 col-start-3 row-start-7 flex bg-stone-400 rounded-t-xl">
        <div className="flex m-auto bg-amber-600 h-14 aspect-square text-3xl text-black font-bold rounded-full">
          <p className="m-auto">3</p>
        </div>
      </div>
    </div>
  );
}
