import "./App.css";
import Score from "./Score";
import Card from "./Card";

function App() {
  function getNewCardOrder() {
    let cardIndexes = [0, 1, 2, 3, 4, 5, 6, 7]
    
    for (let i = cardIndexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardIndexes[i], cardIndexes[j]] = [cardIndexes[j], cardIndexes[i]];
    }

    return cardIndexes;
  }

  function getNewCardList() {
    let cardOrder = getNewCardOrder();
    return cardOrder.map(cardId => <Card key={cardId} cardIndex={cardId}/>);
  }

  return (
    <div className="page-wrap">
      <header className="page-header">
        <h1>Memory Game</h1>
      </header>
      <main className="page-main">
        <div className="page-info">
          <small className="rules">Rules: Click a card to gain a point. Don't click cards that you've already picked.</small>
          <Score currentScore={0} highScore={0}/>
        </div>
        <div className="cards-container">
          {getNewCardList()}
        </div>
      </main>
      <footer className="page-footer">
        <small>
          Ray Allen Datuin 2023
        </small>
      </footer>
    </div>
  );
}

export default App;
