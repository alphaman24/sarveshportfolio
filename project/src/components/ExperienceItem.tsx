import React from 'react';

interface ExperienceItemProps {
  title: string;
  
  points: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,

  points,
}) => {
  return (
    <div className="space-y-4 max-w-2xl">
      <div>
        <h3 className="text-xl font-semibold text-slate-200">
          {title}{' '}

        </h3>
      </div>
      <ul className="space-y-4">
        {points.map((point, index) => (
          <li key={index} className="flex space-x-2 text-slate-400">
            <span className="text-[#64ffda] flex-shrink-0 mt-1.5">▹</span>
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;