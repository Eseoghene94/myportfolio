
const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A fully functional e-commerce platform built with Next.js, React, and AWS for cloud services.',
      link: '#',
    },
    {
      title: 'Social Media App',
      description: 'A social media application with real-time chat and notifications using Socket.io, MongoDB, and Node.js.',
      link: '#',
    },
    // Add more projects as needed
  ]; 
  
  const Projects = () => (
    <section id="projects" className="bg-black">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-5xl text-center font-bold text-white">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-950 p-3 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-center mb-4 text-red-700">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-400">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block text-blue-500 dark:text-blue-300 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  ); 
  
  export default Projects;