import { ServiceCard } from "../components";
import { advantages } from "../constants";
import { Button } from "../components";
import { arrowRight } from "../assets/icons";

const Services = () => {
  return (
    <section id="advantages" className="w-full flex flex-col xl:ml-[300px] max-w-[80%] relative max-md:mx-auto max-md:items-center">
      <h1 className="font-semibold mt-24 text-3xl max-sm:text-3xl" >Тренинг <span className="underline">KEMENGER</span> - это уникальный опыт самопознания, <br></br> который за 4 насыщенных дня поможет тебе:</h1>

      <div className='flex justify-center flex-wrap gap-9 mt-12'>
        {advantages.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
      <div className='mt-11 flex flex-wrap gap-4'>
        <Button label='Записаться' iconURL={arrowRight} scrollToId="signup" />
        <Button
          label='Узнать больше'
          backgroundColor='bg-white'
          borderColor='border-slate-gray'
          textColor='text-slate-gray'
          scrollToId="reviews"
        />
      </div>
    </section>
  );
};

export default Services;
