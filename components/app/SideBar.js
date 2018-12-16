import Link from 'next/link';
import styled from 'styled-components';
import { routes } from './routes';

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
      {routes.map(({ path, title }) => {
        return (
          <Link key={path} href={path}>
            <a>{title}</a>
          </Link>
        );
      })}
    </Wrapper>
  );
};
