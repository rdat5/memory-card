import { cardData } from "./data";

export default function Card({ cardIndex, clickFn }) {
    function onClick() {
        clickFn(cardIndex);
    }

    return (
        <div className="card" onClick={onClick}>
            <div className='image-container'>
                <img src={cardData[cardIndex].image} alt="Jellyfish"></img>
            </div>
            <h4><b>{cardData[cardIndex].name}</b></h4>
        </div>
    );
}