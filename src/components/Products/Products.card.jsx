import "./css/Product.card.css";

export default function Product(props) {
    return (
        <div className="product">
            <div className="product_image">
                <img src={props.image} alt={props.alt} />
            </div>
            <div className="product_title">
                <h3>{props.title}</h3>
            </div>
        </div>
    );
}