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
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
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
