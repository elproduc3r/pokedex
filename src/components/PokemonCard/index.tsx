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
  font-weight: bold;
`;

const PokemonCard = (): JSX.Element => {

  const BLANK_IMG = "blankCard.png";
  const defaultCard = {
    name: "",
    img: BLANK_IMG,
    types: [],
    moves: [],
    abilities: []
  };
  const {current} = useSelector((state: RootState) => state.search);
  const currentCard = current || defaultCard;
  const {types = [], moves = [], abilities = []} = currentCard;

  return (
    <ContainerDiv>
      <StyledImg src={currentCard?.img} alt={currentCard.name} />
      <StyledDetailsDiv>
        <StyledHeaderP>
          {currentCard.name}
        </StyledHeaderP>
        <Labels name="types" value={types}/>
        <Labels name="moves" value={moves}/>
        <Labels name="abilities" value={abilities}/>
      </StyledDetailsDiv>
    </ContainerDiv>
  );
};

export default PokemonCard;