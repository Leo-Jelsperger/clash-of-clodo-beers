export default function Podium() {
  return (
    <div className="grid grid-cols-3 grid-rows-7 max-w-screen-md h-96 mx-auto px-4 gap-4 bg-gray-200 rounded-t-3xl">
      <div className="row-span-4 col-start-2 row-start-4 flex bg-stone-400 rounded-t-xl">
        <div className="flex m-auto bg-amber-400 h-14 aspect-square text-3xl text-black font-bold rounded-full">
          <p className="m-auto">1</p>
        </div>
      </div>
      <div className="row-span-3 row-start-5 flex bg-stone-400 rounded-t-xl">
        <div className="flex m-auto bg-gray-200 h-14 aspect-square text-3xl text-black font-bold rounded-full">
          <p className="m-auto">2</p>
        </div>
      </div>
      <div className="row-span-2 col-start-3 row-start-6 flex bg-stone-400 rounded-t-xl">
        <div className="flex m-auto bg-amber-600 h-14 aspect-square text-3xl text-black font-bold rounded-full">
          <p className="m-auto">3</p>
        </div>
      </div>
    </div>
  );
}
