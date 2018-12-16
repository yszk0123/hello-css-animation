import styled from 'styled-components';
import { ResetStyle } from './ResetStyle';
import { FullLayout } from './FullLayout';
import { SideBar } from './SideBar';
import { Main } from './Main';

export const Example = ({ children }) => {
  return (
    <>
      <FullLayout>
        <SideBar />
        <Main>{children}</Main>
      </FullLayout>
      <ResetStyle />
    </>
  );
};
