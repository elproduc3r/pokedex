import { useSelector } from 'react-redux';
import styled from "@emotion/styled";
import { RootState } from '../store';

const ErrorMsgDiv = styled.div`
  width: 80%;
  text-align: center;
  background-color: #ecc9c9;
  border-radius: 10px;
`

const ErrorMsg = (): JSX.Element | null => {
  const {error} = useSelector((state: RootState) => state.search);
  return (
    error ? (
      <ErrorMsgDiv>
        <h3>{error}</h3>
      </ErrorMsgDiv>
    ) : null
  )
}

export default ErrorMsg;