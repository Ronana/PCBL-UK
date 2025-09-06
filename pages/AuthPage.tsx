import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        
        try {
            if (activeTab === 'signin') {
                await signInWithEmailAndPassword(auth, email, password);
                // The onAuthStateChanged listener in App.tsx will handle navigation
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
                // The onAuthStateChanged listener in App.tsx will handle navigation
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
                            onSubmit={handleFormSubmit}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            isLoading={isLoading}
                        />
                    ) : (
                        <SignUpForm 
                             onSubmit={handleFormSubmit}
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