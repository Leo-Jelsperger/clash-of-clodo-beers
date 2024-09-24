import BeerRating from "./components/BeerRating";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="z-50">
        {/* <div className="itsMe mt-[100vh] w-full h-16 bg-gradient-to-b from-transparent to-white"></div> */}
        <div className="mt-12">
          <div className="flex flex-col max-w-screen-xl mx-auto gap-8 p-8 bg-gray-400 rounded-3xl">
            <div id="myDiv">
              <BeerRating
                name="8.6"
                alcohol={8.6}
                price={1.38}
                picture="https://fr.86beer.com/content/experience-fragments/eightsixbeer/fr/fr/footer/master/_jcr_content/root/responsivegrid/container/contentbox/content/image.aimg.320.82.png/1696239561946.png"
              />
            </div>
            <BeerRating
              name="Rince Cochon"
              alcohol={8.5}
              price={1.9}
              picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpLnimpxXtNdZBJaX7uy7fYPVgHVetNhL5w&s"
            />
            <BeerRating
              name="La Bête"
              alcohol={8}
              price={2.15}
              picture="https://www.beertime.fr/media/acfbom4q/labete.png?format=webp"
            />
            <BeerRating
              name="La Bière du Démon"
              alcohol={12}
              price={1.87}
              picture="https://interbrau.it/wp-content/uploads/2020/01/DUDEMON.png"
            />
            <BeerRating
              name="CH'TI Triple"
              alcohol={8.5}
              price={1.85}
              picture="https://pbs.twimg.com/profile_images/616276950034817024/atzotQwv_400x400.jpg"
            />
            <BeerRating
              name="3 Monts"
              alcohol={8.5}
              price={1.95}
              picture="https://www.3monts.fr/wp-content/uploads/2018/11/logo-3monts-2.png"
            />
            <BeerRating
              name="Extra Strong"
              alcohol={8.6}
              price={1.29}
              picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlI1Vit6kiM_umpVVvDQm52tCL4CrLX_eKEg&s"
            />
            <BeerRating
              name="Amsterdam Navigator"
              alcohol={8}
              price={1.35}
              picture="https://www.biere-amsterdam.com/wp-content/uploads/2024/03/NAVIGATOR_270x710.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
