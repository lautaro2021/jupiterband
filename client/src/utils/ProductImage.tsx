import styled from "styled-components";

export const ProductImage = ({ productName }: { productName: string }) => {
  const firstLetter = productName.charAt(0);

  return <CustomProductImage>{firstLetter}</CustomProductImage>;
};

const CustomProductImage = styled.picture`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: #38d7c0;
  color: black;
`;
