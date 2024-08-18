import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get('https://fullstack-assignment-97fv.onrender.com/cards');
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CardContext.Provider value={{ cards: filteredCards, searchTerm, setSearchTerm }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCards = () => useContext(CardContext);