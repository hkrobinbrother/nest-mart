import React from "react";

const ContactFrom = () => {
  return (
    <div className="">
      <h1 className="text-xl font-bold text-green-400">Contact form</h1>
      <div className="flex gap-6">
        <div className="w-2/3">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Drop Us a Line</h1>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="input input-neutral"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="input input-neutral"
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="input input-neutral"
              />
              <input
                type="text"
                placeholder="Subject"
                className="input input-neutral"
              />
            </div>
            <input
              type="text"
              className="w-full h-[200px] mt-4 rounded-lg bo border-2 border-gray-500"
            />
          </div>
        </div>
        <div className="w-1/3">
          <img src="https://i.ibb.co.com/1tzd8y2z/460.png" alt="" />
        </div>
      </div>
      <button className="btn bg-black text-white text-start">Send Massage</button>
    </div>
  );
};

export default ContactFrom;
