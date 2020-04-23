import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      text: {
        primary: 'rgb(98, 50, 50)',
      },
    },
    typography: {
      fontFamily: ['Avenir'].join(', '),
      fontSize: 18,
      htmlFontSize: 18,
      h1: {
        fontWeight: 900,
        fontSize: '3.65rem',
        letterSpacing: '-0.01562em',
      },
      h2: {
        fontWeight: 600,
        fontSize: '2.15rem',
        letterSpacing: '-0.00833em',
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.85rem',
        letterSpacing: '0em',
      },
      body1: {
        fontSize: '1.35rem',
        letterSpacing: '0.00938em',
      },
      button: {
        textTransform: 'none',
      },
    },
    overrides: {
      MuiTooltip: {
        tooltip: {
          backgroundColor: 'rgba(166, 42, 23)',
          fontSize: '0.85rem',
          lineHeight: 1.75,
          letterSpacing: '0.00938em',
        },
        arrow: {
          color: 'rgba(166, 42, 23)',
        },
      },
    },
  }),
)

export default theme
