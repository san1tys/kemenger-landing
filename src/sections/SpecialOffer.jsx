import { arrowRight } from "../assets/icons";
import { Button } from "../components";
import { headerLogo, master1, master2, master3 } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className='relative flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container xl:ml-[300px] max-w-[80%]'>

      {/* Картинка в правом верхнем углу */}
      <img
        src={headerLogo}
        alt="logo"
        className="w-24 h-24 absolute top-[-30px] right-[-30px] rotate-[12deg] z-10"
      />

      <div className='flex items-center justify-center flex-col'>
        <div className="flex gap-4">
          <img
            className="rounded-xl h-[200px] flex-1 w-[200px] object-cover"
            src={master1}
            alt=""
          />
          <img
            className="rounded-xl h-[200px] flex-1 w-[200px] object-cover"
            src={master2}
            alt=""
          />
        </div>
        <img className="mt-4 rounded-xl w-[420px] h-[206px] object-cover" src={master3} alt="" />
      </div>

      <div className='flex flex-[0.9] flex-col'>
        <h2 className='text-[42px] leading-10 font-worksans font-semibold'>
          Сделай первый шаг к  <span className='text-coral-red underline'>переменам</span> на мастер-классе!
        </h2>
        <p className='mt-4 info-text'>
          Бесплатные мастер-классы: узнай <span className="italic font-bold">методы тренинга</span>, задавай  <span className="italic font-bold">вопросы тренерам</span> и открой для себя, как <span className="italic font-bold">Кеменгер</span> поможет именно тебе.
        </p>
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
      </div>
    </section>
  );
};

export default SpecialOffer;
