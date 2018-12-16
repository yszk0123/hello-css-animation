import styled, { keyframes } from 'styled-components';
import { Example, CenterLayout } from '../components/app';

const bounce = keyframes`
  0% {
    min-width: 100%;
    min-height: 100%;
  }
  50% {
    min-width: 90%;
    min-height: 90%;
  }
  100% {
    min-width: 120%;
    min-height: 120%;
  }
`;

const Box = styled.div`
  background: green;
  min-width: 100%;
  min-height: 100%;
  cursor: pointer;
`;

const BoxContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover > ${Box} {
    animation-name: ${bounce};
    animation-duration: 0.3s;
    animation-timing-function: ease-out, ease-in;
    /* animation-fill-mode: both; */
  }
`;

export default () => (
  <Example>
    <CenterLayout>
      <BoxContainer>
        <Box />
      </BoxContainer>
    </CenterLayout>
  </Example>
);
