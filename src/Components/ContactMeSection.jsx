import React from "react";
import { MdEmail } from "react-icons/md";
import ContactDetailsCard from "../Reusable Components/ContactDetailsCard";
import { MdLocalPhone } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const ContactMeSection = () => {
  return (
    <div className="mt-44 mb-32">
      <p className="text-center">
        You can also connect with me on social media:
      </p>
      <h1 className="text-center text-4xl font-semibold mt-6" id="custom_font">
        Contact Me
      </h1>
      <p className="text-center text-lg mt-8">
        Feel free to reach out to discuss your music production needs or to
        inquire about my services.
      </p>
      <div className="mt-12 flex items-center justify-center gap-12 flex-wrap px-10">
        <ContactDetailsCard
          icon={<MdEmail className="text-5xl" />}
          heading="Email"
          socialMedia="Follow me on Instagram: @musicproducer"
          link="contact@musicproducer.com"
        />
        <ContactDetailsCard
          icon={<MdLocalPhone className="text-5xl" />}
          heading="Phone"
          socialMedia="Like my Facebook page: /musicproducer"
          link="+1 (555) 123-4567"
        />
        <ContactDetailsCard
          icon={<ImLocation className="text-5xl" />}
          heading="Office"
          socialMedia="Subscribe to my YouTube channel: /musicproducer"
          link="123 Music St, Cityville, State, 12345"
        />
      </div>
    </div>
  );
};

export default ContactMeSection;
