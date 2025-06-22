import { Nav, ServiceCard, Button } from "./components";
import { services } from "./constants";
import { arrowRight } from "./assets/icons";
import { petal, mountains } from "./assets/images";
import {
  CustomerReviews,
  Footer,
  Hero,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  Masters,
} from "./sections";

import LeftSidebarImage from "./components/LeftSidebarImage";

const App = () => {
  return (
    <main className="relative">
      {/* Intro Section with its own background */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 bg-[url(./assets/images/intro2.jpg)] bg-cover bg-no-repeat -z-10 right"></div>
        <Nav />
        <Hero />
      </section>

      {/* Main Sections with repeating sidebar */}
      <section className="relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url(./assets/images/pattern-2.png)] bg-[size:600px] bg-repeat opacity-[0.15] -z-10"></div>

        {/* Section 1 */}
        <section className="relative">
          <LeftSidebarImage />
          <SuperQuality />
        </section>

        {/* Section 2 */}
        <section className="relative padding-x py-10">
          <LeftSidebarImage />
          <Services />
        </section>


        <section className="relative padding-x py-10">
          <LeftSidebarImage />
          <section id="advantages" className="w-full flex flex-col xl:ml-[300px] max-w-[80%] max-md:mx-auto relative">
            <h1 className="font-worksans mt-24 text-[36px] font-semibold">Почему именно <span className="text-coral-red underline">KEMENGER?</span></h1>
            <img src={mountains} alt="mountains" className="absolute -z-10 w-[400px] object-cover right-44 top-20 max-sm:hidden" />
            <img src={petal} alt="mountains" className="absolute z-10 w-[300px] object-cover right-0 top-0 max-sm:hidden" />
            <div className='flex justify-center flex-wrap gap-9 mt-24 max-sm:mt-12'>
              {services.map((service) => (
                <ServiceCard key={service.label} {...service} />
              ))}
            </div>

            <div className="mt-12">
              <Button label='Записаться' iconURL={arrowRight} scrollToId="signup" />
            </div>

          </section>
        </section>


        {/* Section 3 */}
        <section className="relative padding">
          <LeftSidebarImage />
          <SpecialOffer />
        </section>

        {/* Section 4 */}
        <section className="relative padding-x py-10 pb-28">
          <LeftSidebarImage />
          <Masters />
        </section>

        {/* Reviews — без сайдбара */}
        <section className="relative">
          <LeftSidebarImage />
          <CustomerReviews />
        </section>

        {/* Subscribe — без сайдбара */}
        <section className="padding-x sm:py-32 py-16 w-full relative overflow-hidden">
          <LeftSidebarImage />
          <Subscribe />
        </section>
      </section>

      {/* Footer — без сайдбара */}
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
