// import { FaApple, FaTools, FaLaptop, FaDesktop, FaUsers, FaClock } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function AboutUsPage() {
//   return (
//     <section className="w-full bg-gradient-to-b from-primary to-white text-secondary">
      
//       {/* HERO SECTION */}
//       <div className="relative h-[70vh] flex items-center justify-center">
//         <img
//           src="/about1.jpg"
//           alt="Apple MacBooks"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/70" />

//         <div className="relative z-10 max-w-4xl text-center px-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-white">
//             About <span className="text-cyan-400">Isuri Computers</span>
//           </h1>
//           <p className="mt-4 text-cyan-100 text-lg">
//             Your trusted destination for premium computers, custom builds, and expert repairs.
//           </p>
//         </div>
//       </div>

//       {/* WHO WE ARE */}
//       <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
//           <p className="text-secondary/80 leading-relaxed">
//             At <strong>Isuri Computers</strong>, we specialize in selling premium laptops,
//             desktops, Apple MacBooks, and custom-built PCs. With over
//             <strong> 5 years of experience</strong> and more than
//             <strong> 1000+ satisfied customers</strong>, we’ve built a reputation for
//             reliability, quality, and friendly service.
//           </p>

//           <p className="mt-4 text-secondary/80 leading-relaxed">
//             Whether you're a student, gamer, content creator, or business professional,
//             we help you choose or build the perfect machine for your needs.
//           </p>
//         </div>

//         <img
//           src="/about3.jpg"
//           alt="Workstation setup"
//           className="rounded-2xl shadow-xl"
//         />
//       </div>

//       {/* SERVICES */}
//       <div className="bg-secondary text-primary py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             What We Do
//           </h2>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             <ServiceCard
//               icon={<FaApple />}
//               title="Apple MacBooks"
//               text="Sales, upgrades, and professional repairs for all Apple MacBook models."
//             />
//             <ServiceCard
//               icon={<FaDesktop />}
//               title="Custom PC Building"
//               text="High-performance gaming and workstation PC builds tailored to your needs."
//             />
//             <ServiceCard
//               icon={<FaLaptop />}
//               title="Laptops & Desktops"
//               text="Wide range of branded laptops and desktops for work, study, and play."
//             />
//             <ServiceCard
//               icon={<FaTools />}
//               title="Repairs & Upgrades"
//               text="Hardware repairs, SSD upgrades, RAM upgrades, diagnostics & maintenance."
//             />
//           </div>
//         </div>
//       </div>

//       {/* CUSTOM PC SECTION */}
//       <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
//         <img
//           src="/about2.jpg"
//           alt="Custom PC Build"
//           className="rounded-2xl shadow-xl"
//         />

//         <div>
//           <h2 className="text-3xl font-bold mb-4">
//             Custom CPU & Gaming Builds
//           </h2>
//           <p className="text-secondary/80 leading-relaxed">
//             From RGB gaming rigs to silent professional workstations,
//             we design and build PCs using genuine components and proper airflow tuning.
//           </p>

//           <ul className="mt-4 space-y-2 text-secondary/80">
//             <li>✔ High FPS Gaming Builds</li>
//             <li>✔ Video Editing & 3D Workstations</li>
//             <li>✔ Office & Budget PCs</li>
//             <li>✔ Warranty-backed components</li>
//           </ul>
//         </div>
//       </div>

//       {/* STATS */}
//       <div className="bg-primary py-14">
//         <div className="max-w-5xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
//           <Stat icon={<FaClock />} value="5+" label="Years Experience" />
//           <Stat icon={<FaUsers />} value="1000+" label="Happy Customers" />
//           <Stat icon={<FaLaptop />} value="500+" label="Devices Sold" />
//           <Stat icon={<FaTools />} value="800+" label="Repairs Completed" />
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="py-16 text-center">
//         <h2 className="text-3xl font-bold mb-4">
//           Let’s Build or Fix Your Next Machine
//         </h2>
//         <p className="text-secondary/80 mb-6">
//           Visit our store or contact us today for expert advice and honest pricing.
//         </p>
//         <Link
//           to="/contact"
//           className="inline-block bg-accent text-secondary px-8 py-3 rounded-full
//           font-semibold hover:bg-accent/80 transition-all"
//         >
//           Contact Us
//         </Link>
//       </div>
//     </section>
//   );
// }

// /* ------------------ COMPONENTS ------------------ */

// function ServiceCard({ icon, title, text }) {
//   return (
//     <div className="bg-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition">
//       <div className="text-3xl mb-3 text-cyan-300 flex justify-center">
//         {icon}
//       </div>
//       <h3 className="font-semibold text-lg mb-2">{title}</h3>
//       <p className="text-sm text-primary/80">{text}</p>
//     </div>
//   );
// }

// function Stat({ icon, value, label }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-6">
//       <div className="text-3xl text-cyan-500 flex justify-center mb-2">
//         {icon}
//       </div>
//       <h3 className="text-2xl font-bold">{value}</h3>
//       <p className="text-sm text-secondary/70">{label}</p>
//     </div>
//   );
// }


import {
  FaIndustry,
  FaLeaf,
  FaRecycle,
  FaGlobe,
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";

export default function AboutUsPage() {
  return (
    <section className="w-full text-slate-800 text-[17px] md:text-[18px]">

      {/* HERO */}
      <div className="relative h-[65vh] flex items-center justify-center">
        <img
          src="/about-hero.png"
          alt="Plastic Manufacturing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-4xl text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            ABOUT US 
          </h1>
          <p className="mt-4 text-blue-100 text-xl">
            Manufacturing Quality Plastic Solutions With Sustainability At Heart
          </p>
        </div>
      </div>

      {/* WHO WE ARE */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl shadow-xl px-8 py-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">WHO WE ARE</h2>
            <p className="text-slate-700 leading-relaxed">
              <strong>PJ Plastic (Pvt) Ltd</strong>, founded in 2019 in Ratnapura,
              is a trusted manufacturer and distributor of high-quality plastic
              products serving household, industrial, and commercial needs
              across Sri Lanka.
            </p>

            <p className="mt-4 text-slate-700 leading-relaxed">
              Our growth has been driven by modern technology, continuous
              improvement, and a strong customer-first mindset, making us a
              reliable partner for everyday and large-scale plastic solutions.
            </p>
          </div>

          <img
            src="/logo.png"
            alt="PJ Plastic Factory"
            className="rounded-2xl shadow-xl w-[380px] h-[380px] mx-auto object-contain"
          />
        </div>
      </div>

      {/* MISSION & VISION */}
      <div className="bg-[#eaf3ff] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            OUR PURPOSE
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <PurposeCard
              icon={<FaIndustry />}
              title="Our Mission"
              text="To manufacture durable, affordable, and high-quality plastic products that enhance everyday life while maintaining innovation, efficiency, and customer satisfaction."
              color="blue"
            />

            <PurposeCard
              icon={<FaLeaf />}
              title="Our Vision"
              text="To become a leading plastic solutions provider in Sri Lanka and beyond, recognized for sustainability, innovation, and responsible manufacturing."
              color="green"
            />
          </div>
        </div>
      </div>

      {/* OUR VALUES */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          OUR CORE VALUES
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <ValueCard
            icon={<FaCheckCircle />}
            title="Quality First"
            text="High standards of strength, durability, and safety."
            color="blue"
          />
          <ValueCard
            icon={<FaLightbulb />}
            title="Innovation"
            text="Modern technology and continuous improvement."
            color="yellow"
          />
          <ValueCard
            icon={<FaRecycle />}
            title="Sustainability"
            text="Eco-friendly materials and responsible practices."
            color="green"
          />
          <ValueCard
            icon={<FaUsers />}
            title="Customer Focus"
            text="Building trust and long-term relationships."
            color="purple"
          />
          <ValueCard
            icon={<FaHandshake />}
            title="Integrity"
            text="Honesty, transparency, and respect."
            color="red"
          />
        </div>
      </div>

      {/* HOW WE WORK */}
      <div className="bg-[#f8fbff] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            HOW WE WORK
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <WorkCard
              icon={<FaIndustry />}
              title="In-House Manufacturing"
              text="Advanced injection molding with modern machinery."
            />
            <WorkCard
              icon={<FaRecycle />}
              title="Sustainable Practices"
              text="Waste reduction and responsible recycling."
            />
            <WorkCard
              icon={<FaGlobe />}
              title="Outsourcing Services"
              text="Contract manufacturing for local & global partners."
            />
            <WorkCard
              icon={<FaLeaf />}
              title="Quality Assurance"
              text="Strict quality checks for safety and durability."
            />
          </div>
        </div>
      </div>

      {/* OUR LEADERSHIP */}
      <div className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14">
            OUR LEADERSHIP
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Leader
              image="/md.jpeg"
              name="Mrs. Inoka Priyadarshani"
              role="Director / Managing Director"
              text="Overseeing operations and ensuring consistent product quality."
            />
            <Leader
              image="/director.jpg"
              name="Mr. Linuka Jayasinghe"
              role="Director"
              text="Driving strategy and long-term partnerships."
            />            
            <Leader
              image="/ceo.jpeg"
              name="Mr. Hiruka Jayasinghe"
              role="Chief Executive Officer (CEO)"
              text="Leading PJ Plastic with innovation, growth, and sustainability."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPONENTS ---------------- */

function PurposeCard({ icon, title, text, color }) {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
  };

  return (
    <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition">
      <div className={`w-14 h-14 flex items-center justify-center rounded-full text-2xl mb-6 ${colors[color]}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}

function ValueCard({ icon, title, text, color }) {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    yellow: "bg-yellow-100 text-yellow-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    red: "bg-red-100 text-red-600",
  };

  return (
    <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition">
      <div className={`w-14 h-14 mx-auto flex items-center justify-center rounded-full text-2xl mb-4 ${colors[color]}`}>
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
}

function WorkCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <div className="text-3xl text-blue-500 mb-3">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
}

function Leader({ image, name, role, text }) {
  return (
    <div className="bg-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-2 border-blue-400"
      />
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-blue-300 text-sm">{role}</p>
      <p className="text-sm text-slate-200 mt-3">{text}</p>
    </div>
  );
}
