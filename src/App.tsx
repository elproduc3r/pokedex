import styled from "@emotion/styled";
import PokemonCard from "./components/PokemonCard";
import History from "./components/History";
import Search from "./components/Search";
import ErrorMsg from "./components/ErrorMsg";

const MainContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  align-items: flex-start;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  },
`;

const HeaderDiv = styled.div`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppDiv = styled.div`
  text-align: center;
`

function App() {

  return (
    <AppDiv>
      <HeaderDiv>
        <Search />
      </HeaderDiv>
      <MainContainerDiv>
        <ErrorMsg />
        <PokemonCard />
        <History />
      </MainContainerDiv>
    </AppDiv>
  );
}

export default App;
