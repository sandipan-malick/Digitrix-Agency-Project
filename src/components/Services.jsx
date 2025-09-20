import React from "react";
import digital from "../assets/digital.jpg"
import growth from "../assets/digital.jpg";
import content from "../assets/digital.jpg";

const services = [
  { title: "Digital Marketing", img: digital },
  { title: "Business Growth", img: growth },
  { title: "Content Marketing", img: content },
];

export default function Services() {
  return (
    <section className="px-8 py-20 text-center bg-gray-50">
      <h2 className="mb-6 text-3xl font-bold">Services we offer for you</h2>
      <p className="mb-10 text-gray-600">
        With lots of unique blocks, you can easily build a page without coding.
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((s, i) => (
          <div key={i} className="p-5 bg-white rounded-lg shadow">
            <img src={s.img} alt={s.title} className="object-cover w-full h-40 mb-4 rounded" />
            <h3 className="font-semibold">{s.title}</h3>
            <p className="my-3 text-gray-500">
              With lots of unique blocks, you can easily build a page without coding.
            </p>
            <a href="#" className="text-blue-600">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
