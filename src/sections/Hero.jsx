import { Button } from "../components";
import { arrowRight } from "../assets/icons";
import { intro } from "../assets/images";

const Hero = () => {
  return (
    <section className="relative w-full flex items-center justify-center min-h-screen xl:border-[5px] xl:border-[#0F6351]">
      <img
        src={intro}
        alt="New Illustration"
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
      />

      <div className="xl:ml-[580px] relative flex flex-col xl:items-center text-center xl:text-end xl:max-w-[700px] lg:max-w-[600px] md:max-w-[500px] sm:max-w-[450px] xl:mt-24 px-6 mt-36">
        <h1 className="font-worksans text-[50px] text-white leading-[65px] max-sm:leading-[60px] max-sm:text-[42px] font-bold uppercase">
          Kemenger — это
          <span className="text-[#00B08A] underline underline-offset-[0.75rem]"> жизнь</span>, которую ты
          проживёшь за <span className="text-[#00B08A] underline underline-offset-[0.75rem]">4 дня!</span>
        </h1>
        <p className="font-inter text-white font-extralight text-xl leading-[28px] mt-6 mb-6 max-sm:mt-4 max-sm:text-base max-sm:leading-[26px]">
          Полная перезагрузка мышления, трансформация личности и выход за пределы привычного. Обрети новый взгляд на себя и мир. Мы помогаем людям достигать своих целей и становиться лучше
        </p>
        <div className="xl:self-end max-sm:self-center">
          <Button label="Записаться" iconURL={arrowRight} scrollToId="signup" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
