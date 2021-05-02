import React from 'react';
import './MyService.css'
import MyServiceCard from '../MyServiceCard/MyServiceCard';

const MyService = () => {
    return (
        <div className="section-title">
            <h2>My Service</h2>
            <MyServiceCard />
        </div>
    );
};

export default MyService;