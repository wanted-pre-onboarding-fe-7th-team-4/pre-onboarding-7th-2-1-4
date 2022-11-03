import { Container } from "./styles";

interface Props {
  className?: string;
}
const ItemTag = ({ className }: Props) => {
  return <Container className={className}>신규</Container>;
};

export default ItemTag;
