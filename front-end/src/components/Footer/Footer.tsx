import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto grid h-fit min-h-96 max-w-[1440px] gap-9 px-8 pb-9 pt-[75px] md:grid-cols-2 md:pb-12 lg:px-10 xl:px-40">
        <div className="col-span-2 mx-auto sm:mx-0 md:col-span-1">
          <Logo />
        </div>
        <Navigation className="sm-gap-1 col-span-2 gap-4 sm:flex-row sm:gap-1 md:col-span-1" />

        <p className="col-span-2 text-center opacity-50 sm:text-start md:col-span-1 md:col-start-1 md:col-end-2">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>

        <p className="col-span-2 text-center opacity-50 sm:col-span-1 sm:text-start">
          Copyright © 2024. All Rights Reserved
        </p>

        <div className="col-span-2 col-start-1 row-start-5 flex justify-center gap-4 sm:col-span-1 sm:col-start-2 sm:row-span-1 sm:row-start-4 sm:justify-end md:row-start-2 md:items-end">
          <a href="#">
            <FaFacebook className="text-xl hover:text-primary" />
          </a>
          <a href="#">
            <FaXTwitter className="text-xl hover:text-primary" />
          </a>
          <a href="#">
            <FaInstagram className="text-xl hover:text-primary" />
          </a>
        </div>
      </div>
    </footer>
  );
}
