
import React, { useState, useRef, useEffect } from 'react';
import { SearchIcon } from './icons/HeaderIcons';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [query, setQuery] = useState('');
    const searchContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
        setIsExpanded(false);
        setQuery('');
    };

    const toggleExpand = () => {
      const newIsExpanded = !isExpanded;
      setIsExpanded(newIsExpanded);
      if (newIsExpanded) {
        // Use timeout to allow the element to become visible before focusing
        setTimeout(() => inputRef.current?.focus(), 10);
      }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setIsExpanded(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={searchContainerRef} className="relative flex items-center">
            <button
                onClick={toggleExpand}
                className="text-gray-300 hover:text-brand-teal p-2 rounded-full transition-colors"
                aria-label="Search"
            >
                <SearchIcon className="h-6 w-6" />
            </button>
            <div
                className={`absolute right-0 top-1/2 -translate-y-1/2 flex items-center transition-all duration-300 ease-in-out ${
                    isExpanded ? 'w-64 opacity-100' : 'w-0 opacity-0'
                }`}
                style={{ zIndex: isExpanded ? 10 : -1 }}
            >
                <form onSubmit={handleSearch} className="relative w-full">
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for a PC..."
                        className="w-full bg-brand-light-dark border border-gray-600 rounded-full py-2 pl-4 pr-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                        disabled={!isExpanded}
                    />
                    <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3" aria-label="Submit search">
                         <SearchIcon className="h-5 w-5 text-gray-400" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;
