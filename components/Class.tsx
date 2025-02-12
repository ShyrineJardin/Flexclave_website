import React from "react";

const Class = () => {
  const program = [
    {
      image: "/assets/hatha.jpg",
      title: "Hatha Yoga",
      description:
        "Focuses on basic postures and is a slower-paced class that is beginner-friendly.",
      sessions: "6 to 10 sessions",
    },
    {
      image: "/assets/vinyasa.jpeg",
      title: "Vinyasa Yoga",
      description:
        "A dynamic class where postures flow in sync with your breath. It can be fast-paced, with a focus on strength and flexibility.",
      sessions: "5-10 sessions",
    },
    {
      image: "assets/Ashtanga.jpeg",
      title: "Ashtanga Yoga",
      description:
        "A rigorous style following a set sequence of postures. It is often faster and can be more physically demanding.",
      sessions: "10-12 sessions",
    },
    {
      image: "assets/bikram.jpeg",
      title: "Bikram Yoga",
      description:
        "A specific sequence of 26 postures practiced in a heated room (around 105°F/40°C). It’s designed to improve strength, flexibility, and detoxification.",
      sessions: "26 sessions",
    },
    {
      image: "assets/yin.jpg",
      title: "Yin Yoga",
      description:
        "A slower-paced style where postures are held for 3-5 minutes at a time to target deep connective tissues. It is very restorative.",
      sessions: "6 to 10 sessions",
    },
    {
      image: "assets/restorative.jpg",
      title: "Restorative Yoga",
      description:
        "Focuses on relaxation and recovery, using props to support the body in restful poses.",
      sessions: "4-6 sessions",
    },
  ];

  return (
    <div id="class" className="container mx-auto mt-20 text-center">
      <h1 className="pt-20 text-5xl font-semibold mb-5">Our Classes</h1>
      <p className="mb-20 text-lg">At Flex Clave, we’re here to support every step of your journey, whatever season you’re in. Let’s begin together.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {program.map((yoga, index) => (
          <div data-aos="flip-left"
            key={index}
            className="relative h-72 rounded-lg overflow-hidden shadow-lg"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${yoga.image})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h2 className="text-lg font-bold">{yoga.title}</h2>
              <p className="text-sm">{yoga.description}</p>
              <div className="mt-2 flex items-center">
                <span className="text-xs bg-white text-black px-2 py-1 rounded-md">
                  {yoga.sessions}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Class;
