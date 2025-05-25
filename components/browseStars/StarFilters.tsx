// components/browseStars/StarFilters.tsx
"use client"; // This component will have interactive elements

import React, { useState } from 'react';
import { BrowseStarsFiltersData } from '@/types/browseStarsPageData';

interface StarFiltersProps {
  data: BrowseStarsFiltersData;
  onApplyFilters: (filters: { searchText: string; category: string; price: string }) => void;
}

const StarFilters: React.FC<StarFiltersProps> = ({ data, onApplyFilters }) => {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleApply = () => {
    onApplyFilters({ searchText, category, price });
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="filter-section">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div>
              <label htmlFor="search-star-browse" className="block text-xs font-medium text-gray-600 mb-1">
                {data.searchLabel}
              </label>
              <input
                type="text"
                id="search-star-browse"
                placeholder={data.searchPlaceholder}
                className="filter-input"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="filter-category-browse" className="block text-xs font-medium text-gray-600 mb-1">
                {data.categoryLabel}
              </label>
              <select
                id="filter-category-browse"
                className="filter-select bg-white"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">{data.defaultCategoryOption}</option>
                {data.categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="filter-price-browse" className="block text-xs font-medium text-gray-600 mb-1">
                {data.priceLabel}
              </label>
              <select
                id="filter-price-browse"
                className="filter-select bg-white"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="">{data.defaultPriceOption}</option>
                {data.priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>
            <button
              onClick={handleApply}
              className="btn-secondary w-full py-2.5 text-sm"
            >
              {data.applyButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarFilters;