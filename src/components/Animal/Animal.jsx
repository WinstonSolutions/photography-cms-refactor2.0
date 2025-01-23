import React from "react";
import cat from "../../assets/cat.jpg";
import { Link } from "react-router-dom";

const Animal = () => {
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={cat}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                our mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                CAT
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Mysterious, graceful, and endlessly fascinating. We capture their beauty and unique personalities through our photography.
              </p>
              <Link
                to="/animal-gallery"
                data-aos="fade-up"
                data-aos-delay="900"
                className="inline-block bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Animal;
