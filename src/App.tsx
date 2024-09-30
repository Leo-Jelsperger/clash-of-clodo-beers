import BeerRating from "./components/BeerRating";
import Hero from "./components/Hero";
import "./App.css";
import { useEffect, useState } from "react";
import BeerList from "./components/BeerList";
import Podium from "./components/Podium";

const viewH = screen.height * 0.8;
const beers = BeerList();

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [scoreEntity, setScoreEntity] = useState<Record<string, number>>({});
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);

  useEffect(() => {
    if (scoreEntity) {
      const ranking = Object.entries(scoreEntity).sort((a, b) => b[1] - a[1]);
      const firstBeer = beers.find(
        (elt) => elt.key ?? elt.key === ranking[0][0]
      );
      const secondBeer = beers.find(
        (elt) => elt.key ?? elt.key === ranking[1][0]
      );
      const thirdBeer = beers.find(
        (elt) => elt.key ?? elt.key === ranking[2][0]
      );
      setFirst(firstBeer);
      setSecond(secondBeer);
      setThird(thirdBeer);
    }
  }, [scoreEntity, beers]);

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

  const onIndividualScoreChange = (score: number, name: string) => {
    setScoreEntity((s) => ({
      ...s,
      [name]: score,
    }));
  };

  return (
    <div className="flex flex-col">
      <Hero hidden={scrolled} />
      <div className="z-50">
        <div className="mt-12">
          <div className="flex flex-col max-w-screen-xl mx-auto gap-8 p-3 lg:p-8 rounded-3xl lg:bg-opacity-90">
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
        <Podium
        />
      </div>
    </div>
  );
}
