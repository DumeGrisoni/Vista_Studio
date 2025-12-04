import { Mail, User, MessageSquare } from 'lucide-react';

export function ContactForm() {
  return (
    <div className="max-w-2xl mx-auto ">
      <div className="text-center space-y-4">
        <h2 className="text-4xl">Contact</h2>
        <p className="text-noir/70 text-lg">
          Un projet en tête ? Discutons-en ensemble
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="flex items-center gap-2 text-sm">
            <User className="w-4 h-4" />
            Nom
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-noir/20 rounded-lg focus:outline-none focus:border-noir transition-colors"
            placeholder="Votre nom"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4" />
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-noir/20 rounded-lg focus:outline-none focus:border-noir transition-colors"
            placeholder="votre@email.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="flex items-center gap-2 text-sm">
            <MessageSquare className="w-4 h-4" />
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            className="w-full px-4 py-3 border border-noir/20 rounded-lg focus:outline-none focus:border-noir transition-colors resize-none"
            placeholder="Parlez-nous de votre projet..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-noir text-white rounded-lg hover:bg-noir/90 transition-all"
        >
          Envoyer le message
        </button>
      </form>
    </div>
  );
}
