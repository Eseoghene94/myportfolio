"use client"
import { useEffect, useRef } from 'react';
import { Code, Laptop, Users, Server, Hexagon } from 'lucide-react';

const Hero = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const nameElement = nameRef.current;
    if (nameElement) {
      nameElement.classList.add('slide-in');
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-gray-700 flex items-center justify-center">
      <div className="text-center">
        <h1
          ref={nameRef}
          className="text-6xl font-extrabold mb-4 text-shadow"
        >
          <span className="text-red-600">Eseoghene</span>{' '}
          <span className="text-gray-300">Ojiyovwi</span>
        </h1>
        <p className="text-xl mb-6">Fullstack Developer | Pythonist |Crafting Web Solutions</p>
        <p className="text-lg mb-8">
          Based in Lagos, Nigeria, I specialize in building scalable, performant applications using modern technologies like Next.js, React, and Node.js.
        </p>
        <p className="text-lg mb-8">
          Passionate about creating user-friendly interfaces and optimizing backend performance to deliver seamless experiences.
        </p>

        {/* Tech Icons Section */}
        <div className="flex justify-center space-x-4 mb-8">
          <Hexagon className="text-red-600 text-3xl hover:text-red-400 transition duration-300" />
          <Code className="text-red-600 text-3xl hover:text-red-400 transition duration-300" />
          <Laptop className="text-red-600 text-3xl hover:text-red-400 transition duration-300" />
          <Server className="text-red-600 text-3xl hover:text-red-400 transition duration-300" />
          <Users className="text-red-600 text-3xl hover:text-red-400 transition duration-300" />
        </div>

        <a 
          href="#projects" 
          className="px-8 py-4 bg-red-600 text-white rounded-md hover:bg-red-500 transition duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;