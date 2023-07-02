import styled from "@emotion/styled";

export interface ImageSwiperPropsType {
  url: string;
  name: string;
};

const StyledImg = styled.img`
  border-radius: 10px;
  max-width: 100%;
  background-color: white;
  display: block;
`;

const ImageSwiper = ({url, name}: ImageSwiperPropsType) => {
  return (
    <StyledImg src={url} alt={`${name}`} />
  )
};

export default ImageSwiper;
