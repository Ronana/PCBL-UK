import React from 'react';
import { TESTIMONIALS } from '../constants';
import { StarIcon } from './icons/SpecIcons';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-brand-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-base font-semibold text-brand-purple tracking-wide uppercase">What Our Customers Say</h2>
            <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                Trusted by Gamers and Creators
            </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-brand-light-dark p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-300">
                <p>"{testimonial.quote}"</p>
              </blockquote>
              <cite className="mt-4 block font-semibold text-white not-italic">{testimonial.name}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;