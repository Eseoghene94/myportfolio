import { Book, User } from 'lucide-react';

const education = [
  {
    degree: 'BSC, Petroleum Engineering',
    institution: 'University of Benin (UNIBEN)',
    year: '2016',
    icon: <User className="h-8 w-8 text-red-600" />,
  },
  {
    degree: 'Frontend Development',
    institution: 'Coursera',
    year: '2020',
    icon: <Book className="h-8 w-8 text-red-600" />,
  },
  {
    degree: 'Backend Development',
    institution: 'Coursera',
    year: '2021',
    icon: <Book className="h-8 w-8 text-red-600" />,
  },
  // Add more education as necessary
];

const Education = () => (
  <section id="education" className="p-1 bg-black">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="text-5xl text-center font-bold mb-12 text-white">EDUCATION</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-950 p-6 rounded-lg shadow-lg flex items-start">
            <div className="mr-4">{edu.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-red-600">{edu.degree}</h3>
              <p className="text-gray-500">{edu.institution}</p>
              <p className="text-gray-900">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
