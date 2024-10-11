import { Lucide } from 'lucide-react';

const techStack = [
  { name: 'React', icon: '/reactsvg.svg' },
  { name: 'Next.js', icon: '/nextjs.svg' },
  { name: 'Figma', icon: '/figma.svg' },
  { name: 'Node.js', icon: '/nodejs.svg' },
  { name: 'MongoDB', icon: '/mongodb.svg' },
  { name: 'Git', icon: '/git.svg' },
  { name: 'TypeScript', icon: '/typscript.svg' },
  { name: 'Chartjs', icon: '/chartjs.svg' },
  { name: 'Tailwind', icon: '/tailwind.svg' },
  { name: 'Linux', icon: '/linux.svg' },
  { name: 'Firebase', icon: '/firebase.svg' },
  
  { name: 'Python', icon: '/python.svg' },
  { name: 'Mysql', icon: '/mysql.svg' },
  { name: 'Javascript', icon: '/javascript.svg' },
  { name: 'Php', icon: '/php.svg' },
  { name: 'Redux', icon: '/redux.svg' },
  { name: 'Sass', icon: '/sass.svg' },
  // Add or remove more technologies as necessary
];

const TechStack = () => (
  <section id="tech-stack" className="bg-black">
    <div className="max-w-6xl mx-auto px-3">
      <h2 className="text-4xl text-center font-bold mb-8 text-red-500 shadow-lg">LANGUAGES <span className='text-yellow-300'>&</span> TOOLS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-center items-center">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
            <img
              src={tech.icon}
              alt={`${tech.name} logo`}
              className="h-16 w-16 mb-4 filter drop-shadow-md hover:drop-shadow-lg"
            />
            <p className="text-lg text-cyan-500 font-semibold drop-shadow">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
