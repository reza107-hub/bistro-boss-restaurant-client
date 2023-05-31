import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";
import MenuItem from "../../Shared/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <button className="btn-main mt-4">ORDER YOUR FAVOURITE FOOD</button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
