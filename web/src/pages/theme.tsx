import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: '30pt',
      fontWeight: 'bold',
      marginBottom: '2rem',
      textTransform: 'uppercase',
    },
  },
  overrides: {
    MuiTypography: {
      colorPrimary: {
        color: '#fff',
      },
    },
  },
  palette: {
    background: {
      default: '#1F2235',
    },
    text: {
      primary: '#fff',
    },
    primary: {
      light: '#80F2DB', // Light Green
      main: '#25263b', // Purple
      dark: '#1F2235', // Dark Bl
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#23263a',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
})

export default theme
