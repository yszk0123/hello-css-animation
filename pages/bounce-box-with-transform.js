import styled, { keyframes } from 'styled-components';
import { Example, CenterLayout } from '../components/app';

const DURATION = '0.3s';

const bounce = keyframes`
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1) rotate(10deg);
  }
  100% {
    transform: scale(1.2);
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
    animation-duration: ${DURATION};
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
