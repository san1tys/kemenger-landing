import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start max-xl:mr-0'>
          <div className="flex items-center">
            <img
              src={footerLogo}
              alt='logo'
              width={36}
              height={36}
              className='m-0'
            />
            <h2 className="font-inter text-2xl leading-normal font-medium text-white ml-4 mt-2">Kemenger</h2>
          </div>
          <p className='mt-6 text-base leading-7 font-inter text-white-400 sm:max-w-sm'>
            Мы помогаем людям достигать своих целей и становиться лучше.
            © 2025, Кеменгер. Все права защищены.
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <a href={icon.link}
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>

        <div className='flex justify-between lg:gap-10 gap-20 flex-wrap max-xl:ml-0'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-inter text-2xl leading-normal font-medium mb-6 text-white mt-2'>
                {section.title}
              </h4>
              <ul className="">
                {section.links.map((link) => (
                  <li
                    className='flex items-center gap-4 mt-3 font-inter text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <img src={link.src} width={24} height={24} alt="logo" />
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-sm:hidden">
          <img src={footerLogo} alt="footerLogo" className="w-48 h-48" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
