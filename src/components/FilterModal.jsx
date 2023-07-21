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
            <div className="fixedBottom">
                <button className='btn' onClick={handleModalOpen}>Filters</button>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Filter Category</h2>
                        <FilterMenu />
                        <button className='btnClose btn' onClick={handleModalClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterModal;
