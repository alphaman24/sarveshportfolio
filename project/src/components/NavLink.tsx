import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  number?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, active, onClick, number }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center font-mono text-sm hover:text-[#64ffda] transition-colors ${
        active ? 'text-[#64ffda]' : 'text-slate-400'
      }`}
    >
      {number && (
        <span className="mr-1 text-[#64ffda] group-hover:text-[#64ffda]">
          {number}.{' '}
        </span>
      )}
      {children}
    </a>
  );
};

export default NavLink;