import React from 'react';
import List from './List.js';
import './App.css';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : { ...newObj, [key]: value },
    {}
  );
}

class App extends React.Component {
  state = {
      lists: this.props.store.lists,
      allCards: this.props.store.allCards
    }

  deleteCard = (cardKey) => {   
    const newCards = omit(this.state.allCards, cardKey);
    const newLists = this.state.lists.map(list => {
      return list.cardIds.filter(id => id !== cardKey)
    });      
    this.setState({
      lists: newLists,
      allCards: newCards
    })
    console.log(this.state)
  }
    
  randomCard = (listId) => {
    const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
	return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  };

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists.map((list) =>
              <List
              header={list.header}
              //mapping through the cardIds key/value and setting cards as an array that matches the allCards id to cardIds from Lists
              cards={list.cardIds.map(id => this.state.allCards[id])}
              key={list.id}
              deleteCard={this.deleteCard}
              randomCard={this.randomCard}
              listId={list.id}
              />
          )}
        </div>
      </main>
    )
  };
}

export default App;