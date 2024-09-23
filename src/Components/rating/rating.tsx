import React from 'react';
import { Star } from 'lucide-react';
import './rating.scss'

interface StarRatingProps {
  rating: number; // Current rating (0-5)
  maxRating?: number; // Maximum number of stars (default is 5)
  onRatingChange?: (newRating: number) => void; // Optional: Function to handle rating change
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5, onRatingChange }) => {
  // Function to handle clicking on a star
  const handleClick = (index: number) => {
    if (onRatingChange) {
      onRatingChange(index + 1);
    }
  };

  return (
    <div className="star-rating">
      {Array.from({ length: maxRating }, (_, index) => (
        <Star
          key={index}
          size={24} // Size of the star
          color={index < rating ? '#E9B200' : '#E9B200'} // Filled or outline color
          fill={index < rating ? '#E9B200' : 'none'} // If filled, color the star
          className="star"
          onClick={() => handleClick(index)} // Set rating on click
          style={{ cursor: onRatingChange ? 'pointer' : 'default' }} // Make stars clickable if onRatingChange is provided
        />
      ))}
    </div>
  );
};

export default StarRating;
