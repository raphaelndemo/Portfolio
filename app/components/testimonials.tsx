import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Import your testimonial images
import testimonial1 from '../assets/images/testimonial1.png';
import testimonial2 from '../assets/images/testimonial2.png';
import testimonial4 from '../assets/images/testimonial4.png';

export default function Testimonials() {
  const testimonials = [
    {
      image: testimonial1,
      name: "Brian Shayne",
      title: "Skilled Earners",
      quote: "Working with Raphael was an absolute pleasure! His ability to understand our needs and translate them into a user-friendly design is remarkable. He not only delivered the project ahead of schedule but also provided ongoing support, ensuring everything ran smoothly. Highly recommended!",
    },
    {
      image: testimonial2,
      name: "Kelly",
      title: "UI/UX Designer",
      quote: "Raphael's technical skills and creativity were crucial to the success of our project. He helped us optimize our website and improve user engagement significantly. His solutions are always forward-thinking, and his work ethic is top-notch. An absolute asset to any team!",
    },
    
    {
      image: testimonial4,
      name: "Mirriam N.",
      title: "Assignment Helper Mimi",
      quote: "From the first meeting to the final delivery, Raphael was professional, attentive, and dedicated to ensuring our project's success. He always kept us in the loop and made sure to understand our vision. The final result exceeded our expectations. We’ll definitely be working together again!",
    },
  ];

  return (
    <section className="py-5 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-col items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Swiper Section */}
          <div className="w-full lg:w-full">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 15,
                stretch: -30,
                depth: 150,
                modifier: 2.5,
                slideShadows: false,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className="!h-auto !flex !items-center !justify-center px-2"
                >
                  <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 transform transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-gray-400  shadow-lg object-cover"
                        loading='lazy'
                      />
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm md:text-base text-gray-500">
                          {testimonial.title}
                        </p>
                        <div className="text-amber-400 mt-1">
                          ★★★★★
                        </div>
                      </div>
                    </div>
                    <blockquote className="relative pl-6 text-gray-700 md:text-md flex-1">
                      <span className="absolute left-0 top-0 text-gray-600 text-3xl font-serif">
                        “
                      </span>
                      <p className="leading-relaxed">{testimonial.quote}</p>
                      <span className="absolute right-0 bottom-0 text-gray-600 text-2xl font-serif">
                        ”
                      </span>
                    </blockquote>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-400 rounded-3xl transition-all duration-300 pointer-events-none" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      
    </section>
  );
}