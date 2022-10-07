// import useLocalStorage from "libs/custom-hooks/src/lib/use-local-storage";
// import createPersistedState from 'use-persisted-state'
import { Button, useColorMode } from '@chakra-ui/react';
import { usePersistedState } from 'libs/custom-hooks/src/index';

/* eslint-disable-next-line */
export interface NavProps {}

export function Nav(props: NavProps) {
  // const [options, setOptions] = usePersistedState('options', {
  //   title: 'Dark Mode',
  //   enabled: 'on',
  // });

  function Toggle() {
    const { colorMode, toggleColorMode } = useColorMode();
    function doStuff() {
      toggleColorMode();
      // setOptions('options', { colorMode });
    }
    return <Button size="lg" onClick={doStuff}></Button>;
  }
  return (
    <>
      <a href="/">Home</a> |<a href="/checkout">Checkout</a> | <Toggle />
    </>
  );
}

export default Nav;
