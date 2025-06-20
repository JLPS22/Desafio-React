import "./card.css"
import Button from "../button/button"

const Card = ({cor = 'aqua', letterSize = '30px', letterStyle = 'uppercase'}) => {
    return(
        <div className="Card">
            <h3>Paragrafo colorido e maiúsculo.</h3>
            <p style={{ color: cor, fontSize: letterSize, textTransform: letterStyle }}>
                Lorem ipsum
            </p>

            <Button></Button>
        </div>
    )
}

export default Card;