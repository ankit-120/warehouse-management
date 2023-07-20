import React, { useState } from 'react';
import './FilterModal.css'; // Import your CSS file for styling
import FilterMenu from './FilterMenu'

const FilterModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="app">
            {/* Your other content */}
            <div className="fixed-bottom">
                <button onClick={handleModalOpen}>Open Modal</button>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Modal Content</h2>
                        <FilterMenu />
                        <button onClick={handleModalClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterModal;
