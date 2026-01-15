// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaGamepad, FaTools, FaLaptop } from "react-icons/fa";

// const TAGLINES = [
//   "Elite gaming & workstation builds",
//   "RGB power. Clean cable management.",
//   "Built for FPS, creators & professionals"
// ];

// export default function HomeContent() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % TAGLINES.length);
//     }, 2500);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full min-h-[calc(100vh-100px)] overflow-hidden">
      
//       {/* Background Image */}
//       <img
//         src="/home.jpg"
//         alt="Gaming setup"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Neon overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-indigo-900/70" />

//       {/* Glow accents */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-fuchsia-500/30 blur-[120px]" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/30 blur-[120px]" />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 flex flex-col justify-center min-h-[calc(100vh-100px)]">
        
//         {/* Top badge */}
//         <span className="w-fit mb-6 px-4 py-1 rounded-full bg-white/10 backdrop-blur
//           text-xs tracking-widest text-cyan-300 uppercase">
//           Isuri Computers • Gaming Division
//         </span>

//         {/* Heading */}
//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white max-w-3xl">
//           Build your{" "}
//           <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
//             ultimate setup
//           </span>
//         </h1>

//         {/* Animated tagline */}
//         <p className="mt-4 text-lg text-cyan-100 min-h-[28px] transition-all">
//           {TAGLINES[index]}
//         </p>

//         {/* CTA buttons */}
//         <div className="mt-8 flex flex-wrap gap-4">
//           <Link
//             to="/products"
//             className="px-7 py-3 rounded-full bg-cyan-500 text-slate-900
//             font-semibold shadow-lg shadow-cyan-500/40 hover:bg-cyan-400 transition"
//           >
//             Browse Builds
//           </Link>

//           <Link
//             to="/contact"
//             className="px-7 py-3 rounded-full border border-white/30
//             text-white backdrop-blur hover:bg-white/10 transition"
//           >
//             Custom Build Request
//           </Link>
//         </div>

//         {/* Feature cards */}
//         <div className="mt-12 grid gap-4 sm:grid-cols-3 max-w-4xl">
          
//           <Feature
//             icon={<FaGamepad />}
//             title="Gaming PCs"
//             text="High-FPS builds with RTX GPUs, airflow tuning & RGB aesthetics."
//           />

//           <Feature
//             icon={<FaLaptop />}
//             title="Laptops & Macs"
//             text="Apple MacBooks, creator laptops & performance notebooks."
//           />

//           <Feature
//             icon={<FaTools />}
//             title="Repairs & Upgrades"
//             text="Diagnostics, SSD, RAM, thermal service & full rebuilds."
//           />
//         </div>

//         {/* Trust strip */}
//         <div className="mt-14 flex flex-wrap gap-6 text-sm text-slate-200">
//           <Trust value="5+" label="Years Experience" />
//           <Trust value="1000+" label="Customers Served" />
//           <Trust value="✔" label="Genuine Parts" />
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------------- COMPONENTS ---------------- */

// function Feature({ icon, title, text }) {
//   return (
//     <div className="rounded-2xl bg-white/10 border border-white/10
//       backdrop-blur-md p-5 hover:bg-white/15 transition">
//       <div className="text-2xl text-cyan-300 mb-2">{icon}</div>
//       <h3 className="font-semibold text-white">{title}</h3>
//       <p className="text-sm text-slate-200 mt-1">{text}</p>
//     </div>
//   );
// }

// function Trust({ value, label }) {
//   return (
//     <div className="flex items-center gap-2">
//       <span className="text-xl font-bold text-cyan-400">{value}</span>
//       <span className="uppercase tracking-wide text-xs">{label}</span>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRecycle, FaIndustry, FaBoxes } from "react-icons/fa";

const SLIDES = [
  {
    image: "/home1.jpg",
    title: "Advanced Plastic Injection Molding",
    text: "High-precision injection molding machines delivering consistent quality at scale."
  },
  {
    image: "/home2.jpg",
    title: "Industrial Plastic Manufacturing",
    text: "Modern industrial plastic processing technology for durable and efficient products."
  },
  {
    image: "/home3.png",
    title: "Electrical Plastic Accessories",
    text: "Safe, reliable and high-quality plastic electrical components."
  },
  {
    image: "/home4.jpeg",
    title: "Household Plastic Products",
    text: "Everyday plastic solutions designed for durability and convenience."
  },
  {
    image: "/home5.jpg",
    title: "Sustainable Plastic Recycling",
    text: "Committed to eco-friendly recycling and responsible plastic reuse"
  }
];

export default function HomeContent() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden">

      {/* Carousel Image */}
      <img
        src={SLIDES[index].image}
        alt={SLIDES[index].title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 min-h-[calc(100vh-80px)]
        flex flex-col justify-center">

        {/* Company badge */}
        <span className="w-fit mb-5 px-4 py-1 rounded-full bg-white/15 backdrop-blur
          text-xs tracking-widest text-blue-200 uppercase">
          PJ Plastic Industries
        </span>

        {/* Heading */}
        <h1 className="text-3xl md:text-6xl font-extrabold text-white max-w-3xl leading-tight">
          {SLIDES[index].title}
        </h1>

        {/* Caption */}
        <p className="mt-4 text-base md:text-lg text-slate-200 max-w-xl">
          {SLIDES[index].text}
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/products"
            className="px-7 py-3 rounded-full bg-blue-500 text-white
            font-semibold hover:bg-blue-400 transition shadow-lg"
          >
            View Products
          </Link>

          <Link
            to="/contact"
            className="px-7 py-3 rounded-full border border-white/40
            text-white hover:bg-white/10 transition backdrop-blur"
          >
            Contact Us
          </Link>
        </div>

        {/* Features */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3 max-w-4xl">
          <Feature
            icon={<FaIndustry />}
            title="Modern Machinery"
            text="Latest injection & PET molding technology."
          />
          <Feature
            icon={<FaRecycle />}
            title="Eco Friendly"
            text="Sustainable production and recycling practices."
          />
          <Feature
            icon={<FaBoxes />}
            title="Wide Product Range"
            text="Industrial, electrical & household plastic products."
          />
        </div>

        {/* Carousel Dots */}
        <div className="mt-10 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-blue-400" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Components ---------- */

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-2xl bg-white/10 border border-white/10
      backdrop-blur-md p-5 hover:bg-white/15 transition">
      <div className="text-2xl text-blue-300 mb-2">{icon}</div>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="text-sm text-slate-200 mt-1">{text}</p>
    </div>
  );
}
