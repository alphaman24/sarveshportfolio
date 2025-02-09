import React from 'react';
import { Github as GitHub, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  
  github,
  demo,
}) => {
  return (
    <div className="relative group">
      <div className="relative bg-[#112240] rounded-lg p-8 h-full hover:-translate-y-2 transition-all duration-300">
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
             {/*<p className="font-mono text-[#64ffda] text-sm">Machine Learning Projects</p>*/}
              <h3 className="text-xl font-semibold text-slate-200 hover:text-[#64ffda] transition-colors">
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              </h3>
            </div>
            <div className="flex space-x-4">
              <a 
                href={github} 
                className="text-slate-400 hover:text-[#64ffda] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
              >
                <GitHub size={22} />
              </a>
              <a 
                href={demo} 
                className="text-slate-400 hover:text-[#64ffda] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
              >
                <ExternalLink size={22} />
              </a>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed">{description}</p>
          <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate-300">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;