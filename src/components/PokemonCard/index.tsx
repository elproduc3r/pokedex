import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { RootState } from "../../store";
import Labels from "./Labels";
import Image from "../Image";
import Sprites from "../Sprites";

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

const StyledDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const StyledHeaderP = styled.p`
  display: block;
  margin: .5rem 0 .5rem 0;
  font-weight: bold;
`;

const PokemonCard = (): JSX.Element => {
  const BLANK_IMG = "blankCard.png";
  const defaultCard = {
    name: "",
    img: BLANK_IMG,
    types: [],
    moves: [],
    abilities: [],
    sprites: []
  };
  const {current} = useSelector((state: RootState) => state.search);
  const currentCard = current || defaultCard;
  const {types = [], moves = [], abilities = [], sprites = []} = currentCard;

  return (
    <ContainerDiv>
      <Image url={currentCard.img} name={currentCard.name} />
      <StyledDetailsDiv>
        <StyledHeaderP>
          {currentCard.name}
        </StyledHeaderP>
        <Sprites sprites={sprites} /> 
        <Labels name="types" value={types}/>
        <Labels name="moves" value={moves}/>
        <Labels name="abilities" value={abilities}/>
      </StyledDetailsDiv>
    </ContainerDiv>
  );
};

export default PokemonCard;
