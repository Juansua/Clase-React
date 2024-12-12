import Button from "./Button"

function CardProduct({ price, title, text, color }) {
  return (
    <div className="card">
        <img src="/images/juanSuarez.jpg" alt="Camiseta Cualquiera" className="card-img"/>
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">
                {text}
            </p>

            <div>
                <p className="card-price">$ {price}</p>
            </div>

            <Button text="Comprar" color={color}>Probando</Button>
        </div>
    </div>
  )
}

export default CardProduct