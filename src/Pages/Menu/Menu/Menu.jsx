import Cover from "../../Shared/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <>
      <Helmet>
        <title>Bistro Boss Restaurant | Home</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      <section className="container mx-auto">
        <SectionTitle
          subHeading="Don't Miss"
          heading="Today's Offer"
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
        <MenuCategory
          items={desserts}
          title="dessert"
          img={dessertImg}
        ></MenuCategory>
        <MenuCategory
          items={pizza}
          title={"pizza"}
          img={pizzaImg}
        ></MenuCategory>
        <MenuCategory
          items={salad}
          title={"salad"}
          img={saladImg}
        ></MenuCategory>
        <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
      </section>
    </>
  );
};

export default Menu;
