import { masters } from "../constants";
import { MasterCard } from "../components";

const Masters = () => {
  return (
    <section id="masters" className="max-container">
      <h1 className="font-worksans text-center text-4xl font-bold">
        Наша <span className="text-coral-red underline underline-offset-[0.5rem]">команда</span>
      </h1>
      <div className="flex lg:justify-between justify-center gap-6 mt-24 flex-wrap lg:flex-nowrap">
        {masters.map((service) => (
          <MasterCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Masters;
