import React, { useState, useEffect } from "react";

import Vitrine from "./vitrine";
import Modal from "./modal";

function Main() {
  const [JSONItems, setJSONItems] = useState([]);
  const [itemIndex, setItemIndex] = useState(-1);

  const addr =
    "http://econverse.digital/teste-front-end/junior/ninja-som/lista-produtos/produtos.json";

  const fetchData = () => {
    fetch(addr)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setJSONItems(myJson.products.splice(1, 8));
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const modalClick = (event) => {
    // console.log("click: " + event.currentTarget.id);
    console.log("click");
    if (itemIndex == -1) {
      setItemIndex(event.currentTarget.id);
    } else {
      setItemIndex(-1);
    }
  };

  return (
    <div>
      <main>
        <section className="carousel flex-r f-evenly">
          <i className="fa-2x fas fa-chevron-left"></i>
          <img src="./img/carousel.png" alt="carousel" />
          <i className="fa-2x fas fa-chevron-right"></i>
        </section>
        <section className="mid-menu">
          <div>
            <img src="./img/midmenu/guitarras.png" alt="Guitarras" />
            <p>GUITARRAS</p>
          </div>
          <div>
            <img src="./img/midmenu/microfones.png" alt="Microfones" />
            <p>MICROFONES</p>
          </div>
          <div>
            <img src="./img/midmenu/mesadesom.png" alt="Mesadesom" />
            <p>MESA DE SOM</p>
          </div>
          <div>
            <img src="./img/midmenu/teclados.png" alt="Teclados" />
            <p>TECLADOS</p>
          </div>
          <div>
            <img src="./img/midmenu/violao.png" alt="Violao" />
            <p>VIOLÃO</p>
          </div>
          <div>
            <img src="./img/midmenu/baterias.png" alt="Baterias" />
            <p>BATERIAS</p>
          </div>
        </section>

        <section className="novidades">
          <div>
            <img
              src="./img/novidades/mixer_headphone.png"
              alt="Imagem de uma mesa de som"
            />
            <div>
              <h3>NOVIDADES</h3>
              <div className="fake-bar"></div>
              <h2>ÁUDIO</h2>
              <h1>PROFISSIONAL</h1>
              <button type="button">CONFIRA</button>
            </div>
          </div>
          <div>
            <img
              src="./img/novidades/rock_guitar.png"
              alt="Imagem de um guitarrista"
            />
            <div>
              <h3>NOVIDADES</h3>
              <div className="fake-bar"></div>
              <h2>INSTRUMENTOS</h2>
              <h1>MUSICAIS</h1>
              <button type="button">CONFIRA</button>
            </div>
          </div>
        </section>

        <section>
          <div className="texto-vitrine">
            <h2>
              INSTRUMENTOS <a>DESTAQUE</a>
            </h2>
            <h3>
              It is a long estabilished fact that a reader will be distracted by
              the readable
            </h3>
          </div>
          <div className="vitrine">
            {JSONItems &&
              JSONItems.length > 0 &&
              JSONItems.map(
                (item, i) =>
                  i < 4 && (
                    <Vitrine
                      key={`${i}`}
                      index={i}
                      modalClick={modalClick}
                      productsList={item}
                    />
                  )
              )}
          </div>
          <div className="vitrine">
            {JSONItems &&
              JSONItems.length > 0 &&
              JSONItems.map(
                (item, i) =>
                  i >= 4 && (
                    <Vitrine
                      key={`${i}`}
                      index={i}
                      modalClick={modalClick}
                      productsList={item}
                    />
                  )
              )}
          </div>
          {typeof JSONItems[0] !== "undefined" && itemIndex != -1 ? (
            <div className="container"> </div>
          ) : (
            <div></div>
          )}
          <div className="modal">
            {typeof JSONItems[0] !== "undefined" && itemIndex != -1 ? (
              <Modal
                productItem={JSONItems[itemIndex]}
                closeModal={modalClick}
              />
            ) : (
              <div></div>
            )}
          </div>
          <button className="btn-ver-mais" type="button">
            VER MAIS
          </button>
        </section>

        <section className="bottom">
          <div className="melhores-marcas">
            <h2>
              AS <a>MELHORES</a> MARCAS
            </h2>
            <h3>
              It is a long estabilished fact that a reader will be destracted by
              the readable
            </h3>
            <div className="logo-marca flex-r f-evenly">
              <i className="fa-2x fas fa-chevron-left"></i>
              <img src="./img/marcas/akg.png" alt="akg" />
              <img src="./img/marcas/roland.png" alt="roland" />
              <img src="./img/marcas/boss.png" alt="boss" />
              <img src="./img/marcas/shure.png" alt="shure" />
              <i className="fa-2x fas fa-chevron-right"></i>
            </div>
          </div>

          <div className="sobre">
            <h2>
              <a>SOBRE NÓS</a>
            </h2>
            <h4>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for ‘lorem ipsum’ will
              uncover many web sites still in their infancy. Lorem Ipsum as
              their default model text, and a search for ‘lorem ipsum’ will
              uncover many web sites still in their infancy. Lorem Ipsum as
              their default model text, and a search for ‘lorem ipsum’ will
              uncover many web sites still in their infancy.
            </h4>
          </div>

          <div className="designer flex-r f-evenly">
            <i className="fas fa-chevron-left"></i>
            <img src="./img/felipe_salmin.png" alt="Foto de Felipe" />
            <div>
              <h4>Felipe Salmim</h4>
              <h5>Designer</h5>
            </div>
            <h4 className="quote">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for ‘lorem
              ipsum’
            </h4>
            <i className="fas fa-chevron-right"></i>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Main;
