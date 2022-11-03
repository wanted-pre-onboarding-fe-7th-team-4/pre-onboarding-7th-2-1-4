import { useNavigate, useLocation } from "react-router-dom";
import IconBack from "../IconBack";
import { Container } from "./styles";

const HeaderBar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const navigate = useNavigate();
  const onClick = () => navigate(-1);
  return (
    <Container>
      {!isHome && (
        <button onClick={onClick}>
          <IconBack />
        </button>
      )}
      <h1>{isHome ? "전체차량" : "차량상세"}</h1>
    </Container>
  );
};

export default HeaderBar;
