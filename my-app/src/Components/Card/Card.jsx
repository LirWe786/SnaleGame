import "./Card.css"
import Button from "../componentButton/Button";
const Card = () => {
    return (
        <div className="card">
            <img src="./card-1.png" alt="" />
            <div>
                <div>1.3 ETH</div>
                <Button />
            </div>
        </div>
    )
}

export default Card;
