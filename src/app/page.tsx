import Banner from "@/components/Home/Banner";
import BuyBook from "@/components/Home/BuyBook";
import ForYou from "@/components/Home/ForYou";
import Newest from "@/components/Home/Newest";
import Podcast from "@/components/Home/Podcast";
import Ranking from "@/components/Home/Ranking";
import Reading from "@/components/Home/Reading";
import ComboBook from "@/components/Home/ComboBook";

const Home = () => {
  return (
    <div className="relative bg-background">
      <Banner />
      <Reading />
      <Newest />
      <ForYou />
      <Ranking />
      <Podcast />
      <BuyBook />
      <ComboBook />
    </div>
  );
};

export default Home;
