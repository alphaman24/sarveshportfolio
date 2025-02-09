import React from 'react';
import AnimatedSection from './AnimatedSection';

interface SectionProps {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, number, title, children }) => {
  return (
    <section id={id} className="py-24">
      <AnimatedSection className="space-y-8">
        <h2 className="flex items-center text-2xl font-bold text-slate-200 dark:text-slate-200">
          <span className="font-mono text-[#64ffda] text-xl mr-2">
            {number}.
          </span>
          {title}
          <div className="ml-4 flex-1 h-[1px] bg-slate-700"></div>
        </h2>
        {children}
      </AnimatedSection>
    </section>
  );
};

export default Section;