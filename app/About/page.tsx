import React from "react";

export default function About() {
  return (
    <div className="relative overflow-hidden bg-black">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
      >
        <path
          fill="none"
          stroke="#ccc"
          strokeWidth="2"
          d="M0 540 L1920 540 M960 0 L960 1080 M480 540 L480 1080 M1440 540 L1440 0"
        />
      </svg>
      <section id="about" className="py-2 bg-black text-gray-700 relative z-10">
        <h2 className="text-5xl text-center text-red-600 mb-4">ABOUT ME</h2>
        <p className="mt-2 max-w-4xl mx-auto text-lg text-gray-700 shadow-md p-2 rounded">
          I'm a fullstack developer with over 6 years of experience building web applications. I specialize in
          creating scalable, performant solutions using modern technologies. My passion lies in crafting user-friendly
          interfaces and optimizing backend performance to deliver seamless experiences.
        </p>
        <div className="flex flex-col items-center mt-6">
          <h3 className="text-2xl text-gray-400 mb-4">Wanna Know My Stack?</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Frontend Technologies */}
            <div className="flex flex-col items-center">
              <img src="/reactsvg.svg" alt="React" className="h-8 w-8 mb-2" />
              <p className="text-gray-700">React</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/nextjs.svg" alt="Next.js" className="h-8 w-8 mb-2" />
              <p className="text-gray-700">Next.js</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/typscript.svg" alt="TypeScript" className="h-8 w-8 mb-2" />
              <p className="text-gray-700">TypeScript</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/chartjs.svg" alt="chartjs" className="h-8 w-8 mb-2" />
              <p className="text-gray-700">Chartjs</p>
            </div>
            {/* Backend Technologies */}
            <div className="flex flex-col items-center">
              <img src="/nodejs.svg" alt="Node.js" className="h-8 w-8 mb-2" />
              <p className="text-gray-700">Node.js</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/javascript.svg" alt="javascript" className="h-8 w-8 mb-2" />
              <p className="text-gray-700">javascript</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/python.svg" alt="python" className="h-8 w-8 mb-2" />
              <p className="text-gray-700">Python</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/linux.svg" alt="linux" className="h-8 w-8 mb-2" />
              <p className="text-gray-700">Linux</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/mongodb.svg" alt="MongoDB" className="h-8 w-8 mb-2" />
              <p className="text-gray-700">MongoDB</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/redux.svg" alt="redux" className="h-8 w-8 mb-2" />
              <p className="text-gray-700">Redux</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/firebase.svg" alt="Firebase" className="h-8 w-8 mb-2" />
              <p className="text-gray-700">Firebase</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/mysql.svg" alt="mysql" className="h-8 w-8 mb-2" />
              <p className="text-gray-700">MySQL</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
