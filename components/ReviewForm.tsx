import React, { useState } from 'react';
import { Review } from '../types';
import { StarIcon, StarIconOutline } from './icons/SpecIcons';

interface ReviewFormProps {
    onSubmit: (review: Omit<Review, 'id' | 'date'>) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (rating > 0 && name && title && comment) {
            onSubmit({ author: name, rating, title, comment });
            setIsOpen(false);
            // Reset form
            setRating(0);
            setName('');
            setTitle('');
            setComment('');
        } else {
            alert('Please fill out all fields and select a rating.');
        }
    };

    if (!isOpen) {
        return (
            <div className="text-center my-6">
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-brand-purple text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition-all"
                >
                    Write a review
                </button>
            </div>
        );
    }
    
    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-brand-light-dark rounded-lg shadow-2xl p-8 w-full max-w-2xl relative">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h3 className="text-2xl font-bold text-white mb-6">Write a Review</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Your Rating</label>
                        <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map(star => (
                                <button
                                    key={star}
                                    type="button"
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    onClick={() => setRating(star)}
                                    className="text-yellow-400"
                                >
                                    {(hoverRating || rating) >= star ? (
                                        <StarIcon className="h-7 w-7" />
                                    ) : (
                                        <StarIconOutline className="h-7 w-7" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                     <div>
                        <label htmlFor="review-name" className="block text-sm font-medium text-gray-300">Your Name</label>
                        <input type="text" id="review-name" value={name} onChange={e => setName(e.target.value)} required className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple" />
                    </div>
                     <div>
                        <label htmlFor="review-title" className="block text-sm font-medium text-gray-300">Review Title</label>
                        <input type="text" id="review-title" value={title} onChange={e => setTitle(e.target.value)} required className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple" />
                    </div>
                     <div>
                        <label htmlFor="review-comment" className="block text-sm font-medium text-gray-300">Your Review</label>
                        <textarea id="review-comment" rows={4} value={comment} onChange={e => setComment(e.target.value)} required className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple"></textarea>
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button type="submit" className="bg-brand-purple text-white font-bold py-2 px-6 rounded-md hover:bg-opacity-80 transition-all">
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;
