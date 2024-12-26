import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const calculateTotalPrice = () =>
        cartList.reduce((total, each) => total + each.price * each.quantity, 0)
      const price = calculateTotalPrice()
      const totalItems = cartList.length
      return (
        <div className="total-price-container">
          <h1 className="order-total">
            Order Total: <span className="total-price">{price}/-</span>
          </h1>
          <p className="items-in-cart">
            <span>{totalItems}</span> items in cart
          </p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
