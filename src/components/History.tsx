import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { CharacterType, setCurrentPokemon } from "../features/Search/search.slice";
import { RootState } from "../store";

const HistoryContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 300px;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  margin: 1rem;
  h3 {
    margin-top: 0;
  }
`;

const ListContainerDiv = styled.div`
  height: 100%;
  overflow-y: auto;
  background-color: white;
  border-radius: 10px;
`;

const History = () => {

  const {history} = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  const findRecentPokemon = (name: string) => {
    const selectedPokemon = history.find(character => character.name === name);
    if(selectedPokemon) {
      dispatch(setCurrentPokemon(selectedPokemon));
    }
  }

  return (
    <HistoryContainerDiv>
      <h3>Recent Searches</h3>
      <ListContainerDiv>
        <ul>
          {
            history.map(({name}: CharacterType, index: Number) => (
              <li style={{textAlign: "left"}} key={`${index}-${name}`}>
                <a onClick={() => {findRecentPokemon(name)}} href={`#${name}`}>{name}</a>
              </li>
            ))
          }
        </ul>
      </ListContainerDiv>
    </HistoryContainerDiv>
  )
};

export default History;