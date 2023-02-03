
const Card=(props)=> {
    const { title, desc, price, img } = props.details;

    return (
        <div style={{ position: "relative", padding: "12px", width: "100px", height: "200px" }}>
            <img style={{ position: "absolute", width: "100px", height: "200px", zIndex: "-1" }} src={img} />
            <h4>{title}</h4>
            <p>{desc}</p>
            <p>{price}</p>
        </div>
    );
}

export default Card;