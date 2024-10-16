interface Props {
  hidden?: boolean;
}

export default function Hero({ hidden }: Props) {
  return (
    <div
      className="hero min-h-dvh sticky top-0"
      style={{
        backgroundImage: "url(./hero-background.webp)",
      }}>
      <div className="hero-overlay bg-opacity-60 backdrop-blur-[2px]"></div>
      <div
        className={`hero-content text-neutral-content text-center ${
          hidden ? "opacity-0" : ""
        }`}>
        <div className="max-w-screen-lg">
          <h1 className="my-4 lg:my-16 text-5xl lg:text-7xl font-bold uppercase bg-opacity-90 text-gray-800 bg-slate-200 rounded-3xl p-8">
            Clash of <br />
            <span className="italic font-serif font-extralight">
              clodo beers
            </span>
          </h1>
          <p className="mb-8 text-md lg:text-xl p-4  rounded-3xl text-slate-200 bg-gray-800 bg-opacity-90">
            Être clodo, ce n'est pas qu'une situtation financière, c'est aussi
            un art de vivre. Au même titre qu'un Château-Neuf-Du-Pape est un
            compagnon essentiel du riche entrepreneur, la 8.6 est l'ami le plus
            fidèle du mendiant. <br /> <br /> Mais cette fameuse 8.6 est-elle
            vraiment <span className="extra-bold underline">LA</span> plus
            réconfortante ? C'est ce que nous allons tenter de découvrir
            ensemble.
          </p>
          <button
            className="bg-white text-black px-4 py-2 rounded-lg"
            onClick={goToBeer}>
            Allons-y !
          </button>
        </div>
      </div>
    </div>
  );
}

export function goToBeer() {
  const myDiv = document.querySelector("#myDiv");

  screen.width >= 1024
    ? myDiv?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    : myDiv?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
}
