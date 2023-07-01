import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import styled from "@emotion/styled";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 300px;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  margin: 1rem;
`;

const StyledImg = styled.img`
  border-radius: 10px;
  max-width: 100%;
  background-color: white;
`;

const StyledDetailsDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;

const PokemonCard = (): JSX.Element => {
  const defaultCard = {
    name: "",
    img: "blankCard.png"
  };
  const {current} = useSelector((state: RootState) => state.search);
  const card = current ? current : defaultCard;

  return (
    <ContainerDiv>
      <StyledImg src={card.img} alt={card.name} />
      <StyledDetailsDiv>
        <span><strong>{card.name}</strong></span>
      </StyledDetailsDiv>
    </ContainerDiv>
  );

};

export default PokemonCard;