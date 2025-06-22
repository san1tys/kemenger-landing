import { masters } from "../constants";
import { MasterCard } from "../components";
import { adam, petal2 } from "../assets/images";

const Masters = () => {
  return (
    <section id="masters" className="w-full xl:ml-[300px] max-w-[80%] max-md:mx-auto relative pt-6">
      <h1 className="font-worksans text-[36px] font-semibold">
        Наша <span className="text-coral-red underline">команда</span>
      </h1>

      <img src={adam} alt="adam" className="w-[500px] absolute -z-10 top-0 right-[29%] max-sm:hidden" />
      <img src={petal2} alt="petal2" className="w-[530px] absolute -z-10 top-[65%] right-0 max-sm:hidden" />
      <div className="w-full flex lg:justify-between justify-center gap-6 mt-24 max-md:mt-12 flex-wrap lg:flex-nowrap">
        {masters.map((service) => (
          <MasterCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Masters;
