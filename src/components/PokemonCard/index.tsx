import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styled from "@emotion/styled";
import Labels from "./Labels";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: auto;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  margin: 1rem;
  text-align: left;
`;

const StyledImg = styled.img`
  border-radius: 10px;
  max-width: 100%;
  background-color: white;
`;

const StyledDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const StyledHeaderP = styled.p`
  display: block;
  margin: .5rem 0 0 0;
`;

const PokemonCard = (): JSX.Element => {
  const defaultCard = {
    name: "",
    img: "blankCard.png",
    types: [],
    moves: []
  };
  const {current} = useSelector((state: RootState) => state.search);
  const card = current ? current : defaultCard;
  const hasTypes = card.types && card.types.length > 0;
  const hasMoves = card.moves && card.moves.length > 0;

  return (
    <ContainerDiv>
      <StyledImg src={card.img} alt={card.name} />
      <StyledDetailsDiv>
        <StyledHeaderP><strong>{card.name}</strong></StyledHeaderP>
        {
          hasTypes && <Labels name="types" value={card.types || []}/>
        }
        {
          hasMoves && <Labels name="moves" value={card.moves || []}/>
        }
      </StyledDetailsDiv>
    </ContainerDiv>
  );

};

export default PokemonCard;