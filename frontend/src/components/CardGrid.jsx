import React from 'react';
import { useCards } from '../context/CardContext';

const CardGrid = () => {
  const { cards } = useCards();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-24">
        {cards.map((card) => (
            <div key={card.id || card.title} className="relative block overflow-hidden rounded-lg shadow-md border border-gray-300 p-4 sm:p-6 lg:p-8">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                <div className="sm:flex sm:justify-between sm:gap-4">
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                        {card.title}
                    </h3>
                </div>
                <hr className="h-px bg-gray-200 border dark:bg-gray-700"></hr>
                <div className="mt-4">
                    <p className="text-pretty text-sm text-gray-500">
                        {card.description}
                    </p>
                </div>
            </div>
        ))}
         

         
      </div>
    </div>
    
  );
};

export default CardGrid;
