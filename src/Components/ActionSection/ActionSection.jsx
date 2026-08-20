import React from 'react'
import './../ActionSection/ActionSection.css'; 
import ActionCard from './ActionCard';

const ActionSection = ({action}) => {
  return (
    <div className='action-section'>
      <ActionCard action={action}></ActionCard>
    </div>
  )
}

export default ActionSection
