import { Progress } from '@/components/ui/progress';
import { TypographyDemo } from "@/components/ui/typography";

const skills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 90 },
  { name: 'AWS', level: 80 },
  { name: 'Node.js', level: 85 },
  { name: 'Express.js', level: 85 },
  { name: 'MongoDB', level: 75 },
  { name: 'Docker', level: 70 },
  { name: 'TypeScript', level: 80 },
  { name: 'GraphQL', level: 60 },
{ name: 'MySQL', level: 80 },
{ name: 'PostGRESQL', level: 80 },
{ name: 'Supabase', level: 75 },
  // Add or remove skills as needed
]; 

const Skills = () => (
  <section id="skills" className="bg-black">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="text-5xl text-center font-bold text-red-700">MY SKILLS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {skills.map((skill, index) => (
          <div key={index}>
            <p className="text-xl font-semibold mb-1 dark:text-gray-700">{skill.name}</p>
            <Progress value={skill.level} className="w-full" />
            <p className="text-sm mt-1 text-cyan-500 dark:text-cyan-400">{skill.level}% Proficiency</p>
          </div>
        ))}
      </div>
    </div>
  </section>
); 

export default Skills;