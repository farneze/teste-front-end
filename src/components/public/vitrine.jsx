/* eslint-disable */

function Vitrine(props) {
  const prodContent = props.productsList;
  const index = props.index;

  const price = Number(prodContent.price);

  const units = Math.floor(price / 100);
  const cents = price % 100;

  const totalPrice = "R$ " + units + "," + cents;

  return (
    <div className="items-vitrine" id={index} onClick={props.modalClick}>
      {/* // <div className="items-vitrine"> */}
      {/* <img src={prodContent.photo} alt={prodContent.productName} /> */}
      <img src="./img/mesa-som.png" alt={prodContent.productName} />
      <h3>{prodContent.productName}</h3>
      <h4>{prodContent.descriptionShort}</h4>
      <h2>{totalPrice}</h2>
    </div>
  );
}

export default Vitrine;
