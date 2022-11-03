import HeaderBar from "./HeaderBar";
import { Outlet } from "react-router-dom";
import { Container } from "./styles";

const Layout = () => {
  return (
    <Container>
      <HeaderBar />
      <div className="content">
        <Outlet />
      </div>
    </Container>
  );
};

export default Layout;
