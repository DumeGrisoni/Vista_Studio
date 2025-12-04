import { Instagram, Mail, Phone } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="px-6 py-6 border-t border-noir/10 relative z-10 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-noir/60">
            <p>© 2025 Vista Studio - Tous droits réservés</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 text-noir/70">
            <a
              href="mailto:vista.studio2b@gmail.com"
              className="flex items-center gap-2 hover:text-noir transition-colors"
            >
              <Mail className="w-4 h-4" />
              vista.studio2b@gmail.com
            </a>
            <a
              href="https://instagram.com/vistastudio2b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-noir transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @vistastudio2b
            </a>
            <a
              href="tel:0650838238"
              className="flex items-center gap-2 hover:text-noir transition-colors"
            >
              <Phone className="w-4 h-4" />
              06 50 83 82 38
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
