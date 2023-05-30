const Footer = () => {
  return (
    <footer className="text-white text-center pt-6">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex-1 bg-gray-700 p-4 lg:p-8 lg:py-24">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p>Address</p>
          <p>Number</p>
          <p>Date</p>
        </div>
        <div className="flex-1 bg-gray-800 p-4 lg:p-8 lg:py-24">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <p>Join us on social media</p>
          <p>Facebook icon Insta icon Twitter icon</p>
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
