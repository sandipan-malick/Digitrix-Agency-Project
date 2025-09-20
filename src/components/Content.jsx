import React from "react";
import adviceImg from "../assets/digital.jpg";

export default function Content() {
  return (
    <section className="grid gap-10 px-8 py-20 md:grid-cols-2">
      {/* Left */}
      <div>
        <h2 className="mb-4 text-3xl font-bold">
          Experienced experts are giving advices.
        </h2>
        <p className="mb-6 text-gray-600">
          With lots of unique blocks, you can easily build a page without coding.
          Build your next landing page.
        </p>
        <button className="px-6 py-3 text-white bg-blue-600 rounded-lg">
          Learn how we work
        </button>
      </div>

      {/* Right */}
      <div>
        <img src={adviceImg} alt="Experts" className="mb-6 rounded-lg" />
        <ul className="space-y-2 text-gray-700">
          <li><strong>1M+</strong> Customers visit Albino every month</li>
          <li><strong>92%</strong> Satisfaction rate from our awesome customers</li>
          <li><strong>4.9/5.0</strong> Average customer ratings</li>
        </ul>
      </div>
    </section>
  );
}
