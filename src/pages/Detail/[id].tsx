import { useRouter } from "next/router";
import CarProfile from "@/Components/CarProfile";
import ListHeader from "@/Components/ListHeader/indx";
import ListItem from "@/Components/ListItem";
import { useChangeDetailData, useCar } from "@/lib/hooks";
import { CardItemListWrapper } from "@/Components/CarItemList/styles";
import SEO from "@/Components/SEO/seo";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getCars } from "@/lib/api";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, isError, car } = useCar(Number(id));

  const {
    imageUrl,
    name,
    brand,
    insurance,
    amount,
    carInfoList,
    additionalProducts
  } = useChangeDetailData(car);

  if (isError) {
    return (
      <CardItemListWrapper>
        <p className="message">서버에서 응답이 없습니다.</p>
      </CardItemListWrapper>
    );
  }

  if (isLoading) {
    return (
      <CardItemListWrapper>
        <p className="message">불러오는 중</p>
      </CardItemListWrapper>
    );
  }

  return (
    <>
      <SEO
        title={`${brand} ${name}`}
        description={`월 ${amount} 원`}
        image={imageUrl}
      />
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

      {insurance.length > 0 && (
        <>
          <ListHeader title="보험" />
          {insurance.map(({ name, description }, index) => (
            <ListItem key={index} name={name} value={description} />
          ))}
        </>
      )}
      {additionalProducts.length > 0 && (
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["cars", "ALL"], getCars);
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};
