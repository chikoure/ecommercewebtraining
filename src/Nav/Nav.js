import React, { Component } from "react";
import background from "../assets/img/background-signup.jpg";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-findcond navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              style={{
                backgroundColor: "blue"
              }}
              type="button"
              className="hamburger is-closed"
              data-toggle="offcanvas"
            >
              <span className="hamb-top" />
              <span className="hamb-middle" />
              <span className="hamb-bottom" />
            </button>
            <a href="index.php">e-Commerce</a>
          </div>
          <ul
            className="nav navbar-nav navbar-right"
            style={{
              backgroundColor: "blue"
            }}
          >
            <li
              className="dropdown"
              style={{
                backgroundColor: "red"
              }}
            >
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                <i className="fa fa-user-o" aria-hidden="true" />
              </a>
              <ul className="dropdown-menu" role="menu">
                <div className="dropdown-header">
                  <i className="fa fa-user-o" aria-hidden="true" />
                  <div className="dropdown-connected-name" />
                  <a href="personal-informations.php" className="btn btnLarge">
                    Mon compte
                  </a>
                </div>
                <li className="accountSignup">
                  <a href="orders.php">
                    <i className="fa fa-bars" aria-hidden="true" /> Mes
                    commandes
                  </a>
                </li>
                <li className="accountSignup">
                  <a href="logout.php">
                    <i className="fa fa-sign-out" aria-hidden="true" />{" "}
                    Déconnexion
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                <i className="fa fa-user-o" aria-hidden="true" /> Me connecter
              </a>
              <ul className="dropdown-menu" role="menu">
                <div className="dropdown-header">
                  <form method="post">
                    <div className="group">
                      <input type="email" name="email" id="email" />
                      <span className="highlight" />
                      <span className="bar" />
                      <label for="email">Email</label>
                    </div>
                    <div className="group">
                      <input type="password" name="password" id="password" />
                      <span className="highlight" />
                      <span className="bar" />
                      <label for="password">Mot de passe</label>
                    </div>
                    <button
                      type="submit"
                      name="connectSubmit"
                      className="button"
                    >
                      Connexion
                    </button>
                  </form>
                </div>
                <li className="accountSignup">
                  <a href="signup.php">
                    Première visite ? <span>Créer un compte</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                <i className="fa fa-shopping-bag" aria-hidden="true" /> Mon
                panier
              </a>
              <ul className="dropdown-menu" role="menu">
                <div className="empty-cart">
                  <i className="fa fa-shopping-bag" aria-hidden="true" />
                  <p>
                    <strong>Votre panier</strong> est actuellement vide.
                  </p>
                </div>

                <div className="item">
                  <a
                    href="del_panier.php?id_product=<?= $product['id_product'] ?>&size_product=<?= $panier[$i][1] ?>"
                    className="item-delete"
                  >
                    <i className="fa fa-times" aria-hidden="true" />
                  </a>
                  <div className="item-wrapper">
                    <a
                      href="products.php?id_product=<?= $product['id_product'] ?>"
                      className="item-link"
                    />

                    <img src="<?= $image ?>" alt="item-image" />
                  </div>
                  <div className="item-price-wrapper" />
                </div>

                <div className="total-price-wrapper">
                  <span className="total-label">TOTAL</span>
                  <span className="total-price">'.$totalPrice.' €</span>
                </div>
                <a href="buy.php" className="btn btnLarge">
                  Acheter
                </a>
                <a href="panier.php" className="btn shopcart-btn btnLarge">
                  Mon panier
                </a>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
