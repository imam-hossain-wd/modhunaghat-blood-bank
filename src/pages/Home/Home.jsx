
import FeaturedCauses from "@/components/main/Home/FeaturedCauses/FeaturedCauses";
import FindBlood from "@/components/main/Home/FindBlood/FindBlood";
import GetInvolved from "@/components/main/Home/get-involve/Getinvolve";
import HomeBanner from "@/components/main/Home/Homebanner/HomeBanner";

const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <FindBlood />
      <FeaturedCauses />
      <GetInvolved />
    </div>
  );
};

export default HomePage;
