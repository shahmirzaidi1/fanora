// components/mainLayouts/BrowseStars.tsx
"use client"; // Due to filters and pagination state management that would live here

import React, { useState, useEffect } from 'react';
import fsPromises from 'fs/promises'; // This won't work in "use client" component for initial load
import path from 'path';             // Same as above
import { BrowseStarsPageData, StarData as StarDataType } from '@/types/browseStarsPageData'; // Ensure correct type import
import BrowsePageHero from '@/components/browseStars/BrowsePageHero';
import StarFilters from '@/components/browseStars/StarFilters';
import StarCard from '@/components/browseStars/StarCard';
import PaginationControls from '@/components/browseStars/PaginationControls';

// This component needs to be refactored for client-side data handling or have data passed as props.
// For now, I'll demonstrate fetching data on the client side if this component is "use client".
// Ideally, initial data is fetched server-side and passed as props.
// If filtering/pagination re-fetches or filters client-side, then "use client" is necessary.

interface BrowseStarsLayoutProps {
  initialData: BrowseStarsPageData; // Data passed from server component (page.tsx)
}

export default function BrowseStarsLayout({ initialData }: BrowseStarsLayoutProps) {
  const [pageData, setPageData] = useState<BrowseStarsPageData>(initialData);
  const [filteredStars, setFilteredStars] = useState<StarDataType[]>(initialData.stars);
  // TODO: Add state for current page, items per page for pagination

  // Placeholder for actual filter logic
  const handleApplyFilters = (filters: { searchText: string; category: string; price: string }) => {
    console.log("Applying filters:", filters);
    // This is where you'd filter initialData.stars based on the filter values
    // For demonstration, let's just log and reset to all stars or implement a simple filter
    let newFilteredStars = initialData.stars.filter(star => {
        const nameMatch = filters.searchText ? star.name.toLowerCase().includes(filters.searchText.toLowerCase()) : true;
        // Add category and price filtering logic here based on your data structure
        return nameMatch;
    });
    setFilteredStars(newFilteredStars);
  };

  // Placeholder for pagination logic
  const handlePreviousPage = () => console.log("Previous page");
  const handleNextPage = () => console.log("Next page");

  if (!pageData) {
    return <div>Loading stars...</div>; // Or a proper loading skeleton
  }

  return (
    <>
      <BrowsePageHero data={pageData.hero} />
      <StarFilters data={pageData.filters} onApplyFilters={handleApplyFilters} />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredStars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {filteredStars.map((star) => (
                <StarCard key={star.id} star={star} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-xl text-gray-600">No stars found matching your criteria.</p>
            </div>
          )}
          {/* TODO: Implement actual pagination logic and connect to PaginationControls */}
          {filteredStars.length > 0 && (
             <PaginationControls
                data={pageData.pagination}
                onPrevious={handlePreviousPage}
                onNext={handleNextPage}
                isPreviousDisabled={true} // Replace with actual logic
                isNextDisabled={false}   // Replace with actual logic
             />
          )}
        </div>
      </section>
    </>
  );
}