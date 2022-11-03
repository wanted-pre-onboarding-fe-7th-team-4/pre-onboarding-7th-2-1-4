import { useRouter } from "next/router";
import IconBack from "../IconBack";
import { Container } from "./styles";

const HeaderBar = () => {
  const router = useRouter();
  const { pathname } = router;
  const isHome = pathname === "/";
  const onClick = () => {
    router.back();
  };
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
