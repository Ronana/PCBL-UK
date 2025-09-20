
import React from 'react';
import StaticPageLayout from '../components/StaticPageLayout';

const ContactUsPage: React.FC = () => {
    return (
        <StaticPageLayout title="Contact Us">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
                    <p className="text-gray-400 mb-8">
                        Have a question about our systems, your order, or just want to chat about PCs? We're here to help. Fill out the form or use the contact details below.
                    </p>
                    <div className="space-y-4 text-gray-300">
                        <p><strong>Email:</strong> support@pcbl.uk</p>
                        <p><strong>Phone:</strong> 01234 567 890</p>
                        <p><strong>Address:</strong> PCBL Tech UK Ltd, Office 1256, 3 Fitzroy Place, 1/1, Sauchiehall Street, Finnieston, Glasgow Central, G3 7RH, UK</p>
                    </div>
                </div>
                <div>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                            <textarea id="message" name="message" rows={4} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-brand-purple text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-80 transition-all duration-300">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </StaticPageLayout>
    );
};

export default ContactUsPage;
