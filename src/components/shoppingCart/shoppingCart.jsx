import "./shoppingCart.css";

import NIKE from "../../images/nike.png";
import SHIRT from "../../images/shirt.png";
import GUCCIBAG from "../../images/gucciBag.png";
import ProductNumber from "../../images/selectedNumber.png";
import { useState } from "react";

const productList = [
    {
        image: NIKE,
        name: "Nike",
        model: "Superstar",
        size: "8.5",
        price: 239.55,
    },
    {
        image: SHIRT,
        name: "H&M",
        model: "T-Shirt",
        size: "S",
        price: 14.99,
    },
    {
        image: GUCCIBAG,
        name: "Gucci",
        model: "CG Marmont",
        price: 1850.0,
    },
];

const Header = ({ cart, items }) => {
    return (
        <div>
            <header className="flex">
                <div>
                    <h3>Shopping cart</h3>
                </div>
                <div className="basketIconDiv">
                    <img src={ProductNumber} alt="" />
                    <div className="choosedLength">{cart.length}</div>
                </div>
            </header>
            <div className="itemsNumber">
                <p>{items.length} items</p>
            </div>
        </div>
    );
};

const MainProductList = ({ choosedList, addInCart, cart, setTotalPrice }) => {
    const addToCart = (e, i) => {
        if (!cart.includes(e)) {
            addInCart((prev) => [...prev, choosedList[i]]);
            setTotalPrice((prev) => prev + e.price);
        }
    };
    return (
        <div className="listContainer">
            <div>
                {choosedList.map((e, i) => {
                    return (
                        <div className="listBoardContainer">
                            <div className="listBoard flex">
                                <div className="alignItemsCenter imgAndNameBox">
                                    <div>
                                        <img src={e.image} alt="" />
                                    </div>
                                    <div>
                                        <p className="productName">{e.name}</p>
                                        <p className="productModel">
                                            {e.model}
                                        </p>
                                        <p className="productSize">{e.size}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="priceTitle">{`$${e.price}`}</p>
                                    <button onClick={() => addToCart(e, i)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Footer = ({ totalPrice, clearCart, setTotalPrice }) => {
    const checkOut = (clearCart) => {
        clearCart([]);
        setTotalPrice(0);
    };

    return (
        <footer>
            <div className="totalPriceBox flex">
                <div>
                    <p className="footerTotalTitle">Total</p>
                </div>
                <div>
                    <p className="footerPriceTitle">{`$${totalPrice.toFixed(
                        2
                    )}`}</p>
                </div>
            </div>
            <div className="checkOutButtonDiv">
                <button onClick={() => checkOut(clearCart)}>Checkout</button>
            </div>
        </footer>
    );
};

const App = () => {
    const [items, setItems] = useState(productList);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <>
            <div className="container">
                <Header cart={cart} items={items} />
                <MainProductList
                    choosedList={items}
                    addInCart={setCart}
                    cart={cart}
                    setTotalPrice={setTotalPrice}
                />
                <Footer
                    totalPrice={totalPrice}
                    clearCart={setCart}
                    setTotalPrice={setTotalPrice}
                />
            </div>
        </>
    );
};
export default App;
