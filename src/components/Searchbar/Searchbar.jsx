import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Searchbar.css';

function Searchbar({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleNameChange = e => {
        setQuery(e.currentTarget.value.toLowerCase());
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (query.trim() === '') {
            toast.warn('Enter your request');
            return;
        }
        onSubmit(query);
        setQuery('');
    };

    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={handleSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleNameChange}
                />
            </form>
        </header>
    );
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
