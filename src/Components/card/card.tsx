import React from 'react';
import './card.scss';

interface CardProps {
    title: string;
    content: string;
    icon?: string;
}

export const Card: React.FC<CardProps> = ({ title, content,icon }) => {
    return (
        <div className="card">
            <img src={icon} alt="" />
            <h4 >{title}</h4>
            <h2 >{content}</h2>
        </div>
    );
};

