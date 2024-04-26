import Banner from "@/components/Home/Banner";
import BuyBook from "@/components/Home/BuyBook";
import ForYou from "@/components/Home/ForYou";
import Newest from "@/components/Home/Newest";
import Podcast from "@/components/Home/Podcast";
import Ranking from "@/components/Home/Ranking";
import Reading from "@/components/Home/Reading";
import ComboBook from "@/components/Home/ComboBook";
import Author from "@/components/Home/Author";
import SelectedCollection from "@/components/Home/SelectedCollection";
import LatestNews from "@/components/Home/LatestNews";

const Home = () => {
  return (
    <div className="relative ">
      <Banner />
      <div className="bg-background relative">
        <div className="absolute left-0 right-0 bottom-[100%] bg-background h-[33px] lg:h-[61px]"></div>
        <Reading />
        <Newest />
        <ForYou />
        <Ranking />
        <Podcast />
        <BuyBook />
        <ComboBook />
        <Author />
        <SelectedCollection />
        <LatestNews />
      </div>
    </div>
  );
};

export default Home;
