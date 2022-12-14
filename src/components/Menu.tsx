import { Navbar, Nav, Container, Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCard } from "../context/ShopingCardContext";

const Menu = () => {
  const { openCart, cartQuantity } = useShoppingCard();
    return (
      <Navbar sticky="top" className="bg-white shadow-lg mb-3">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/shop" as={NavLink}>
              Shop
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
          </Nav>
            <Button
              onClick={ openCart }
              variant="outline-primary"
              className="rounded-circle"
              style={{ position: "relative", width: "3rem", height: "3rem" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            {cartQuantity > 0 && (
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  right: "0",
                  bottom: "0",
                  color: "white",
                  transform: "translate(25%,25%)",
                }}
              >
                {cartQuantity}
              </div>)}
            </Button>
        </Container>
      </Navbar>
  );
};
    
export default Menu;
