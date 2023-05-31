import { useState } from "react";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const ChefRecommend = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  const [viewMore, setViewMore] = useState(false);
  const handleViewMore = () => {
    setViewMore(!viewMore);
  };
  return (
    <section className="mb-12 mt-36 container mx-auto">
      <SectionTitle
        heading="CHEF RECOMMENDS"
        subHeading="Should Try"
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-10">
        {popular.slice(0, viewMore ? popular.length : 3).map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
      <div className="text-center mt-10">
        <button onClick={handleViewMore} className="btn-main">
          {viewMore ? "View Less" : "View Full Menu"}
        </button>
      </div>
    </section>
  );
};

export default ChefRecommend;
