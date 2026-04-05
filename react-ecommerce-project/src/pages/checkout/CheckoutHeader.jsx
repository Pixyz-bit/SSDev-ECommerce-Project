import "./CheckoutHeader.css";
import { NavLink } from "react-router";
import CheckoutLockIcon from "../../assets/images/icons/checkout-lock-icon.png";
import Logo from "../../assets/images/logo.png";
import MobileLogo from "../../assets/images/mobile-logo.png";
export function CheckoutHeader({ cart }) {
  //reduce is an array method used to reduce an array down to a single value. //params: (accumulator, currentValue, index, array)
  //total → the accumulated value so far (accumulator)
  //item → the current element in the array (currentValue)
  //0 → the initial value of the accumulator
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <NavLink to="/">
              <img className="logo" src={Logo} />
              <img className="mobile-logo" src={MobileLogo} />
            </NavLink>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <NavLink className="return-to-home-link" to="/">
              {cartQuantity} items
            </NavLink>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src={CheckoutLockIcon} />
          </div>
        </div>
      </div>
    </>
  );
}
