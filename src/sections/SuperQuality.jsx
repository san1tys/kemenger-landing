import { about } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-worksans  text-4xl lg:max-w-lg font-bold'>
          Что такое тренинг <span className="text-coral-red underline underline-offset-[0.75rem]">Кеменгер?</span>
        </h2>
        <p className='mt-6 lg:max-w-lg info-text'>
          Тренинг «Кеменгер» — это уникальный опыт самопознания, который за 4 насыщенных дня поможет тебе раскрыть свои сильные стороны, осознать глубинные установки и обрести практические инструменты для жизни.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Ты разберёшься в своих реакциях и научишься управлять ими через трансформационные практики. Развитие эмоционального интеллекта поможет тебе лучше взаимодействовать с людьми и выстраивать доверительные отношения
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Выход из зоны комфорта освободит от страхов и ограничений, мешающих раскрыть твой потенциал. В этом пути тебя поддержат единомышленники, а честность с собой позволит увидеть свою истинную картину мира и начать действовать.
        </p>
        <div className='mt-11 info-text font-bold'>
          Готов к трансформации? Присоединяйся!
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <img
          src={about}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain rounded-xl'
        />
      </div>

    </section>
  );
};

export default SuperQuality;
