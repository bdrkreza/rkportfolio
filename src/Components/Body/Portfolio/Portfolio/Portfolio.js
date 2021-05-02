import React from 'react';
import './portfolio.css'
import PortfolioCard from '../PortfolioCard/PortfolioCard';

const Portfolio = () => {
    return (
        <section className="portfolio-body">
            <div className="section-title">
                <h2>My Portfolio</h2>
                <PortfolioCard />
            </div>
        </section>
    );
};

export default Portfolio;