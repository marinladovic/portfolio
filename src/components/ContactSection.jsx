import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { send } from 'emailjs-com';
import { FiSend } from 'react-icons/fi';

function ContactSection() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Marin',
    from_email: '',
    message: '',
  });

  const { from_name, from_email, message } = toSend;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    send('service_z8h55be', 'template_wuyva08', toSend, 'EKLn8CtRGYPKRZcXM')
      .then((response) => {
        toast.success('Message sent successfully!');
        console.log(
          'Message sent successfully!',
          response.status,
          response.text
        );
      })
      .catch((err) => {
        toast.error('Something went wrong', err);
        console.log('FAILED...', err);
      });

    clearInput();
  };

  const clearInput = () => {
    setToSend({
      from_name: '',
      from_email: '',
      message: '',
    });
  };

  const onMutate = (e) => {
    setToSend((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <main className="grid grid-cols-[20px_1fr_20px] border-accent border mx-3 mb-12 font-mono">
      <div
        id="contact"
        className="col-span-3 py-1 uppercase tracking-wider text-center border-b border-accent"
      >
        Feel free to get in touch
      </div>
      <div className="border-r border-acc"></div>
      {/* Contact form */}
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col p-4 md:p-8 gap-8 font-mono tracking-wider"
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Input for name */}
          <div className="flex flex-col flex-1">
            <label className="text-xl mb-2">Name</label>
            <input
              type="text"
              id="from_name"
              className="border border-accent p-2 bg-primary focus:ring-accent focus:border-accent placeholder:text-place"
              value={from_name}
              onChange={onMutate}
              placeholder="Your name"
              required
            />
          </div>
          {/* Input for email */}
          <div className="flex flex-col flex-1">
            <label className="text-xl mb-2">Email</label>
            <input
              type="email"
              id="from_email"
              className="border border-accent p-2 bg-primary focus:ring-accent focus:border-accent placeholder:text-place"
              value={from_email}
              onChange={onMutate}
              placeholder="john@example.com"
              required
            />
          </div>
        </div>
        {/* Input for message */}
        <div className="flex flex-col">
          <label className="text-xl mb-2">Message</label>
          <textarea
            id="message"
            rows={5}
            className="border border-accent p-2 bg-primary focus:ring-accent focus:border-accent placeholder:text-place"
            value={message}
            onChange={onMutate}
            placeholder="Hello, I'm interested in your work."
            required
          />
        </div>
        {/* Submit Button */}
        <div className="col-span-2 flex justify-end">
          <button
            type="submit"
            className="flex gap-2 text-primary bg-accent text-2xl font-bold items-center px-6 py-2 border border-accent hover:scale-105 hover:bg-primary hover:text-accent  transform transition duration-300"
          >
            Send
            <FiSend />
          </button>
        </div>
      </form>
      <div className="border-l border-accent"></div>
    </main>
  );
}

export default ContactSection;
