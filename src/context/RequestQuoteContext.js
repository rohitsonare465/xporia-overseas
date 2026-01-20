import React, { createContext, useContext, useState } from 'react';

const RequestQuoteContext = createContext();

export const useRequestQuote = () => {
    return useContext(RequestQuoteContext);
};

export const RequestQuoteProvider = ({ children }) => {
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);
    const [prefilledProduct, setPrefilledProduct] = useState('');

    const openQuoteModal = (productName = '') => {
        setPrefilledProduct(productName);
        setIsQuoteOpen(true);
    };

    const closeQuoteModal = () => {
        setIsQuoteOpen(false);
        setPrefilledProduct('');
    };

    return (
        <RequestQuoteContext.Provider value={{ isQuoteOpen, prefilledProduct, openQuoteModal, closeQuoteModal }}>
            {children}
        </RequestQuoteContext.Provider>
    );
};
