import styled from "@emotion/styled";

interface ColorType {
  [index: string]: string;
};

interface LabelPropTypes {
  name: string;
  value: string[];
};

interface StyledLabelProps {
  type: string;
};

const COLORS: ColorType = {
  types: "#4592c4",
  moves: "#b2982e",
};

const StyledLabelSpan = styled.span<StyledLabelProps>(({type}) => {
  return {
    padding: "4px 8px",
    backgroundColor: COLORS[type],
    borderRadius: "6px",
    color: "white",
    textWrap: "nowrap",
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

const Labels = (props: LabelPropTypes) => {
  const {value, name} = props;
  return (
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
  )
};

export default Labels;
