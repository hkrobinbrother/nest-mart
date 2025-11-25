import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black/30 p-8">
        <div className="flex items-center justify-center gap-6">
          <h1>@nest-company Private Ltd. 2025</h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="px-10 py-2 rounded-xl border-2"
            />
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
