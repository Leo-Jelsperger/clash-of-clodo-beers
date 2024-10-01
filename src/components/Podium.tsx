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
}

export default function Podium({ first, second, third }: Props) {
  return (
    <div className="grid grid-cols-3 grid-rows-7 max-w-screen-md h-96 mx-auto px-4 pt-2 gap-1 bg-gray-200 rounded-t-3xl">
      <div className="col-start-2 row-start-1 flex mx-auto animate-bounce pt-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/988/988868.png"
          alt=""
        />
      </div>
      <div className="col-start-2 row-start-3 flex">
        <p className="m-auto text-black text-xl font-semibold">{first?.name}</p>
      </div>
      <div className="col-start-2 row-start-2 flex bg-white w-fit mx-auto rounded-xl p-1">
        <img
          src={first?.picture}
          alt=""
          className="mx-auto object-contain"
        />
      </div>
      <div className="row-span-4 col-start-2 row-start-4 flex bg-stone-400 rounded-t-xl">
        <div className="flex m-auto bg-amber-400 h-14 aspect-square text-3xl text-black font-bold rounded-full">
          <p className="m-auto">1</p>
        </div>
      </div>

      <div className="col-start-1 row-start-4 flex">
        <p className="m-auto text-black text-xl font-semibold">
          {second?.name}
        </p>
      </div>
      <div className="col-start-1 row-start-3 flex bg-white w-fit mx-auto rounded-xl p-1">
        <img
          src={second?.picture}
          alt=""
          className="mx-auto object-contain"
        />
      </div>
      <div className="row-span-3 row-start-5 flex bg-stone-400 rounded-t-xl">
        <div className="flex m-auto bg-gray-200 h-14 aspect-square text-3xl text-black font-bold rounded-full">
          <p className="m-auto">2</p>
        </div>
      </div>

      <div className="col-start-3 row-start-5 flex">
        <p className="m-auto text-black text-xl font-semibold">{third?.name}</p>
      </div>
      <div className="col-start-3 row-start-4 flex bg-white w-fit mx-auto rounded-xl p-1">
        <img
          src={third?.picture}
          alt=""
          className="mx-auto object-contain"
        />
      </div>
      <div className="row-span-2 col-start-3 row-start-6 flex bg-stone-400 rounded-t-xl">
        <div className="flex m-auto bg-amber-600 h-14 aspect-square text-3xl text-black font-bold rounded-full">
          <p className="m-auto">3</p>
        </div>
      </div>
    </div>
  );
}
