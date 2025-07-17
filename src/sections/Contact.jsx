import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send( 
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'M.Salman Nazeer',
          sender_email: form.email,
          to_email: 'nazeersalman716@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="relative my-12 md:my-16 lg:my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      {/* Background Container */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Content Container */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="w-full max-w-4xl bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 sm:p-8 md:p-10 lg:p-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Let's talk
          </h3>

          <p className="text-base sm:text-lg text-gray-300 mt-3 text-center">
            Whether you're looking to build a new website, improve your existing platform, or bring a unique project to
            life, I'm here to help.
          </p>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 sm:mt-10 md:mt-12 flex flex-col space-y-4 sm:space-y-5 md:space-y-6">
            {/* Name Field */}
            <label className="space-y-2 sm:space-y-3">
              <span className="block text-sm sm:text-base font-medium text-gray-300">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 sm:px-5 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </label>

            {/* Email Field */}
            <label className="space-y-2 sm:space-y-3">
              <span className="block text-sm sm:text-base font-medium text-gray-300">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 sm:px-5 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="johndoe@gmail.com"
              />
            </label>

            {/* Message Field */}
            <label className="space-y-2 sm:space-y-3">
              <span className="block text-sm sm:text-base font-medium text-gray-300">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2 sm:px-5 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 sm:mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-medium rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all flex items-center justify-center space-x-2">
              <span>{loading ? 'Sending...' : 'Send Message'}</span>
              <img src="/assets/arrow-up.png" alt="arrow-up" className="w-4 h-4 filter brightness-0 invert" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;



// CONTACT SECTION DONE