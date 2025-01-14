import { statistics } from "../constants";
import { Button } from "../components";
import { arrowRight } from "../assets/icons";
import { intro } from "../assets/images";

const Hero = () => {


  return (
    <section
      id='home'
      className='w-full xl:flex  justify-between min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-3/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <h1 className='mt-10 font-palanquin text-[72px] max-sm:leading-[62px] max-sm:text-[52px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            Кеменгер — <span className='text-coral-red inline-block mt-3 underline underline-offset-[0.75rem]'>4 дня</span>,
          </span>
          <br />
          которые изменят твою жизнь!
        </h1>
        <p className='font-montserrat text-slate-gray text-xl leading-8 mt-6 mb-14 sm:max-w-sm'>
          Глубокая трансформация, развитие личности и новый взгляд на мир
        </p>

        <Button label='Записаться
        ' iconURL={arrowRight} scrollToId="signup" />


      </div>
      <div className="flex flex-col mt-[200px]  max-xl:padding-x max-xl:mt-[100px]">
        <img src={intro} width={570}
          height={522} className='rounded-xl object-contain' alt="intro" />
        <div className='flex w-full mt-10 gap-12 max-sm:flex-col'>
          {statistics.map((stat, index) => (
            <div className="w-full" key={index}>
              <p className='text-[42px] font-palanquin font-bold'>{stat.value}</p>
              <p className='mt-2 leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
