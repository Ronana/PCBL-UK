
import React from 'react';
import { BasketItem, View } from '../types';

interface BasketPageProps {
    items: BasketItem[];
    onUpdateQuantity: (itemId: string, newQuantity: number) => void;
    onRemoveItem: (itemId: string) => void;
    navigateTo: (view: View) => void;
}

const BasketPage: React.FC<BasketPageProps> = ({ items, onUpdateQuantity, onRemoveItem, navigateTo }) => {

    const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
    const shippingCost = items.length > 0 ? 9.00 : 0; // Example fixed shipping
    const total = subtotal + shippingCost;

    if (items.length === 0) {
        return (
            <div className="max-w-4xl mx-auto py-24 px-4 text-center">
                <h1 className="text-4xl font-extrabold text-white">Your Basket is Empty</h1>
                <p className="mt-4 text-lg text-gray-400">Looks like you haven't added any custom builds yet.</p>
                <button
                    onClick={() => navigateTo('selectBase')}
                    className="mt-8 bg-brand-purple text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition-all"
                >
                    Start Configuring a PC
                </button>
            </div>
        );
    }

    return (
        <div className="bg-brand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl font-extrabold text-white tracking-tight mb-8">Your Basket</h1>
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
                    <section className="lg:col-span-7">
                        <h2 className="sr-only">Items in your shopping basket</h2>
                        <ul role="list" className="border-t border-b border-gray-700 divide-y divide-gray-700">
                            {items.map((item) => (
                                <li key={item.id} className="flex py-6">
                                    <div className="flex-shrink-0">
                                        <img src={item.baseSystem.imageUrl} alt={item.baseSystem.name} className="w-24 h-24 rounded-md object-cover"/>
                                    </div>
                                    <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                                        <div>
                                            <div className="flex justify-between">
                                                <h3 className="text-lg font-bold text-white">{item.baseSystem.name}</h3>
                                                <p className="ml-4 text-lg font-bold text-white">£{(item.unitPrice * item.quantity).toFixed(2)}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-400">
                                                {item.selectedComponents.cpu?.name} | {item.selectedComponents.gpu?.name}
                                            </p>
                                        </div>
                                        <div className="mt-4 flex-1 flex items-end justify-between">
                                            <div>
                                                <label htmlFor={`quantity-${item.id}`} className="sr-only">Quantity</label>
                                                <input
                                                    id={`quantity-${item.id}`}
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value, 10))}
                                                    className="w-20 bg-brand-dark border border-gray-600 rounded-md py-1.5 px-2 text-center text-white focus:outline-none focus:ring-2 focus:ring-brand-purple"
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <button onClick={() => onRemoveItem(item.id)} type="button" className="text-sm font-medium text-red-500 hover:text-red-400">
                                                    <span>Remove</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="mt-16 lg:mt-0 lg:col-span-5 bg-brand-light-dark rounded-lg p-8 h-fit sticky top-24">
                        <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-4">Order Summary</h2>
                        <dl className="mt-6 space-y-4">
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
                                onClick={() => navigateTo('checkout')}
                                className="w-full bg-brand-purple border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-opacity-80 focus:outline-none"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default BasketPage;