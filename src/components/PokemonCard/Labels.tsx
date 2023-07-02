import styled from "@emotion/styled";
import {ColorType, StyledLabelProps, LabelsPropsType} from "./types";

const COLORS: ColorType = {
  types: "#4592c4",
  moves: "#b2982e",
  abilities: "#ce4f96"
};

const StyledLabelSpan = styled.span<StyledLabelProps>(({type}) => {
  return {
    padding: "4px 8px",
    backgroundColor: COLORS[type],
    borderRadius: "6px",
    color: "white",
    textWrap: "nowrap"
  };
});

const StyledLabelContainerDiv = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow-x: auto;
  padding: 10px 4px;
  span {
    margin-left: 4px;
  }
`;

const StyledP = styled.p`
  font-size: .8rem;
  margin-bottom: .2rem;
  text-transform: capitalize;
`;

const Labels = ({value, name}: LabelsPropsType): JSX.Element => (
  <>
    <StyledP>{name}</StyledP>
    <StyledLabelContainerDiv>
      {value.map((value, index) => (
        <StyledLabelSpan key={`${value}-${index}`} type={name}>
          {value}
        </StyledLabelSpan>
      ))}
    </StyledLabelContainerDiv>
  </>
);

export default Labels;
