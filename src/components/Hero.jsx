import React from "react";
import heroImg from "../assets/digital.jpg";

export default function Hero() {
  return (
    <section className="grid items-center gap-10 px-8 py-20 md:grid-cols-2 bg-gray-50">
      {/* Left */}
      <div>
        <h1 className="mb-4 text-4xl font-bold">
          Make your business powerful with Shade.
        </h1>
        <p className="mb-6 text-gray-600">
          With lots of unique blocks, you can easily build a page without coding.
          Build your next consultancy website within few minutes.
        </p>
        <button className="px-6 py-3 text-white bg-blue-600 rounded-lg">
          Get A Free Quote
        </button>
        <p className="mt-4 text-sm text-gray-500">◉ WATCH HOW WE CAN HELP</p>
      </div>

      {/* Right */}
      <div className="flex justify-center">
        <img src={heroImg} alt="Hero" className="rounded-lg w-80" />
      </div>
    </section>
  );
}
