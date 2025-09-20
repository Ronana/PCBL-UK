import React from 'react';
import { User, View } from '../types';

interface PcblPointsPageProps {
    user: User | null;
    navigateToConfigurator: (filter?: string | null) => void;
}

const PcblPointsPage: React.FC<PcblPointsPageProps> = ({ user, navigateToConfigurator }) => {
    // Icons for the points section
    const GiftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>;
    const PoundIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>;
    const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 006-6v-1a6 6 0 00-9-5.197" /></svg>;

    const earningMethods = [
        { icon: <GiftIcon />, title: "Create an Account", points: "151 Points", description: "Get started with a welcome bonus just for signing up." },
        { icon: <PoundIcon />, title: "Make a Purchase", points: "1 Point per £1", description: "Earn points for every pound you spend on our products." },
        { icon: <StarIcon />, title: "Leave a Review", points: "50 Points", description: "Share your thoughts on a product and earn points." },
        { icon: <UsersIcon />, title: "Refer a Friend", points: "500 Points", description: "Receive a huge bonus when your friend makes a purchase." },
    ];

    return (
        <div className="bg-brand-dark text-white">
            {/* Hero Section */}
            <div className="relative pt-32 pb-24 flex content-center items-center justify-center bg-brand-light-dark">
                <div className="container relative mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase">
                        PCBL <span className="text-brand-purple">Points</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                        The loyalty programme from PCBL. Earn points every time you shop with us and redeem them for exclusive discounts on your future orders.
                    </p>
                </div>
            </div>

            {/* User's Points Balance */}
            {user && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
                    <div className="max-w-2xl mx-auto bg-brand-dark border border-brand-purple rounded-lg shadow-2xl p-8 text-center">
                        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Your Current Balance</h2>
                        <p className="mt-2 text-6xl font-black text-brand-teal">
                            {user.user_metadata.pcbl_points || 0}
                        </p>
                        <p className="text-gray-300 mt-1">PCBL Points</p>
                    </div>
                </div>
            )}


            {/* Main Content */}
            <section className="pt-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* How to Earn */}
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                            How to <span className="text-brand-purple">Earn</span> PCBL Points
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                           Earning points is simple. Here are the ways you can build your balance:
                        </p>
                    </div>
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {earningMethods.map((method, index) => (
                            <div key={index} className="bg-brand-light-dark p-8 rounded-lg shadow-lg text-center flex flex-col items-center">
                                {method.icon}
                                <h3 className="mt-4 text-xl font-bold text-white">{method.title}</h3>
                                <p className="mt-2 text-gray-400 flex-grow">{method.description}</p>
                                <div className="mt-4 bg-brand-dark rounded-full px-4 py-2">
                                    <p className="font-bold text-lg text-brand-teal whitespace-nowrap">{method.points}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                     {/* How to Redeem */}
                    <div className="mt-24 text-center">
                         <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                            How to <span className="text-brand-purple">Redeem</span> Your Points
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                           Redeeming your points is even easier. Convert your points to cash discounts at checkout.
                        </p>
                        <div className="mt-12 max-w-md mx-auto bg-brand-light-dark p-8 rounded-lg shadow-lg">
                             <h3 className="text-xl font-bold text-white mb-4">Our Conversion Rate</h3>
                             <div className="flex items-center justify-center space-x-4">
                                <span className="text-5xl font-bold text-brand-teal">100</span>
                                <span className="text-3xl text-gray-500">POINTS</span>
                                <span className="text-5xl text-gray-500">=</span>
                                <span className="text-5xl font-bold text-brand-teal">£1</span>
                             </div>
                             <p className="text-sm text-gray-500 mt-4">It's that simple!</p>
                        </div>
                    </div>
                </div>
            </section>

             {/* CTA Section */}
            <div className="bg-brand-light-dark">
                <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Ready to Start Earning?</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-300">
                        Browse our systems and start building your points balance with your first order.
                    </p>
                    <button
                        onClick={() => navigateToConfigurator(null)}
                        className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-purple hover:bg-opacity-80 sm:w-auto transition-all"
                    >
                        Start Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PcblPointsPage;