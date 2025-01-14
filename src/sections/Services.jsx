import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section id="advantages" className="max-container">
      <h1 className="font-palanquin text-center text-4xl font-bold">Почему именно <span className="text-coral-red underline underline-offset-[0.75rem]">Кеменгер?</span></h1>
      <div className='flex justify-center flex-wrap gap-9 mt-24'>
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
