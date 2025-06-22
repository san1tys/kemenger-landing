import { tree } from "../assets/images";
import { master1, master2, master3, about } from "../assets/images";

const SuperQuality = () => {
  return (
    <section className="w-full flex flex-col max-w-[80%] xl:ml-[360px] max-md:mx-auto relative">

      {/* Заголовок */}
      <h1 className="text-4xl font-normal uppercase mt-24 max-md:text-[36px] max-sm:font-semibold">
        что такое<br />
        <span className="text-[#0F6351] underline">Kemenger?</span>
      </h1>

      {/* Tree Image */}
      <img
        src={tree}
        alt="Tree"
        className="w-[450px] object-cover absolute top-16 right-[80px] max-md:w-[200px] max-md:top-[200px] max-md:right-[-90px]"
      />


      {/* Контейнер с картинками */}
      <div className="flex flex-col gap-6 mt-24">

        {/* Первый ряд */}
        <div className="flex gap-4 max-md:justify-center">
          {/* Левая большая картинка */}
          <img
            src={about}
            alt="About Kemenger"
            className="w-[550px] h-[416px] rounded object-cover 
                       max-md:w-[220px] max-md:h-[175px]"
          />

          {/* Правая колонка с двумя картинками */}
          <div className="flex flex-col gap-4">
            <img
              src={master3}
              alt="Master 3"
              className="w-[350px] h-[150px] rounded object-cover 
                         max-md:w-[200px] max-md:h-[80px]"
            />
            <img
              src={master1}
              alt="Master 1"
              className="w-[350px] h-[250px] rounded object-cover 
                         max-md:w-[200px] max-md:h-[80px]"
            />
          </div>
        </div>

        {/* Второй ряд */}
        <div className="flex gap-4 max-md:justify-center">
          <img
            src={master3}
            alt="Master 3 Again"
            className="w-[550px] h-[250px] rounded object-cover 
                       max-md:w-[220px] max-md:h-[80px]"
          />
          <img
            src={master2}
            alt="Master 2"
            className="w-[350px] h-[250px] rounded object-cover 
                       max-md:w-[200px] max-md:h-[80px]"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
