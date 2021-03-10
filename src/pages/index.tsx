import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <h1>Hello World!</h1>
    <GlobalStyles />
  </ThemeProvider>
);

export default IndexPage;
