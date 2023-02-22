import "./App.css";
import Score from "./Score";
import Card from "./Card";

function App() {
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
          <Card cardIndex={0}/>
          <Card cardIndex={1}/>
          <Card cardIndex={2}/>
          <Card cardIndex={3}/>
          <Card cardIndex={4}/>
          <Card cardIndex={5}/>
          <Card cardIndex={6}/>
          <Card cardIndex={7}/>
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
