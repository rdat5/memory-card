import photo from "./img/moonjellyfish.jpg";

export default function Card() {
    return (
        <div className="card">
            <div className='image-container'>
                <img src={photo} alt="Avatar"></img>
            </div>
            <h4><b>Moon Jellyfish</b></h4>
        </div>
    );
}