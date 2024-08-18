import React from 'react';
import { CardProvider } from './context/CardContext';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CardGrid from './components/CardGrid';
import Footer from './components/Footer';

function App() {
  return (
    <CardProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <SearchBar />
          <CardGrid />
        </main>
        <Footer />
      </div>
    </CardProvider>
  );
}

export default App;