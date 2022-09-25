import { FiSend } from 'react-icons/fi';

function ContactSection() {
  return (
    <div className="grid grid-cols-[20px_1fr_20px] border-accent border mx-3 mb-12 font-mono">
      <div
        id="contact"
        className="col-span-3 py-1 uppercase tracking-wider text-center border-b border-accent"
      >
        contact me
      </div>
      <div className="border-r border-acc"></div>
      {/* Contact form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-12">
        <label htmlFor="name">
          <span className="font-mono tracking-wider text-lg">Name</span>
          <input
            type="text"
            id="name"
            className="input-form mt-1 block w-full bg-primary shadow-sm text-accent focus:ring-accent focus:border-accent border border-accent"
            placeholder="John Doe"
          />
        </label>
        <label htmlFor="email">
          <span className="font-mono tracking-wider text-lg">Email</span>
          <input
            type="email"
            id="email"
            className="input-form mt-1 block w-full bg-primary shadow-sm text-accent focus:ring-accent focus:border-accent border border-accent"
            placeholder="john@example.com"
          />
        </label>
        <label htmlFor="message" className="md:col-span-2">
          <span className="font-mono tracking-wider text-lg">Message</span>
          <textarea
            name="message"
            id="message"
            rows="5"
            className="input-form mt-1 block w-full bg-primary shadow-sm text-accent focus:ring-accent focus:border-accent border border-accent"
            placeholder="Hello, I'm interested in your work."
          ></textarea>
        </label>
        <div className="md:col-span-2 flex items-end justify-end group">
          <button className="px-3 py-1 md:px-6 md:py-2 text-2xl text-primary bg-accent font-bold font-mono border border-accent hover:bg-primary hover:text-accent hover:border hover:border-accent hover:scale-105 transition duration-150">
            Send{' '}
            <FiSend className="inline-block text-primary group-hover:text-accent" />
          </button>
        </div>
      </div>
      <div className="border-l border-acc"></div>
    </div>
  );
}

export default ContactSection;
