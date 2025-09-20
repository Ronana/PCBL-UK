import React from 'react';
import { StarIcon, StarIconOutline } from './icons/SpecIcons';

interface RatingStarsProps {
    rating: number;
    className?: string;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, className }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className={`flex items-center ${className}`}>
            {[...Array(fullStars)].map((_, i) => (
                <StarIcon key={`full-${i}`} className="h-5 w-5 text-yellow-400" />
            ))}
            {/* Note: A proper half-star icon would be better, but this is a simple implementation */}
            {[...Array(emptyStars)].map((_, i) => (
                <StarIconOutline key={`empty-${i}`} className="h-5 w-5 text-yellow-400" />
            ))}
        </div>
    );
};

export default RatingStars;
