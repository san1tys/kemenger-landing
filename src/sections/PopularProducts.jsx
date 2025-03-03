import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl text-center font-worksans font-bold'>
          Что <span className="text-coral-red underline">мешает</span> жить жизнью мечты?
        </h2>
      </div>

    </section>
  );
};

export default PopularProducts;
