import React from "react";
import Image from "../assets/hero-image.jpeg";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <section className="py-12 px-4 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">

        {/* Top Hero Row */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-10 mb-8">

          {/* Text Content */}
          <div className="flex-1">
            <h1 className="font-display text-3xl md:text-5xl font-semibold mb-6">
              Short links. Deep insights.
            </h1>

            <p className="font-sans text-gray-900 mb-8 text-lg">
              A modern platform to shorten, share, and analyze links with <br />
              real-time data precision.
            </p>

            <div className="flex gap-4">
              <button className="bg-primary  px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition">
                Get started →
              </button>

              <button className="bg-brand-gray-100 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition">
                Try without an account
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 hidden md:flex justify-center">
            <img
              src={Image}
              alt="Shortly dashboard"
              className="w-full max-w-md rounded-xl shadow-2xl shadow-blue-900 rotate-3 scale-[1.08]"
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto  bg-card border border-border rounded-3xl shadow-lg p-6">
          <div className="flex flex-col w-full">
            <div className="mb-7 lg:mb-12">
              <h3 className="mb-2">Shorten a long link</h3>
              <p className="text-muted-foreground">Shorten for free</p>
            </div>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col">
                <label htmlFor="" className="mb-3 block text-sm md:text-lg font-semibold">Paste your long URL here</label>
                <input className=" w-full h-full bg-input border-2 border-solid border-primary text-foreground font-extrabold rounded-lg px-4 py-4 " type="text" placeholder="https://example.com/very-long-url-that-needs-shortening"/>
              </div>
              <div>
                <button className="btn-primary py-2 text-xl">Shorten now → </button>
              </div>
            </form>
         </div>
        </div>


        {/* Feature Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 text-card " >
          <HeroCard
            title="Analytics that matters"
            description="Track clicks, views, and conversions with real-time data."
          />
          <HeroCard
            title="Customizable links"
            description="Create branded short links that reflect your identity."
          />
          <HeroCard
            title="Seamless integration"
            description="Easily integrate with popular platforms and tools."
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
