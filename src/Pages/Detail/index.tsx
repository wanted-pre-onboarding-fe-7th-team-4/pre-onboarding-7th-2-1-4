import CarProfile from "@/Components/CarProfile";
import ListHeader from "@/Components/ListHeader/indx";
import ListItem from "@/Components/ListItem";
// import { useParams } from "react-router-dom";
import { payload } from "@/lib/mock";
import { useChangeDetailData } from "@/lib/hooks";
import { CarsData } from "../../lib/types/interface";

const Detail = () => {
  // const { id } = useParams();
  const {
    imageUrl,
    name,
    brand,
    insurance,
    amount,
    carInfoList,
    additionalProducts
  } = useChangeDetailData(payload[0] as CarsData);
  return (
    <>
      <CarProfile imageUrl={imageUrl} brand={brand} name={name} />
      <ListItem value={`월 ${amount} 원`} />
      <ListHeader title="차량 정보" />
      {carInfoList.map((value) => (
        <ListItem
          key={value.name}
          name={value.name}
          value={value.description}
        />
      ))}

      {insurance.length && (
        <>
          <ListHeader title="보험" />
          {insurance.map(({ name, description }, index) => (
            <ListItem key={index} name={name} value={description} />
          ))}
        </>
      )}
      {additionalProducts.length && (
        <>
          <ListHeader title="추가 상품" />
          {additionalProducts.map(({ name, amount }, index) => (
            <ListItem key={index} name={name} value={amount} />
          ))}
        </>
      )}
    </>
  );
};

export default Detail;
