import React, { useState } from 'react';
import InsightsHero from '../components/Sections/InsightsHero';
import Blogs from '../components/Sections/Blogs';

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main style={{ backgroundColor: '#080808', minHeight: '100vh' }}>
      <InsightsHero
        onSelectCategory={setActiveCategory}
        onSearchChange={setSearchTerm}
      />
      <Blogs
        activeCategory={activeCategory}
        searchTerm={searchTerm}
      />
    </main>
  );
}