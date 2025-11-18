import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const ContactText = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4   mt-4">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold space-y-4">
          Let us know how <br />
          we can help you
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="space-y-4">
          <h1 className="text-xl text-green-400 font-bold">Office</h1>
          <div>
            <p>205 North Michigan Avenue, Suite 810</p>
            <p>Chicago, 60601, USA</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@Evara.com</p>
          </div>
          <button className="flex gap-2 btn bg-green-400 text-white">
            <FaLocationDot />
            View Map
          </button>
        </div>
      </div>
      <div className="space-y-7 mt-14">
        <div className="space-y-4">
          <h1 className="text-xl font-bold">01. Visit Feedback</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-bold text-green-400">02. Visit Feedback</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl text-green-400 font-bold">Studio</h1>
          <div>
            <p>205 North Michigan Avenue, Suite 810</p>
            <p>Chicago, 60601, USA</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@Evara.com</p>
          </div>
          <button className="flex gap-2 btn bg-green-400 text-white">
            <FaLocationDot />
            View Map
          </button>
        </div>

      </div>
       <div className="space-y-7 mt-14">
        <div className="space-y-4">
          <h1 className="text-xl font-bold">02. Employer Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-bold text-green-400">04.General Inquiries</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl text-green-400 font-bold">Shop</h1>
          <div>
            <p>205 North Michigan Avenue, Suite 810</p>
            <p>Chicago, 60601, USA</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@Evara.com</p>
          </div>
          <button className="flex gap-2 btn bg-green-400 text-white">
            <FaLocationDot />
            View Map
          </button>
        </div>

      </div>
    </div>
  );
};

export default ContactText;
