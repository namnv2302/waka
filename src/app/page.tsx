import Banner from "@/components/Home/Banner";
import Newest from "@/components/Home/Newest";
import Reading from "@/components/Home/Reading";

const Home = () => {
  return (
    <div className="relative bg-background">
      <Banner />
      <Reading />
      <Newest />
    </div>
  );
};

export default Home;
