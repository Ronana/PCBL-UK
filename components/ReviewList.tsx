import React from 'react';
import { Review } from '../types';
import RatingStars from './RatingStars';

interface ReviewListProps {
    reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
    return (
        <div className="mt-10 border-t border-gray-700 pt-10">
            <h4 className="text-xl font-bold text-white mb-6">Showing {reviews.length} reviews</h4>
            <div className="space-y-8">
                {reviews.map(review => (
                    <div key={review.id} className="flex flex-col sm:flex-row">
                        <div className="sm:w-1/4 mb-4 sm:mb-0">
                            <h5 className="font-semibold text-white">{review.author}</h5>
                            <p className="text-xs text-gray-400">{review.date}</p>
                        </div>
                        <div className="sm:w-3/4">
                            <div className="flex items-center mb-2">
                                <RatingStars rating={review.rating} />
                                <h6 className="ml-3 font-semibold text-white">{review.title}</h6>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{review.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewList;
