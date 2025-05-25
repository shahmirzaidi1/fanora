// components/browseStars/PaginationControls.tsx
"use client"; // For interactive pagination

import React from 'react';
import { BrowseStarsPaginationData } from '@/types/browseStarsPageData';

interface PaginationControlsProps {
  data: BrowseStarsPaginationData;
  onPrevious: () => void; // TODO: Implement actual pagination logic
  onNext: () => void;     // TODO: Implement actual pagination logic
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  data,
  onPrevious,
  onNext,
  isPreviousDisabled,
  isNextDisabled,
}) => {
  return (
    <div className="mt-16 flex justify-center items-center space-x-2 sm:space-x-4">
      <button
        onClick={onPrevious}
        disabled={isPreviousDisabled}
        className="text-gray-500 hover:text-brand p-2 rounded-md disabled:opacity-50 text-sm"
      >
        <i className={`${data.previousIconClass} mr-1`}></i> {data.previousButtonText}
      </button>
      <span className="text-brand font-semibold text-sm">{data.currentPageInfo}</span>
      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className="text-brand hover:text-blue-800 p-2 rounded-md disabled:opacity-50 text-sm" // Added disabled style
      >
        {data.nextButtonText} <i className={`${data.nextIconClass} ml-1`}></i>
      </button>
    </div>
  );
};

export default PaginationControls;