import React from 'react';
import Card from './Card'
import './List.css';

class List extends React.Component {
  render() {
    return (
        <section className='List'>
            <header className='List-head'>
            <h2>{this.props.header}</h2>
            </header>
            
        <div className='List-Cards'>
            {this.props.cards.map((card) =>
            <Card
              title={card.title}
              content={card.content}
              id={card.id}
              key={card.id}
              deleteCard={this.props.deleteCard}
            />
          )}
          <button
            type='button'
            className='List-add-button'
            onClick={() => this.props.randomCard()}
          >
            + Add Random Card
          </button>
        </div>
      </section>
    )
  }
}

  export default List;