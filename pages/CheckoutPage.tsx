
import React, { useState } from 'react';
import { BasketItem, View } from '../types';

interface CheckoutPageProps {
    items: BasketItem[];
    onPlaceOrder: (shippingDetails: any) => void;
    navigateTo: (view: View) => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ items, onPlaceOrder, navigateTo }) => {
    const [shippingDetails, setShippingDetails] = useState({
        email: '',
        fullName: '',
        address1: '',
        address2: '',
        city: '',
        postcode: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setShippingDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple validation
        if (shippingDetails.email && shippingDetails.fullName && shippingDetails.address1 && shippingDetails.city && shippingDetails.postcode) {
             onPlaceOrder(shippingDetails);
        } else {
            alert('Please fill in all required shipping details.');
        }
    };

    const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
    const shippingCost = items.length > 0 ? 9.00 : 0;
    const total = subtotal + shippingCost;

    return (
        <div className="bg-brand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                 <div className="relative text-center mb-12">
                    <button onClick={() => navigateTo('basket')} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-brand-teal transition-colors flex items-center group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Basket
                    </button>
                    <h1 className="text-4xl font-extrabold text-white tracking-tight">Checkout</h1>
                </div>

                <form onSubmit={handleSubmit} className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
                    {/* Contact & Shipping Info */}
                    <div className="lg:col-span-7">
                        <div className="bg-brand-light-dark p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-4 mb-6">Shipping Information</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                                    <input type="email" name="email" id="email" required onChange={handleInputChange} value={shippingDetails.email} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple" />
                                </div>
                                 <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">Full Name</label>
                                    <input type="text" name="fullName" id="fullName" required onChange={handleInputChange} value={shippingDetails.fullName} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple" />
                                </div>
                                <div>
                                    <label htmlFor="address1" className="block text-sm font-medium text-gray-300">Address Line 1</label>
                                    <input type="text" name="address1" id="address1" required onChange={handleInputChange} value={shippingDetails.address1} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple" />
                                </div>
                                <div>
                                    <label htmlFor="address2" className="block text-sm font-medium text-gray-300">Address Line 2 (Optional)</label>
                                    <input type="text" name="address2" id="address2" onChange={handleInputChange} value={shippingDetails.address2} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-300">City</label>
                                        <input type="text" name="city" id="city" required onChange={handleInputChange} value={shippingDetails.city} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple" />
                                    </div>
                                    <div>
                                        <label htmlFor="postcode" className="block text-sm font-medium text-gray-300">Postcode</label>
                                        <input type="text" name="postcode" id="postcode" required onChange={handleInputChange} value={shippingDetails.postcode} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple" />
                                    </div>
                                </div>
                            </div>
                        </div>

                         <div className="bg-brand-light-dark p-8 rounded-lg shadow-lg mt-8">
                            <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-4 mb-6">Payment Details</h2>
                            <p className="text-center text-gray-400">Payment gateway simulation. Click 'Place Order' to complete.</p>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="mt-16 lg:mt-0 lg:col-span-5">
                        <div className="bg-brand-light-dark rounded-lg p-8 h-fit sticky top-24 shadow-lg">
                            <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-4">Order Summary</h2>
                            <ul role="list" className="divide-y divide-gray-700 my-6">
                                {items.map(item => (
                                    <li key={item.id} className="flex py-4">
                                        <img src={item.baseSystem.imageUrl} alt={item.baseSystem.name} className="h-16 w-16 flex-shrink-0 rounded-md object-cover" />
                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-white">
                                                    <h3>{item.baseSystem.name}</h3>
                                                    <p className="ml-4">£{(item.unitPrice * item.quantity).toFixed(2)}</p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-400">Qty: {item.quantity}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                             <dl className="space-y-4 border-t border-gray-700 pt-6">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-gray-400">Subtotal</dt>
                                    <dd className="text-sm font-medium text-white">£{subtotal.toFixed(2)}</dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-gray-400">Shipping</dt>
                                    <dd className="text-sm font-medium text-white">£{shippingCost.toFixed(2)}</dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                                    <dt className="text-base font-bold text-white">Order total</dt>
                                    <dd className="text-base font-bold text-white">£{total.toFixed(2)}</dd>
                                </div>
                            </dl>
                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="w-full bg-brand-purple border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-opacity-80 focus:outline-none"
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
