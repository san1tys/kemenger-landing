import { Nav } from "./components";
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

const App = () => {
  return (
    <main className='relative'>
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 bg-[url(./assets/images/bgg.jpg)] bg-cover bg-no-repeat opacity-80 -z-10"></div>
        <Nav />
        <Hero />
      </section>
      {/* <section className='padding'>
        <PopularProducts />
      </section> */}

      <section className="relative pt-28">
        <div className="absolute inset-0 bg-[url(./assets/images/pattern-2.png)] bg-[size:600px] bg-repeat opacity-[0.15] -z-10"></div>
        <section className="padding-special">
          <SuperQuality />
        </section>
        <div className="relative z-10">
          <section className="padding-x py-10">
            <Services />
          </section>
          <section className="padding">
            <SpecialOffer />
          </section>
          <section className="padding-x py-10 pb-28">
            <Masters />
          </section>
        </div>
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
