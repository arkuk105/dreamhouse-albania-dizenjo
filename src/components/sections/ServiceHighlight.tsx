
import React from 'react';
import { NavLink } from 'react-router-dom';

interface ServiceHighlightProps {
  title: string;
  description: string;
  image: string;
  link: string;
  reverse?: boolean;
}

const ServiceHighlight: React.FC<ServiceHighlightProps> = ({
  title,
  description,
  image,
  link,
  reverse = false
}) => {
  return (
    <div className="py-16">
      <div className={`container mx-auto px-4 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
        <div className="w-full md:w-1/2">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-72 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-furniture-navy">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          <NavLink 
            to={link}
            className="inline-block text-furniture-forest font-medium border-b-2 border-furniture-forest hover:text-furniture-navy transition-colors"
          >
            Mëso më shumë
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlight;
