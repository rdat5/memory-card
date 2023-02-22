
export default function Score({ currentScore, highScore }) {
    return (
    <div className="score">
        <div>Current Score: {currentScore}</div> 
        <div>Best Score: {highScore}</div>
    </div>
    );
}