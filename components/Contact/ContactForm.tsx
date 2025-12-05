'use client';
import { Mail, User, MessageSquare, ActivityIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export function ContactForm() {
  const [success, setSuccess] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [object, setObject] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess('');
    if (!email || !name || !message || !object)
      return setSuccess('Veuillez remplir tous les champs');

    const templateParams = {
      name: name,
      email: email,
      message: message,
      object: object,
    };

    setError('');
    setIsLoading(true);

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        setEmail('');
        setName('');
        setMessage('');
        setObject('');
        setIsLoading(false);
        setSuccess('Votre message a bien ete envoye');
        console.log(response);
      },
      (error) => {
        setIsLoading(false);
        console.log(error);
        setError(
          "Une erreur est survenue, veuillez m'envoyer un email à l'adresse en bas de page s'il vous plait"
        );
      }
    );
  };

  return (
    <div className="max-w-2xl mx-auto py-6">
      <div className="text-center space-y-4">
        <h2 className="text-4xl">Contact</h2>
        <p className="text-noir/70 text-lg mb-4">
          Un projet en tête ? Discutons-en ensemble
        </p>
      </div>
      {error && setTimeout(() => setError(''), 10000) && (
        <p className="text-red-500 text-center  my-6">{error}</p>
      )}
      {success && setTimeout(() => setSuccess(''), 5000) && (
        <p className="text-green-500 text-center text-xl">{success}</p>
      )}
      {isLoading ? (
        <ActivityIcon className="w-10 h-10 mx-auto animate-spin" />
      ) : (
        <form className="space-y-6" onSubmit={sendEmail}>
          <div className="space-y-2">
            <label htmlFor="name" className="flex items-center gap-2 text-sm">
              <User className="w-4 h-4" />
              Nom / Entreprise
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-noir/20 rounded-lg focus:outline-none focus:border-noir transition-colors"
              placeholder="Votre nom ou votre entreprise"
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="object" className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" />
              Objet
            </label>
            <input
              type="text"
              id="object"
              className="w-full px-4 py-3 border border-noir/20 rounded-lg focus:outline-none focus:border-noir transition-colors"
              placeholder="Objet de la demande"
              onChange={(e) => setObject(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="flex items-center gap-2 text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-3 border border-noir/20 rounded-lg focus:outline-none focus:border-noir transition-colors resize-none"
              placeholder="Discutons de votre projet..."
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-noir text-white rounded-lg hover:bg-noir/90 transition-all cursor-pointer"
          >
            Envoyer le message
          </button>
        </form>
      )}
    </div>
  );
}
