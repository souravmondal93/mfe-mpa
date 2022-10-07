import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  Flex,
} from '@chakra-ui/react';

/* eslint-disable-next-line */
// export interface LayoutProps {}

export function Layout(props: any) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Flex align="center" justify="right" direction="column">
          {props.children}
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default Layout;
