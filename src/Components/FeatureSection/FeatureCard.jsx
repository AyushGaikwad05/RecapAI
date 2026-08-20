import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({icon:Icon,title,description}) => {
  return (
    <div className='feature-card-container'>
        <div className='feature-card-content'>
                <Icon className="feature-icon"/>
                <h4>{title}</h4>
                <p>{description}</p>
        </div>

        
    </div>
  )
}

export default FeatureCard
