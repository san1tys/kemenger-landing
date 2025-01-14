import { about } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >

      <div className='flex flex-1 justify-center items-center'>
        <img
          src={about}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain rounded-xl'
        />
      </div>
      <div className='flex flex-[0.8] flex-col'>
        <h2 className='font-palanquin  text-4xl lg:max-w-lg font-bold'>
          Что такое тренинг <span className="text-coral-red underline underline-offset-[0.75rem]">Кеменгер?</span>
        </h2>
        <p className='mt-6 lg:max-w-lg info-text'>
          Тренинг <span className="font-bold">«Кеменгер»</span> — это <span className="font-bold">4 дня практики</span> и <span className="font-bold">трансформации</span>, где ты <span className="font-bold">переосмыслишь установки</span>, <span className="font-bold">обретёшь уверенность</span> и <span className="font-bold">начнёшь менять свою жизнь</span>.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Только  <span className="font-bold">практика</span>,  <span className="font-bold">поддержка единомышленников</span> и  <span className="font-bold">полная перезагрузка мышления</span>. Здесь ты  <span className="font-bold">работаешь с собой</span>, а не просто слушаешь.
        </p>

        <div className='mt-11'>
          <Button label='Узнать больше' scrollToId="reviews" />
        </div>
      </div>

    </section>
  );
};

export default SuperQuality;
