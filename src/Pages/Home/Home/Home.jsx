import Category from "../Order/Category";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import PopularMenu from "../PopularMenu/PopularMenu";
import ContactUs from "../ContactUs/ContactUs";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <AboutUs />
      <PopularMenu />
      <ContactUs />
      <ChefRecommend />
      <Featured />
      <Testimonials />
    </>
  );
};

export default Home;
