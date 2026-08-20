import React from 'react'
import './../ActionSection/ActionCard.css'
const ActionCard = ({action}) => {
  return (
        <div className="action-card-container">
            <div className="action-card-content">
                <h1>{action.title}</h1>
                <p>{action.content}</p>
            </div>
        </div>
  )
}

export default ActionCard
