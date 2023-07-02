import styled from "@emotion/styled";

export interface ImageType {
  url: string;
  name: string;
}

export interface SpritesPropsType {
  sprites: ImageType[]
};

const StyledImg = styled.img`
  border-radius: 10px;
  max-width: 100%;
  background-color: white;
  display: block;
`;

const StyledSpriteContainerDiv = styled.div`
  height: auto;
  width: 100%;
  overflow-x: auto;
  background-color: white;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
`;

const Sprites = ({sprites}: SpritesPropsType) => {
  return (
    <StyledSpriteContainerDiv>
      {
        sprites.map((sprite, index) => (
          <StyledImg
            key={`${sprite.url}-${index}`}
            src={sprite.url}
            alt={`${sprite.name}`}
          />
        ))
      }
    </StyledSpriteContainerDiv>  
  )
};

export default Sprites;
