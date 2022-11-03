import { TagWrapper } from "./styles";
// import { useChangeFuelSegmentEnumToKorean } from "@/lib/hooks";
import { TSegment, SEGMENT } from "@/lib/types";

interface Props {
  tagName: TSegment;
  index?: number;
  selected?: boolean;
  onClick?: () => void;
}

const Tag = ({ tagName, selected = false, index, onClick }: Props) => {
  // const { segment } = useChangeFuelSegmentEnumToKorean();
  // changeSegmentToKorean(tagName);

  return (
    <TagWrapper selected={selected} onClick={onClick} data-index={index}>
      {SEGMENT[tagName]}
    </TagWrapper>
  );
};

export default Tag;
