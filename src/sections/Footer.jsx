import React from 'react';
import { socialImgs } from '../constants';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a
            href="/"
            className=" hover:text-white transition-color duration-300"
          >
            Voir les Mentions légales
          </a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a
              className="icon"
              target="_blank"
              href={img.imgUrl}
              key={img.imgUrl + img.name}
            >
              <img src={img.imgPath} alt={img.name} />
            </a>
          ))}
          <a
            href="tel:0650838238"
            className="text-center text-white md:text-end hover:text-white-50"
          >
            ☎ 06-50-83-82-38
          </a>
        </div>

        <div className="flex justify-center pointer-events-none items-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Vista Studio | Tous Droits Réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
