import styled from 'styled-components';
import { Nav } from 'libs/shared-components/src';
import { Layout } from 'libs/shared-components/src';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <>
      <Nav />
      <Layout>
        <h1>Home</h1>
        <h2>This is home</h2>
      </Layout>
    </>
  );
}

export default Index;
