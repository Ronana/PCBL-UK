
import React from 'react';
import { Order, View } from '../types';

interface CheckoutSuccessPageProps {
    order: Order;
    navigateTo: (view: View) => void;
}

const CheckoutSuccessPage: React.FC<CheckoutSuccessPageProps> = ({ order, navigateTo }) => {
    return (
        <div className="bg-brand-dark">
            <div className="max-w-4xl mx-auto py-24 px-4 text-center">
                <div className="bg-brand-light-dark p-10 rounded-lg shadow-2xl">
                    <svg className="mx-auto h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className="mt-4 text-4xl font-extrabold text-white">Thank you for your order!</h1>
                    <p className="mt-4 text-lg text-gray-400">
                        Your order has been placed successfully. A confirmation email has been sent to <span className="font-semibold text-brand-teal">{order.shipping_address.email}</span>.
                    </p>
                    <div className="mt-8 text-left border-t border-gray-700 pt-8">
                         <h2 className="text-xl font-bold text-white mb-4">Order Summary - {order.id}</h2>
                         <div className="space-y-4">
                             {order.items.map(item => (
                                <div key={item.id} className="flex justify-between items-center text-gray-300">
                                    <span>{item.baseSystem.name} (x{item.quantity})</span>
                                    <span>£{(item.unitPrice * item.quantity).toFixed(2)}</span>
                                </div>
                             ))}
                             <div className="flex justify-between items-center font-bold text-white text-lg border-t border-gray-700 pt-4 mt-4">
                                 <span>Total Paid</span>
                                 <span>£{order.total.toFixed(2)}</span>
                             </div>
                         </div>
                    </div>
                    <button
                        onClick={() => navigateTo('home')}
                        className="mt-10 bg-brand-purple text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition-all"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSuccessPage;