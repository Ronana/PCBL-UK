import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

interface SignInFormProps {
    onSubmit: (e: React.FormEvent) => void;
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    isLoading: boolean;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSubmit, email, setEmail, password, setPassword, isLoading }) => (
    <form className="space-y-6" onSubmit={onSubmit}>
        <div>
            <label htmlFor="email-signin" className="block text-sm font-medium text-gray-300">Email Address</label>
            <input type="email" id="email-signin" required value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple" />
        </div>
        <div>
            <label htmlFor="password-signin" className="block text-sm font-medium text-gray-300">Password</label>
            <input type="password" id="password-signin" required value={password} onChange={e => setPassword(e.target.value)} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple" />
        </div>
        <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-brand-purple hover:text-brand-teal">Forgot your password?</a>
        </div>
        <div>
            <button type="submit" disabled={isLoading} className="w-full bg-brand-purple text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-80 transition-all duration-300 disabled:bg-gray-500">
                {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
        </div>
    </form>
);

interface SignUpFormProps {
    onSubmit: (e: React.FormEvent) => void;
    name: string;
    setName: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    isLoading: boolean;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit, name, setName, email, setEmail, password, setPassword, isLoading }) => (
     <form className="space-y-6" onSubmit={onSubmit}>
        <div>
            <label htmlFor="name-signup" className="block text-sm font-medium text-gray-300">Full Name</label>
            <input type="text" id="name-signup" required value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple" />
        </div>
        <div>
            <label htmlFor="email-signup" className="block text-sm font-medium text-gray-300">Email Address</label>
            <input type="email" id="email-signup" required value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple" />
        </div>
        <div>
            <label htmlFor="password-signup" className="block text-sm font-medium text-gray-300">Password (min. 6 characters)</label>
            <input type="password" id="password-signup" required value={password} onChange={e => setPassword(e.target.value)} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-purple focus:border-brand-purple" />
        </div>
        <div>
            <button type="submit" disabled={isLoading} className="w-full bg-brand-purple text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-80 transition-all duration-300 disabled:bg-gray-500">
                 {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
        </div>
    </form>
);


const AuthPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [awaitingVerification, setAwaitingVerification] = useState(false);

    const handleFormSubmit = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
            if (activeTab === 'signin') {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
                // The onAuthStateChange listener in App.tsx will handle navigation
            } else {
                const { data, error } = await supabase.auth.signUp({ 
                    email, 
                    password,
                    options: {
                        data: {
                            full_name: name,
                            pcbl_points: 151, // Welcome bonus
                            referrals_made: 3,
                            referrals_successful: 1,
                            referral_points_earned: 500,
                        }
                    }
                });
                if (error) throw error;
                
                // Check if user is created but needs verification
                if (data.user && !data.session) {
                    setAwaitingVerification(true);
                }
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const tabClasses = (tabName: 'signin' | 'signup') => 
        `w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm transition-colors ${
            activeTab === tabName
                ? 'border-brand-purple text-brand-purple'
                : 'border-gray-700 text-gray-400 hover:text-gray-200'
        }`;


    const resetForm = () => {
        setEmail('');
        setPassword('');
        setName('');
        setError(null);
    }

    if (awaitingVerification) {
        return (
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-6 bg-brand-light-dark p-10 rounded-lg shadow-2xl text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-extrabold text-white">
                        Check your inbox!
                    </h2>
                    <p className="text-gray-300">
                        A verification link has been sent to <span className="font-bold text-brand-teal">{email}</span>.
                    </p>
                    <p className="text-gray-400 text-sm">
                        Please click the link in the email to complete your registration.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-brand-light-dark p-10 rounded-lg shadow-2xl">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        {activeTab === 'signin' ? 'Sign in to your account' : 'Create a new account'}
                    </h2>
                </div>
                
                <div>
                    <div className="border-b border-gray-700">
                        <nav className="-mb-px flex space-x-0" aria-label="Tabs">
                            <button className={tabClasses('signin')} onClick={() => { setActiveTab('signin'); resetForm(); }}>Sign In</button>
                            <button className={tabClasses('signup')} onClick={() => { setActiveTab('signup'); resetForm(); }}>Sign Up</button>
                        </nav>
                    </div>
                </div>
                {error && <p className="text-sm text-red-500 bg-red-500/10 p-3 rounded-md">{error}</p>}
                <div className="mt-8">
                    {activeTab === 'signin' ? (
                        <SignInForm 
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleFormSubmit();
                            }}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            isLoading={isLoading}
                        />
                    ) : (
                        <SignUpForm 
                             onSubmit={(e) => {
                                e.preventDefault();
                                handleFormSubmit();
                            }}
                             name={name}
                             setName={setName}
                             email={email}
                             setEmail={setEmail}
                             password={password}
                             setPassword={setPassword}
                             isLoading={isLoading}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;