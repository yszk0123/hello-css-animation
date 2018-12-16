import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 240px;
  left: 0;
  position: relative;
  top: 0;
  opacity: 0.5;
  background: black;
  color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;

  a {
    color: currentColor;
  }
`;

export const SideBar = () => {
  return (
    <Wrapper>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/example">
        <a>Example</a>
      </Link>
      <Link href="/bounce-box">
        <a>Bounce Box</a>
      </Link>
    </Wrapper>
  );
};
