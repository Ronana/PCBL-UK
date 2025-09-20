import React, { useState } from 'react';
import StaticPageLayout from '../components/StaticPageLayout';

const faqData = [
    {
        question: "How long will it take to build and deliver my PC?",
        answer: "Our standard build and testing time is approximately 7 to 9 working days. Once your PC is dispatched, it's sent via a next-working-day insured courier service for UK mainland addresses. You'll receive a tracking number as soon as it leaves our workshop."
    },
    {
        question: "What warranty comes with my PC?",
        answer: "All our PCs come with a comprehensive 3-year standard warranty. This includes 6 months of collect & return, 1 year of parts cover, and 3 years of labour cover. We also provide lifetime UK-based technical support. You can read the full details on our Warranty Information page."
    },
    {
        question: "Do you install the operating system and drivers?",
        answer: "Yes, absolutely. Every PC comes with Windows 11 fully installed, activated, and updated with the latest drivers for all your components. We also install a clean version of Windows with no unnecessary bloatware, so your system is ready for gaming and productivity right out of the box."
    },
    {
        question: "Can I change a component in a pre-configured system?",
        answer: "Of course! Every pre-configured system on our site is a great starting point. Simply click the \"Customize\" button on the product page to enter our full configurator, where you can change any component to match your exact needs and budget."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit and debit cards, including Visa, Mastercard, and American Express. We also offer financing options through our partners to help you spread the cost of your new PC."
    },
    {
        question: "What if I need help after my PC arrives?",
        answer: "We're here for you! Our UK-based support team is available to help with any questions or technical issues you might have. You can contact us via email or phone for the lifetime of your PC."
    }
];

const FaqItem: React.FC<{
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-700">
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full py-5 text-left text-lg font-medium text-white"
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="pb-5 pr-4 text-gray-400">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

const FaqPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleItemClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <StaticPageLayout title="Frequently Asked Questions">
            <div className="divide-y divide-gray-700">
                {faqData.map((item, index) => (
                    <FaqItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openIndex === index}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        </StaticPageLayout>
    );
};

export default FaqPage;