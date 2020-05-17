import styled from "styled-components";
import { darken, lighten } from "polished";

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between
`;
export const ToogleBox = styled.div`
  display: flex;
`;
export const CustomToogle = styled.div`
  flex: 6 0 0;
`;
export const SmallButton = styled.div`
  display: flex;
`;


