import chefServiceImg from "../../../assets/home/chef-service.jpg";
const AboutUs = () => {
  return (
    <section className="mt-36 container mx-auto">
      <div
        className="hero min-h-[572px]"
        style={{
          backgroundImage: `url("${chefServiceImg}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="bg-[#FFFFFF] text-black">
              <h1 className="mb-5 pt-5 mt-2 text-5xl font">Bistro Boss</h1>
              <p className="mb-5 pb-5 font-thin px-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, libero accusamus laborum deserunt ratione dolor
                officiis praesentium! Deserunt magni aperiam dolor eius dolore
                at, nihil iusto ducimus incidunt quibusdam nemo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
