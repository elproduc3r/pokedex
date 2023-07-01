import styled from "@emotion/styled";

interface ColorType {
  [index: string]: string;
};

interface LabelPropTypes {
  name: string;
  value: string[];
};

type StyledLabelProps = {
  type: string;
};

const COLORS: ColorType = {
  types: "#4592c4",
};

const StyledLabelSpan = styled.span<StyledLabelProps>(({type}) => {
  return {
    padding: "4px 8px",
    backgroundColor: COLORS[type],
    borderRadius: "6px",
    color: "white",
  };
});

const TypeLabels = (props: LabelPropTypes) => {
  const {value, name} = props;
  return (
    <>
      {value.map((value, index) => (
        <StyledLabelSpan key={`${value}-${index}`} type={name}>
          {value}
        </StyledLabelSpan>
      ))}
    </>
  )
};

export default TypeLabels;