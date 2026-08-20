import React from 'react'
import './Feature.css'
import FeatureCard from './FeatureCard'
import FeatureCardData from './FeatureCardData'
const Feature = () => {
  return (
    <>
     <div className='feature-section-container '>
        <div className='feature-section-content'>
            <p data="feature-title" >PLATFORM CAPABILITIES</p>
            <h3>Built to Understand Every Conversation</h3>
            <p data="feature-desc">ReCapAI combines speech-to-text, semantic search, and RAG to turn long video recordings into information you can actually use.</p>

        </div>
        
    <div className='feature-card custom-container'>
            {FeatureCardData.map((item,index)=> {
                return (
                    <FeatureCard key={index} icon={item.icon} title={item.title} description={item.description}/>
                );
            })}
    </div>
    </div>

    </>
 
  )
}

export default Feature;
