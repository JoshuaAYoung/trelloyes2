import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <button type="button"
        onClick={() => this.props.deleteCard(this.props.id)}
        >
          delete
        </button>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        </div>
    )
  }
}

export default Card;