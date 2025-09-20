import React, { useState, useEffect } from 'react';
import { Order, View, SavedBuild, User, Address } from '../types';
import { supabase } from '../supabaseClient';
import { FacebookIcon, TwitterIcon, WhatsAppIcon, MailIcon } from '../components/icons/ActionIcons';

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


const AccountPage: React.FC<AccountPageProps> = ({ user, orders, navigateTo, savedBuilds, onLoadBuild, onDeleteBuild, onRenameBuild }) => {
    const [activeSection, setActiveSection] = useState<AccountSection>('dashboard');

    const handleLogout = async () => {
        try {
            await supabase.auth.signOut();
            // The onAuthStateChange listener in App.tsx will handle navigation
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    const DashboardContent = () => (
        <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Dashboard</h2>
            <p className="text-gray-300">Welcome back, {user.user_metadata.full_name || user.email}. From here you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
            {orders.length > 0 && (
                <div className="mt-6 bg-brand-dark p-4 rounded-lg border border-gray-700">
                    <h3 className="font-semibold text-white">Most Recent Order</h3>
                    <p className="text-sm text-gray-400">Order #{orders[0].id.substring(0, 8)}... - Placed on {new Date(orders[0].created_at).toLocaleDateString('en-GB')}</p>
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
                                    <p className="text-sm text-gray-400">Date: {new Date(order.created_at).toLocaleDateString('en-GB')}</p>
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

    const ProfileDetailsContent = () => {
        const [name, setName] = useState(user.user_metadata.full_name || '');
        const [isLoading, setIsLoading] = useState(false);

        const handleProfileUpdate = async (e: React.FormEvent) => {
            e.preventDefault();
            setIsLoading(true);
            const { error } = await supabase.auth.updateUser({
                data: { full_name: name }
            });
            if (error) {
                alert(`Error updating profile: ${error.message}`);
            } else {
                alert('Profile updated successfully!');
            }
            setIsLoading(false);
        };

        return (
             <div>
                 <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Profile Details</h2>
                 <form className="space-y-4" onSubmit={handleProfileUpdate}>
                     <div>
                        <label className="text-sm font-medium text-gray-400">Name</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple" />
                     </div>
                     <div>
                        <label className="text-sm font-medium text-gray-400">Email Address</label>
                        <input type="email" defaultValue={user.email || ''} readOnly className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-400 cursor-not-allowed" />
                     </div>
                    <button type="submit" disabled={isLoading} className="mt-4 border border-brand-purple text-brand-purple font-bold py-2 px-4 rounded-md hover:bg-brand-purple hover:text-white transition-all disabled:opacity-50">
                        {isLoading ? 'Saving...' : 'Save Changes'}
                    </button>
                 </form>
            </div>
        );
    }
    
    const AddressBookContent = () => {
        const [addresses, setAddresses] = useState<Address[]>([]);
        const [isLoading, setIsLoading] = useState(true);
        const [showForm, setShowForm] = useState(false);
        const [editingAddress, setEditingAddress] = useState<Address | null>(null);

        useEffect(() => {
            const fetchAddresses = async () => {
                setIsLoading(true);
                const { data, error } = await supabase.from('addresses').select('*').eq('user_id', user.id);
                if (error) {
                    console.error('Error fetching addresses:', error);
                } else {
                    setAddresses(data);
                }
                setIsLoading(false);
            };
            fetchAddresses();
        }, []);

        const handleSave = (newAddress: Address) => {
            if (editingAddress) {
                setAddresses(addresses.map(a => a.id === newAddress.id ? newAddress : a));
            } else {
                setAddresses([...addresses, newAddress]);
            }
            setShowForm(false);
            setEditingAddress(null);
        };
        
        const handleDelete = async (addressId: string) => {
            if (window.confirm("Are you sure you want to delete this address?")) {
                const { error } = await supabase.from('addresses').delete().match({ id: addressId });
                if (error) {
                    alert(`Error: ${error.message}`);
                } else {
                    setAddresses(addresses.filter(a => a.id !== addressId));
                }
            }
        };

        const handleEdit = (address: Address) => {
            setEditingAddress(address);
            setShowForm(true);
        };
        
        if (showForm) {
            return <AddressForm user={user} existingAddress={editingAddress} onSave={handleSave} onCancel={() => {setShowForm(false); setEditingAddress(null);}} />;
        }

        return (
             <div>
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4 flex justify-between items-center">
                    <span>Address Book</span>
                    <button onClick={() => setShowForm(true)} className="border border-brand-purple text-brand-purple font-bold py-2 px-4 rounded-md hover:bg-brand-purple hover:text-white transition-all text-sm">
                        Add New Address
                    </button>
                </h2>
                 {isLoading ? <p>Loading addresses...</p> : (
                     <div className="space-y-6">
                         {addresses.map(address => (
                             <div key={address.id} className="bg-brand-dark p-4 rounded-lg border border-gray-700">
                                <div className="flex justify-between items-start">
                                     <div>
                                        <p className="font-semibold text-white">{address.full_name} {address.is_default && <span className="text-xs bg-brand-teal text-white px-2 py-1 rounded-full ml-2">Default</span>}</p>
                                        <address className="text-sm text-gray-400 not-italic">
                                            {address.address1}<br />
                                            {address.address2 && <>{address.address2}<br /></>}
                                            {address.city}, {address.postcode}
                                        </address>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button onClick={() => handleEdit(address)} className="text-sm text-brand-teal hover:underline">Edit</button>
                                        <button onClick={() => handleDelete(address.id)} className="text-sm text-red-500 hover:underline">Delete</button>
                                    </div>
                                </div>
                            </div>
                         ))}
                         {addresses.length === 0 && <p className="text-center text-gray-400 py-8">You have no saved addresses.</p>}
                     </div>
                 )}
            </div>
        );
    };
    
    const AddressForm: React.FC<{user: User, existingAddress: Address | null, onSave: (newAddress: Address) => void, onCancel: () => void}> = ({ user, existingAddress, onSave, onCancel }) => {
        const [formData, setFormData] = useState({
            full_name: existingAddress?.full_name || '',
            address1: existingAddress?.address1 || '',
            address2: existingAddress?.address2 || '',
            city: existingAddress?.city || '',
            postcode: existingAddress?.postcode || '',
            is_default: existingAddress?.is_default || false,
        });
        const [isLoading, setIsLoading] = useState(false);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value, type, checked } = e.target;
            setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
        };

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            setIsLoading(true);
            const addressData = { ...formData, user_id: user.id };

            let response;
            if (existingAddress) {
                response = await supabase.from('addresses').update(addressData).eq('id', existingAddress.id).select().single();
            } else {
                response = await supabase.from('addresses').insert(addressData).select().single();
            }

            if (response.error) {
                alert(`Error: ${response.error.message}`);
            } else {
                onSave(response.data as Address);
            }
            setIsLoading(false);
        };
        
        return (
            <div>
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4">{existingAddress ? 'Edit Address' : 'Add New Address'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                     <div>
                        <label className="text-sm font-medium text-gray-400">Full Name</label>
                        <input name="full_name" type="text" value={formData.full_name} onChange={handleChange} required className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white" />
                     </div>
                    <div>
                        <label className="text-sm font-medium text-gray-400">Address Line 1</label>
                        <input name="address1" type="text" value={formData.address1} onChange={handleChange} required className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white" />
                     </div>
                    <div>
                        <label className="text-sm font-medium text-gray-400">Address Line 2 (optional)</label>
                        <input name="address2" type="text" value={formData.address2} onChange={handleChange} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white" />
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-400">City</label>
                            <input name="city" type="text" value={formData.city} onChange={handleChange} required className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white" />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-400">Postcode</label>
                            <input name="postcode" type="text" value={formData.postcode} onChange={handleChange} required className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white" />
                        </div>
                    </div>
                     <div className="flex items-center">
                        <input name="is_default" type="checkbox" checked={formData.is_default} onChange={handleChange} className="h-4 w-4 rounded bg-brand-dark text-brand-purple focus:ring-brand-purple" />
                        <label className="ml-2 text-sm text-gray-300">Set as default address</label>
                    </div>
                    <div className="flex justify-end space-x-4 pt-4">
                        <button type="button" onClick={onCancel} className="bg-brand-dark text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700">Cancel</button>
                        <button type="submit" disabled={isLoading} className="bg-brand-purple text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-80 disabled:opacity-50">{isLoading ? 'Saving...' : 'Save Address'}</button>
                    </div>
                </form>
            </div>
        );
    };

    const ReferralContent = () => {
        const [copyButtonText, setCopyButtonText] = useState('Copy');
        const referralLink = `https://pcbl.uk/refer/${user.user_metadata.full_name?.toLowerCase().replace(/\s+/g, '-') || 'user'}-${user.id.slice(0, 6)}`;
    
        const copyToClipboard = () => {
            navigator.clipboard.writeText(referralLink).then(() => {
                setCopyButtonText('Copied!');
                setTimeout(() => setCopyButtonText('Copy'), 2000);
            }, (err) => {
                console.error('Could not copy text: ', err);
                alert('Failed to copy link.');
            });
        };
    
        const shareOnSocial = (platform: 'facebook' | 'twitter' | 'whatsapp' | 'email') => {
            const text = encodeURIComponent(`Get 10% off your first custom PC from PCBL UK! Use my referral link: ${referralLink}`);
            const subject = encodeURIComponent(`A gift from ${user.user_metadata.full_name}`);
            let url = '';
    
            switch (platform) {
                case 'facebook':
                    url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`;
                    break;
                case 'twitter':
                    url = `https://twitter.com/intent/tweet?text=${text}`;
                    break;
                case 'whatsapp':
                    url = `https://api.whatsapp.com/send?text=${text}`;
                    break;
                case 'email':
                    url = `mailto:?subject=${subject}&body=${text}`;
                    break;
            }
            window.open(url, '_blank', 'noopener,noreferrer');
        };
    
        return (
            <div>
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Refer a Friend</h2>
                <div className="bg-brand-dark p-6 rounded-lg border border-brand-purple/50 text-center">
                    <h3 className="text-2xl font-bold text-white">Give 10%, Get 500 Points!</h3>
                    <p className="text-gray-300 mt-2 max-w-lg mx-auto">Share your unique referral link with your friends. They'll get a <span className="font-bold text-brand-teal">10% discount</span> on their first PC, and you'll get <span className="font-bold text-brand-teal">500 PCBL Points</span> once they complete their purchase.</p>
                </div>
    
                <div className="my-8">
                    <label htmlFor="referral-link" className="block text-sm font-medium text-gray-300 mb-2">Your Unique Referral Link</label>
                    <div className="flex">
                        <input id="referral-link" type="text" readOnly value={referralLink} className="flex-grow bg-brand-dark border border-gray-600 rounded-l-md py-2 px-3 text-gray-400 focus:outline-none" />
                        <button onClick={copyToClipboard} className="bg-brand-purple text-white font-bold py-2 px-4 rounded-r-md hover:bg-opacity-80 transition-colors w-24">
                            {copyButtonText}
                        </button>
                    </div>
                </div>
    
                <div className="my-8 text-center">
                     <p className="text-sm text-gray-400 mb-4">Or share directly on:</p>
                    <div className="flex justify-center space-x-4">
                        <button onClick={() => shareOnSocial('facebook')} aria-label="Share on Facebook" className="bg-[#1877F2] text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"><FacebookIcon className="w-6 h-6"/></button>
                        <button onClick={() => shareOnSocial('twitter')} aria-label="Share on Twitter" className="bg-[#1DA1F2] text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"><TwitterIcon className="w-6 h-6" /></button>
                        <button onClick={() => shareOnSocial('whatsapp')} aria-label="Share on WhatsApp" className="bg-[#25D366] text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"><WhatsAppIcon className="w-6 h-6" /></button>
                        <button onClick={() => shareOnSocial('email')} aria-label="Share via Email" className="bg-gray-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"><MailIcon className="w-6 h-6" /></button>
                    </div>
                </div>
    
                <div className="bg-brand-dark p-6 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-4 text-left">Your Referral Stats</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-4xl font-bold text-white">{user.user_metadata.referrals_made || 0}</p>
                            <p className="text-sm text-gray-400">Friends Referred</p>
                        </div>
                         <div>
                            <p className="text-4xl font-bold text-white">{user.user_metadata.referrals_successful || 0}</p>
                            <p className="text-sm text-gray-400">Successful Referrals</p>
                        </div>
                         <div>
                            <p className="text-4xl font-bold text-white">{user.user_metadata.referral_points_earned || 0}</p>
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
                                            <p className="text-sm text-gray-400">Saved on: {new Date(build.created_at).toLocaleDateString('en-GB')}</p>
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