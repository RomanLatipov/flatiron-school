import { useState } from "react";

// To destructure an object within an object, separate the "nests" you want with a colon.
// Writing `export default` before our component saves us from writing `export default [function]` at the end of the file.
export default function Item({ item: { name, price } }) {
  //created a state
  const [ isInCart, setInCart ] = useState(false);
  function handleClick() {
    setInCart(!isInCart);
    if (!isInCart)
      document.querySelector("body").style.backgroundColor = "blue";
    else
      document.querySelector("body").style.backgroundColor = "white";
  }
  const buttontext = isInCart ? "Remove from cart" : "Add to cart";
  const inCart = isInCart ? "1 item in cart" : "Not in cart";
  console.log(buttontext);
  return (
    <li>
      {/* Since we destructured props.item, we save ourselves from writing `item.name` and `item.price`. */}
      <h2>{name} for only ${price}!</h2>
      <p>
        <button onClick={handleClick}>
          <strong>{buttontext}</strong>
        </button>
        {/* Some manual spacing, nothing to see here... */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{inCart}</span>
      </p>
      {/* Some manual spacing between <Item> components, nothing to see here... */}
      <br/>
    </li>
  );
}