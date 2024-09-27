export default function Hero() {
  return (
    <div
      className="hero min-h-dvh sticky top-0"
      style={{
        backgroundImage:
          "url(https://www.pixelstalk.net/wp-content/uploads/2016/07/Beer-Image-HD.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-60 backdrop-blur-[2px]"></div>
      <div className="hero-content text-neutral-content text-center">
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
            fidèle du mendiant. <br /> <br /> Mais la 8.6 est-elle vraiment son
            amie la plus réconfortante ? C'est ce que nous allons découvrir
            ensemble.
          </p>
          <button
            className="btn bg-gray-800 myBtn"
            onClick={goToBeer}>
            Allons-y !
          </button>
        </div>
      </div>
    </div>
  );
}

export function goToBeer() {
  const myDiv = document.querySelector(".myDiv");

  screen.width >= 1024
    ? myDiv?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      })
    : myDiv?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
}
