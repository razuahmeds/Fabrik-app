import Arimation from "../components/Arimation";
import Banner from "../components/Banner";
import CardsImg from "../components/CardsImg";
import Expectations from "../components/Expectations ";
import Footer from "../components/Footer";
import InputForem from "../components/InputForem";
import Portfolio from "../components/Portfolio";

function Home() {
  return (
    <div>
      <Banner />

      <Arimation />
      <Portfolio />
      <CardsImg />
      <Expectations />
      <InputForem />
      <Footer />
    </div>
  );
}

export default Home;
