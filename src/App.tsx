import BeerRating from "./components/BeerRating";
import Hero from "./components/Hero";
import "./App.css";
import { useEffect, useState } from "react";
import BeerList from "./components/BeerList";
import Podium from "./components/Podium";
import Confetti from "react-confetti";

type Beer = {
  name: string;
  key: string;
  alcohol: number;
  price: number;
  picture: string;
};

const viewH = screen.height * 0.8;
const beers = BeerList();

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [scoreEntity, setScoreEntity] = useState<Record<string, number>>({});
  const [first, setFirst] = useState<Beer>();
  const [second, setSecond] = useState<Beer>();
  const [third, setThird] = useState<Beer>();
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > viewH) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scoreEntity) {
      const newRanking = Object.entries(scoreEntity).sort(
        (a, b) => b[1] - a[1]
      );

      const firstBeer = beers.find((elt) => elt.name === newRanking[0]?.[0]);
      const secondBeer = beers.find((elt) => elt.name === newRanking[1]?.[0]);
      const thirdBeer = beers.find((elt) => elt.name === newRanking[2]?.[0]);

      setFirst(firstBeer);
      setSecond(secondBeer);
      setThird(thirdBeer);
    }
  }, [scoreEntity]);

  const onIndividualScoreChange = (score: number, name: string) => {
    setScoreEntity((s) => ({
      ...s,
      [name]: score,
    }));
  };

  const onCrossClick = () => {
    const podium = document.querySelector("#podium");
    const mainDiv = document.querySelector("#mainDiv");
    const confetti = document.querySelector("#confetti");
    podium?.classList.toggle("hidden");
    podium?.classList.toggle("block");
    podium?.classList.toggle("opacity-0");
    podium?.classList.toggle("opacity-100");
    mainDiv?.classList.toggle("brightness-100");
    confetti?.classList.toggle("hidden");
  };

  useEffect(() => {
    const beerN = beers.length;
    const rankN = Object.keys(scoreEntity).length;
    if (beerN === rankN) {
      setPopUp(true);
    }
  }, [scoreEntity]);

  useEffect(() => {
    if (popUp) {
      const podium = document.querySelector("#podium");
      const podiumBot = document.querySelector("#podiumBot");
      const mainDiv = document.querySelector("#mainDiv");
      const confetti = document.querySelector("#confetti");
      podium?.classList.toggle("hidden");
      podium?.classList.toggle("block");
      podiumBot?.classList.toggle("hidden");
      podiumBot?.classList.toggle("block");
      confetti?.classList.toggle("hidden");
      setTimeout(() => {
        podium?.classList.toggle("opacity-0");
        podium?.classList.toggle("opacity-100");
        mainDiv?.classList.toggle("brightness-[25%]");
        confetti?.classList.toggle("opacity-0");
        confetti?.classList.toggle("opacity-100");
      }, 500);
    }
  }, [popUp]);

  return (
    <div className="flex flex-col text-black">
      <div
        className="fixed top-0 left-0 z-50 hidden opacity-0 transition ease-in duration-[3000ms]"
        id="confetti">
        <Confetti />
      </div>
      <div
        className="w-[95dvw] h-[90dvh] lg:w-[85dvw] lg:h-[85dvh] mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed z-40 hidden opacity-0 transition ease-in duration-1000"
        id="podium">
        <Podium
          first={first}
          second={second}
          third={third}
          close={true}
          onCrossClick={onCrossClick}
        />
      </div>
      <div
        id="mainDiv"
        className="flex flex-col transition ease-in duration-500">
        <Hero hidden={scrolled} />
        <div className="z-20">
          <div className="my-12">
            <div
              className="flex flex-col max-w-screen-xl mx-auto gap-8 p-3 lg:p-8 rounded-3xl lg:bg-opacity-90"
              id="myDiv">
              {beers.map((elt) => (
                <BeerRating
                  onScoreChange={onIndividualScoreChange}
                  name={elt.name}
                  key={elt.key}
                  alcohol={elt.alcohol}
                  price={elt.price}
                  picture={elt.picture}
                />
              ))}
            </div>
          </div>
          <div
            className="max-w-screen-md h-96 mx-auto mb-12 hidden"
            id="podiumBot">
            <Podium
              first={first}
              second={second}
              third={third}
              close={false}
              onCrossClick={onCrossClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
