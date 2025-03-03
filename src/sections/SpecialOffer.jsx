import { arrowRight } from "../assets/icons";
import { Button } from "../components";
import { master1, master2, master3 } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex flex-[0.8] items-center justify-center flex-col'>
        <div className="flex gap-4">
          <img
            className="rounded-xl h-[250px] flex-1 w-[250px] object-cover"
            src={master1}
            alt=""
          />
          <img
            className="rounded-xl h-[250px] flex-1 w-[250px] object-cover"
            src={master2}
            alt=""
          />
        </div>
        <img className="mt-4 rounded-xl w-[516px] h-[256px] object-cover" src={master3} alt="" />
      </div>

      <div className='flex flex-[0.8] flex-col'>
        <h2 className='text-4xl font-worksans font-bold'>
          Сделай первый шаг к  <span className='text-coral-red underline underline-offset-[0.75rem]'>переменам</span> на мастер-классе!
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
