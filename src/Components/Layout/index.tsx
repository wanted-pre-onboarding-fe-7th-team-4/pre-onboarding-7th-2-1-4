import HeaderBar from "./HeaderBar";
import { Container } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <HeaderBar />
      <div className="content">{children}</div>
    </Container>
  );
};

export default Layout;
