/* eslint-disable */
function Vitrine(props) {
  const modalProduct = props.productItem;

  if (typeof modalProduct === "undefined") {
    return <div></div>;
  }

  const price = Number(modalProduct.price);

  const units = Math.floor(price / 100);
  const cents = price % 100;

  const totalPrice = "R$ " + units + "," + cents;

  return (
    <div className="modal-vitrine">
      <i class="fas fa-times close-modal" onClick={props.closeModal}></i>
      <div>
        <img src="./img/mesa-som.png" alt={modalProduct.productName} />
      </div>
      <div>
        <h3>{modalProduct.productName}</h3>
        <h2>{totalPrice}</h2>
        <h4>{modalProduct.descriptionShort}</h4>
        <div>
          <p>Veja mais detalhes do produto</p>
          <i className="fas fa-chevron-right fa-sm"></i>
        </div>
        <button>Adicionar ao carrinho</button>
      </div>
    </div>
  );
}

export default Vitrine;
