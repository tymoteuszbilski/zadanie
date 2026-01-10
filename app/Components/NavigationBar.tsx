import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import Badge from "./Badge";
import Button from "./Button";
export default function NavigationBar() {
  return (
    <div className=" sticky top-0 flex items-center justify-between w-full h-28 bg-gray-200 lg:px-32 px-4 text-xl">
      <div className="items-center h-full flex gap-3">
        <NavLink to="/">
          <Button>Home</Button>
        </NavLink>{" "}
        <Button>
          <NavLink to="/products">Products</NavLink>
        </Button>
      </div>
      <div className="flex items-center gap-3 text-black">
        <p>
          <i>You're browsing as a guest</i>
        </p>
        <NavLink to="/cart">
          <Button>
            <FontAwesomeIcon icon={faCartShopping} />
            <Badge />
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
