
import React from 'react';

const Team = () => {
  return (
    <footer className="bg-[#1a202c] text-gray-300 py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="mb-4 text-xl font-bold text-white">Digitrix.agency</h2>
            <p className="mb-6">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.85.38-1.76.64-2.73.75 1-.6 1.77-1.55 2.14-2.67-.94.56-1.98.96-3.09 1.18-.89-.95-2.15-1.54-3.54-1.54-2.67 0-4.85 2.18-4.85 4.85 0 .38.04.75.1.1.84 1.73 2.12 3.25 3.5 4.29-.65-.18-1.29-.39-1.91-.65-.96 1.55-1.53 3.35-1.53 5.3 0 1.25.32 2.45.88 3.51-.55.15-1.12.23-1.7.23-1.07 0-2.07-.3-2.92-.85.34 1.15.93 2.17 1.75 3.01.88.92 2.05 1.57 3.39 1.83-.82.16-1.68.24-2.55.24-1.65 0-3.19-.48-4.48-1.28.98 1.16 2.37 1.98 3.96 2.18 2.01 1.05 4.41 1.67 6.94 1.67 8.32 0 12.87-6.88 12.87-12.87 0-.19-.01-.39-.01-.58.89-.64 1.66-1.45 2.29-2.37z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.252.148 4.654 1.64 4.803 4.85.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.149 3.21-1.64 4.653-4.85 4.802-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.21-.149-4.653-1.64-4.802-4.85-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.149-3.21 1.64-4.653 4.85-4.802 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.203-6.793 2.63-7.005 7.005-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.203 4.358 2.63 6.793 7.005 7.005 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.358-.203 6.793-2.63 7.005-7.005.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.203-4.358-2.63-6.793-7.005-7.005-1.28-.058-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.471-10.999a1.529 1.529 0 100-3.058 1.529 1.529 0 000 3.058z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.761s.784-1.761 1.75-1.761 1.75.79 1.75 1.761-.784 1.761-1.75 1.761zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.676 7 2.724v6.511z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-400 uppercase">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="transition-colors duration-200 hover:text-white">About us</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-white">Contact us</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-white">Careers</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-white">Press</a></li>
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-400 uppercase">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="transition-colors duration-200 hover:text-white">Features</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-white">Pricing</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-white">News</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-white">Help desk</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-white">Support</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-400 uppercase">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="transition-colors duration-200 hover:text-white">Digital Marketing</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-white">Content Writing</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-white">SEO for Business</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-white">UI Design</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-400 uppercase">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="transition-colors duration-200 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="transition-colors duration-200 hover:text-white">Return Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Team; 
