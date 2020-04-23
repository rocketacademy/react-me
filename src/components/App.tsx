import React from 'react'
import { makeStyles, createStyles, CssBaseline } from '@material-ui/core'
import ContactFooter from './ContactFooter'
import BodyContent from './BodyContent'

const useStyles = makeStyles((theme) =>
  createStyles({
    mainLayout: {
      display: 'grid',
      gridTemplateRows: 'repeat(2, auto)',
      gridRowGap: theme.spacing(4),
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(8),
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    bodyLayout: {
      gridRow: '1/2',
    },
    contactLayout: {
      gridRow: '2/-1',
    },
    [theme.breakpoints.up('sm')]: {
      mainLayout: {
        margin: theme.spacing(6),
      },
    },
    [theme.breakpoints.up('md')]: {
      mainLayout: {
        margin: theme.spacing(8),
      },
    },
    [theme.breakpoints.up('lg')]: {
      mainLayout: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        marginLeft: '15%',
        marginRight: '30%',
      },
    },
  }),
)

const App = () => {
  const classes = useStyles()
  return (
    <main className={classes.mainLayout}>
      <CssBaseline />
      <section className={classes.bodyLayout}>
        <BodyContent />
      </section>
      <section className={classes.contactLayout}>
        <span>
          <ContactFooter />
        </span>
      </section>
    </main>
  )
}

export default App
