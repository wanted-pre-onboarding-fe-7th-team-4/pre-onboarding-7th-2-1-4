import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.black};
  height: 120px;

  &:last-child {
    border-bottom: 0;
  }

  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }

  .textWrapper {
    p {
      color: ${({ theme }) => theme.color.black};
    }
    .brand,
    .name {
      font-weight: 700;
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: 17px;
    }
    .type {
      margin-top: 8px;
    }
    .type,
    .amount {
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.XSmall};
      line-height: 15px;
    }
  }

  .newItemTag {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;

// export const Container = styled.li`
//   position: relative;
//   height: 120px;
//   width: 100%;
//   cursor: pointer;
//   padding: 1.5rem 1rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border-bottom: 1px solid ${({ theme }) => theme.color.black};

//   &:last-child {
//     border-bottom: 0;
//   }
//   .newItemTag {
//     position: absolute;
//     top: 8px;
//     right: 8px;
//   }
// `;

// export const Info = styled.div`
//   p {
//     color: ${({ theme }) => theme.color.black};
//   }
//   .brand,
//   .name {
//     font-weight: 700;
//     font-size: ${({ theme }) => theme.fontSize.small};
//     line-height: 17px;
//   }
//   .type {
//     margin-top: 8px;
//   }
//   .type,
//   .amount {
//     font-weight: 500;
//     font-size: ${({ theme }) => theme.fontSize.XSmall};
//     line-height: 15px;
//   }
// `;

// export const ImgContainer = styled.div`
//   position: relative;
//   width: 152px;
//   height: 80px;
//   & > img {
//     /* display: block; */
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;
