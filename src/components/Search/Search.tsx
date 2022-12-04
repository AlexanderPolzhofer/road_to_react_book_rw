import React from 'react';

interface SearchProps {
    label: string;
    onHandleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<SearchProps> = ({ label, onHandleSearch }) => {
    return (
        <div>
            <label htmlFor={label}>{label}:</label>
            <input id={label} type='text' onChange={onHandleSearch} />
        </div>
    )
}