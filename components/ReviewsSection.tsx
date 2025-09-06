import React, { useMemo } from 'react';
import { Review } from '../types';
import RatingStars from './RatingStars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

interface ReviewsSectionProps {
    reviews: Review[];
    onAddReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews, onAddReview }) => {
    
    const averageRating = useMemo(() => {
        if (reviews.length === 0) return 0;
        const total = reviews.reduce((acc, review) => acc + review.rating, 0);
        return total / reviews.length;
    }, [reviews]);

    const ratingDistribution = useMemo(() => {
        const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        reviews.forEach(review => {
            counts[review.rating as keyof typeof counts]++;
        });
        return Object.entries(counts).map(([star, count]) => ({
            star: parseInt(star),
            count: count,
            percentage: reviews.length > 0 ? (count / reviews.length) * 100 : 0,
        })).reverse();
    }, [reviews]);

    if (reviews.length === 0) {
        return (
            <div>
                 <h3 className="text-2xl font-bold text-white mb-4">Customer Reviews</h3>
                <div className="text-center py-12 bg-brand-dark rounded-lg">
                    <p className="text-gray-400">There are no reviews for this product yet.</p>
                    <p className="text-gray-500 text-sm mt-2">Be the first to share your thoughts!</p>
                </div>
                <div className="mt-8">
                    <ReviewForm onSubmit={onAddReview} />
                </div>
            </div>
        );
    }

    return (
        <div>
            <h3 className="text-2xl font-bold text-white mb-6">Customer Reviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="flex flex-col items-center justify-center bg-brand-dark p-6 rounded-lg">
                    <span className="text-5xl font-black text-white">{averageRating.toFixed(1)}</span>
                    <RatingStars rating={averageRating} />
                    <span className="text-sm text-gray-400 mt-2">Based on {reviews.length} reviews</span>
                </div>
                <div className="md:col-span-2">
                    <div className="space-y-2">
                        {ratingDistribution.map(({ star, percentage }) => (
                            <div key={star} className="flex items-center space-x-2">
                                <span className="text-sm text-gray-400 w-12">{star} star{star > 1 ? 's' : ''}</span>
                                <div className="w-full bg-gray-700 rounded-full h-2.5">
                                    <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                                </div>
                                <span className="text-sm text-gray-400 w-10 text-right">{percentage.toFixed(0)}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <ReviewForm onSubmit={onAddReview} />
            <ReviewList reviews={reviews} />
        </div>
    );
};

export default ReviewsSection;
