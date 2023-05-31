import { useState } from "react";
import { useParams } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import OrderTab from "../OrderTab/OrderTab";
import "react-tabs/style/react-tabs.css";

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = category
    ? categories.indexOf(category)
    : categories.indexOf("pizza"); // Set default index to "pizza" if category is not provided
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={orderCoverImg} title="Order Food"></Cover>
      <div className="container mx-auto mt-24">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="text-center mb-5">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
