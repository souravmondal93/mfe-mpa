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
      <Layout>
        <Nav />
        <h1>Checkout</h1>
      </Layout>
    </>
  );
}

export default Index;
