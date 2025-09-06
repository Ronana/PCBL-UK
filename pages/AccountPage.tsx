import React, { useState } from 'react';
import { Order, View, SavedBuild, User } from '../types';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';


interface AccountPageProps {
    user: User;
    orders: Order[];
    navigateTo: (view: View) => void;
    savedBuilds: SavedBuild[];
    onLoadBuild: (build: SavedBuild) => void;
    onDeleteBuild: (buildId: string) => void;
    onRenameBuild: (buildId: string, newName: string) => void;
}

type AccountSection = 'dashboard' | 'orderHistory' | 'profileDetails' | 'addressBook' | 'referrals' | 'myBuilds';

const mockAddresses = [
    {
        id: '1',
        fullName: 'John Doe',
        address1: '123 Tech Street',
        city: 'London',
        postcode: 'E1 6AN',
        isDefault: true,
    },
    {
        id: '2',
        fullName: 'John Doe',
        address1: '456 Innovation Avenue',
        address2: 'Suite 101',
        city: 'Manchester',
        postcode: 'M1 1AD',
        isDefault: false,
    },
];

const AccountPage: React.FC<AccountPageProps> = ({ user, orders, navigateTo, savedBuilds, onLoadBuild, onDeleteBuild, onRenameBuild }) => {
    const [activeSection, setActiveSection] = useState<AccountSection>('dashboard');

    const handleLogout = async () => {
        try {
            await signOut(auth);
            // The onAuthStateChanged listener in App.tsx will handle navigation
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    const DashboardContent = () => (
        <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Dashboard</h2>
            <p className="text-gray-300">Welcome back, {user.email}. From here you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
            {orders.length > 0 && (
                <div className="mt-6 bg-brand-dark p-4 rounded-lg border border-gray-700">
                    <h3 className="font-semibold text-white">Most Recent Order</h3>
                    <p className="text-sm text-gray-400">Order #{orders[0].id} - Placed on {orders[0].date}</p>
                    <button onClick={() => setActiveSection('orderHistory')} className="text-sm text-brand-teal hover:underline mt-2">View Order Details</button>
                </div>
            )}
        </div>
    );

    const OrderHistoryContent = () => (
         <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Order History</h2>
            {orders.length > 0 ? (
                <div className="space-y-6">
                    {orders.map(order => (
                        <div key={order.id} className="bg-brand-dark p-4 rounded-lg border border-gray-700">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-start">
                                <div>
                                    <p className="font-semibold text-white">Order ID: {order.id}</p>
                                    <p className="text-sm text-gray-400">Date: {order.date}</p>
                                </div>
                                <p className="font-bold text-lg text-white mt-2 sm:mt-0">£{order.total.toFixed(2)}</p>
                            </div>
                            <div className="mt-4 border-t border-gray-700 pt-4">
                                <h4 className="text-sm font-semibold text-gray-300 mb-2">Items:</h4>
                                <ul className="space-y-2">
                                    {order.items.map(item => (
                                        <li key={item.id} className="flex items-center text-sm">
                                            <img src={item.baseSystem.imageUrl} alt={item.baseSystem.name} className="w-10 h-10 object-cover rounded-md mr-3" />
                                            <span className="text-gray-300">{item.baseSystem.name} (x{item.quantity})</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                 <div className="text-center text-gray-400 py-12">
                    <p>You have not placed any orders yet.</p>
                </div>
            )}
        </div>
    );

    const ProfileDetailsContent = () => (
         <div>
             <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Profile Details</h2>
             <form className="space-y-4">
                 <div>
                    <label className="text-sm font-medium text-gray-400">Name</label>
                    <input type="text" defaultValue={user.displayName || 'N/A'} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple" />
                 </div>
                 <div>
                    <label className="text-sm font-medium text-gray-400">Email Address</label>
                    <input type="email" defaultValue={user.email || ''} readOnly className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-400 cursor-not-allowed" />
                 </div>
                <button type="button" className="mt-4 border border-brand-purple text-brand-purple font-bold py-2 px-4 rounded-md hover:bg-brand-purple hover:text-white transition-all">
                    Save Changes
                </button>
             </form>
        </div>
    );

    const AddressBookContent = () => (
         <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Address Book</h2>
             <div className="space-y-6">
                 {mockAddresses.map(address => (
                     <div key={address.id} className="bg-brand-dark p-4 rounded-lg border border-gray-700">
                        <div className="flex justify-between items-start">
                             <div>
                                <p className="font-semibold text-white">{address.fullName} {address.isDefault && <span className="text-xs bg-brand-teal text-white px-2 py-1 rounded-full ml-2">Default</span>}</p>
                                <address className="text-sm text-gray-400 not-italic">
                                    {address.address1}<br />
                                    {address.address2 && <>{address.address2}<br /></>}
                                    {address.city}, {address.postcode}
                                </address>
                            </div>
                            <button className="text-sm text-brand-teal hover:underline">Edit</button>
                        </div>
                    </div>
                 ))}
             </div>
             <button className="mt-6 border border-brand-purple text-brand-purple font-bold py-2 px-4 rounded-md hover:bg-brand-purple hover:text-white transition-all">
                Add New Address
            </button>
        </div>
    );
    
    const ReferralContent = () => {
        const referralLink = 'https://pcbl.uk/refer/john-doe-123';
        
        const copyToClipboard = () => {
            navigator.clipboard.writeText(referralLink).then(() => {
                alert('Referral link copied to clipboard!');
            }, (err) => {
                console.error('Could not copy text: ', err);
            });
        };
    
        // Social Icons
        const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
        const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>;
        const WhatsAppIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
        const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
    
        return (
            <div>
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Refer a Friend</h2>
                <div className="bg-brand-dark p-6 rounded-lg border border-brand-purple/50 text-center">
                    <h3 className="text-xl font-bold text-white">Give 10%, Get 500 Points!</h3>
                    <p className="text-gray-300 mt-2 max-w-lg mx-auto">Share your unique referral link with your friends. They'll get a <span className="font-bold text-brand-teal">10% discount</span> on their first PC, and you'll get <span className="font-bold text-brand-teal">500 PCBL Points</span> once they complete their purchase.</p>
                </div>
    
                <div className="my-8">
                    <label htmlFor="referral-link" className="block text-sm font-medium text-gray-300 mb-2">Your Unique Referral Link</label>
                    <div className="flex">
                        <input id="referral-link" type="text" readOnly value={referralLink} className="flex-grow bg-brand-dark border border-gray-600 rounded-l-md py-2 px-3 text-gray-400 focus:outline-none" />
                        <button onClick={copyToClipboard} className="bg-brand-purple text-white font-bold py-2 px-4 rounded-r-md hover:bg-opacity-80 transition-colors">Copy</button>
                    </div>
                </div>
    
                <div className="my-8 text-center">
                     <p className="text-sm text-gray-400 mb-4">Or share directly on:</p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-[#1877F2] text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"><FacebookIcon /></button>
                        <button className="bg-[#1DA1F2] text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"><TwitterIcon /></button>
                        <button className="bg-[#25D366] text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"><WhatsAppIcon /></button>
                        <button className="bg-gray-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"><MailIcon /></button>
                    </div>
                </div>
    
                <div className="bg-brand-dark p-6 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-4">Your Referral Stats</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-3xl font-bold text-white">3</p>
                            <p className="text-sm text-gray-400">Friends Referred</p>
                        </div>
                         <div>
                            <p className="text-3xl font-bold text-white">1</p>
                            <p className="text-sm text-gray-400">Successful Referrals</p>
                        </div>
                         <div>
                            <p className="text-3xl font-bold text-white">500</p>
                            <p className="text-sm text-gray-400">Points Earned</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const MyBuildsContent = () => {
        const [renamingBuildId, setRenamingBuildId] = useState<string | null>(null);
        const [newBuildName, setNewBuildName] = useState('');
    
        const handleRenameClick = (build: SavedBuild) => {
            setRenamingBuildId(build.id);
            setNewBuildName(build.name);
        };
    
        const handleRenameSubmit = (e: React.FormEvent, buildId: string) => {
            e.preventDefault();
            if (newBuildName.trim()) {
                onRenameBuild(buildId, newBuildName.trim());
                setRenamingBuildId(null);
            }
        };
        
        const handleShareClick = (build: SavedBuild) => {
            const shareUrl = `${window.location.origin}/builds/${build.id}`;
            navigator.clipboard.writeText(shareUrl).then(() => {
                 alert(`Share link for ${build.name} copied to clipboard!\n(This is a simulated link)`);
            });
        };
    
        return (
            <div>
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4">My Saved Builds</h2>
                {savedBuilds.length > 0 ? (
                    <div className="space-y-6">
                        {savedBuilds.map(build => (
                            <div key={build.id} className="bg-brand-dark p-4 rounded-lg border border-gray-700">
                                 {renamingBuildId === build.id ? (
                                    <form onSubmit={(e) => handleRenameSubmit(e, build.id)} className="flex items-center space-x-2 mb-4">
                                        <input
                                            type="text"
                                            value={newBuildName}
                                            onChange={(e) => setNewBuildName(e.target.value)}
                                            className="flex-grow bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple"
                                            autoFocus
                                            onBlur={() => setRenamingBuildId(null)}
                                        />
                                        <button type="submit" className="bg-brand-purple text-white px-3 py-2 rounded-md text-sm">Save</button>
                                    </form>
                                ) : (
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-semibold text-white">{build.name}</p>
                                            <p className="text-sm text-gray-400">Saved on: {new Date(build.createdAt).toLocaleDateString('en-GB')}</p>
                                            <p className="text-sm text-gray-400">
                                                {build.selectedComponents.cpu?.name} | {build.selectedComponents.gpu?.name}
                                            </p>
                                        </div>
                                        <p className="font-bold text-lg text-white mt-2 sm:mt-0">£{build.totalPrice.toFixed(2)}</p>
                                    </div>
                                )}
                               
                                <div className="mt-4 border-t border-gray-700 pt-4 flex items-center justify-end space-x-2">
                                    <button onClick={() => handleRenameClick(build)} className="text-sm text-gray-400 hover:text-white px-3 py-1 rounded-md">Rename</button>
                                    <button onClick={() => handleShareClick(build)} className="text-sm text-gray-400 hover:text-white px-3 py-1 rounded-md">Share</button>
                                    <button onClick={() => onDeleteBuild(build.id)} className="text-sm text-red-500 hover:text-red-400 px-3 py-1 rounded-md">Delete</button>
                                    <button 
                                        onClick={() => onLoadBuild(build)}
                                        className="bg-brand-teal text-white font-bold py-2 px-4 rounded-md hover:bg-teal-500 transition-all text-sm"
                                    >
                                        Load Build
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-400 py-12">
                        <p>You have not saved any builds yet.</p>
                        <p className="mt-2">Go to the configurator to create and save your first build!</p>
                    </div>
                )}
            </div>
        );
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'orderHistory': return <OrderHistoryContent />;
            case 'profileDetails': return <ProfileDetailsContent />;
            case 'addressBook': return <AddressBookContent />;
            case 'referrals': return <ReferralContent />;
            case 'myBuilds': return <MyBuildsContent />;
            case 'dashboard':
            default:
                return <DashboardContent />;
        }
    };
    
    const NavLink: React.FC<{ section: AccountSection; children: React.ReactNode }> = ({ section, children }) => {
        const isActive = activeSection === section;
        const classes = `block w-full text-left px-4 py-2 rounded-md transition-colors ${
            isActive
                ? 'bg-brand-purple/20 text-white font-semibold'
                : 'text-gray-300 hover:bg-brand-purple/20'
        }`;
        return (
            <button onClick={() => setActiveSection(section)} className={classes}>
                {children}
            </button>
        );
    };

    return (
        <div className="bg-brand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                 <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-white tracking-tight">My Account</h1>
                    <p className="mt-4 text-xl text-gray-400">Welcome back! Manage your orders and personal details below.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Navigation */}
                    <div className="lg:col-span-1">
                        <div className="bg-brand-light-dark p-6 rounded-lg shadow-lg">
                            <nav>
                                <ul className="space-y-1">
                                    <li><NavLink section="dashboard">Dashboard</NavLink></li>
                                    <li><NavLink section="orderHistory">Order History</NavLink></li>
                                    <li><NavLink section="profileDetails">Profile Details</NavLink></li>
                                    <li><NavLink section="addressBook">Address Book</NavLink></li>
                                    <li><NavLink section="myBuilds">My Builds</NavLink></li>
                                    <li>
                                        <button 
                                            onClick={() => navigateTo('pcblPoints')}
                                            className="block w-full text-left px-4 py-2 rounded-md transition-colors text-gray-300 hover:bg-brand-purple/20"
                                        >
                                            PCBL Points
                                        </button>
                                    </li>
                                    <li><NavLink section="referrals">Refer a Friend</NavLink></li>
                                    <li>
                                        <button 
                                            onClick={handleLogout}
                                            className="w-full text-left mt-4 px-4 py-2 text-red-400 hover:bg-red-500/20 rounded-md"
                                        >
                                            Sign Out
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-brand-light-dark p-8 rounded-lg shadow-lg min-h-[400px]">
                           {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;