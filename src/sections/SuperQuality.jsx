import { tree } from "../assets/images";
import { master1, master2, master3, about } from "../assets/images";


const SuperQuality = () => {
  return (
    <section className="w-full flex flex-col xl:ml-[360px] px-4 max-w-[80%] relative">
      {/* Заголовок */}
      <h1 className="text-4xl font-normal uppercase mt-24">
        что такое<br />
        <span className="text-[#0F6351] underline">Kemenger?</span>
      </h1>

      <img
        src={tree}
        alt="Tree"
        className="w-[450px] object-cover absolute top-16 right-4 sm:right-10 md:right-20 lg:right-32 xl:right-16"
      />



      {/* Основная часть — 2 ряда с изображениями */}
      <div className="flex flex-col gap-6 mt-24">

        {/* Первый ряд */}
        <div className="flex flex-wrap gap-4">
          {/* Левая большая картинка */}
          <img
            src={about}
            alt="About Kemenger"
            className="w-[550px] h-[416px] rounded object-cover"
          />

          {/* Правая колонка с tree и двумя картинками */}
          <div className="flex flex-col gap-4">
            {/* Tree — сверху */}

            {/* Две картинки */}
            <img
              src={master3}
              alt="Master 3"
              className="w-[350px] h-[150px] rounded object-cover"
            />
            <img
              src={master1}
              alt="Master 1"
              className="w-[350px] h-[250px] rounded object-cover"
            />
          </div>
        </div>

        {/* Второй ряд */}
        <div className="flex flex-wrap gap-4">
          <img
            src={master3}
            alt="Master 3 Again"
            className="w-[550px] h-[250px] rounded object-cover"
          />
          <img
            src={master2}
            alt="Master 2"
            className="w-[350px] h-[250px] rounded object-cover"
          />
        </div>
      </div>


    </section>
  );
};

export default SuperQuality;
