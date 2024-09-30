import BloodDonor from "@/components/main/Home/Donor/Donor";
import FeaturedCauses from "@/components/main/Home/FeaturedCauses/FeaturedCauses";
import FindBlood from "@/components/main/Home/FindBlood/FindBlood";
import GetInvolved from "@/components/main/Home/get-involve/Getinvolve";
// Ensure this matches the actual file name
import HomeBanner from "@/components/main/Home/Homebanner/HomeBanner";


const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <FindBlood />
      <BloodDonor />
      <FeaturedCauses />
      <GetInvolved />
    </div>
  );
};

export default HomePage;
