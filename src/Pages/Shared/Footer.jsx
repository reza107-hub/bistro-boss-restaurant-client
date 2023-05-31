import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
const Footer = () => {
  return (
    <footer className="text-white text-center pt-6">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex-1 bg-gray-700 p-4 lg:p-8 lg:py-24">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="flex-1 flex flex-col items-center space-y-5 bg-gray-800 p-4 lg:p-8 lg:py-24">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <p>Join us on social media</p>
          <div className="flex gap-10">
            <ImFacebook /> <ImInstagram /> <ImTwitter />
          </div>
        </div>
      </div>
      <div className="bg-black py-4">
        <p className="text-gray-300">
          Copyright © CulinaryCloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
