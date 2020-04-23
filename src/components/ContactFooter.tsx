import React from 'react'
import { Typography, makeStyles, createStyles } from '@material-ui/core'
import { appName, links } from '../constants'
import { DisplayPhoto } from '../assets'
import ContactLink from './ContactLink'

const useStyles = makeStyles((theme) =>
  createStyles({
    footerLayout: {
      display: 'grid',
      gridTemplateRows: 'repeat(2, auto)',
      gridGap: theme.spacing(2),
    },
    displayPhoto: {
      gridRow: '1/2',
      alignSelf: 'center',
      maxWidth: 'min(150px, 35vmin)',
      '-webkit-user-select': 'none',
      '-webkit-touch-callout': 'none',
    },
    linksWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gridRow: '2/-1',
    },
    linksHeader: {
      margin: theme.spacing(1, 0),
    },
    linkIcons: {
      marginLeft: theme.spacing(-1),
      margin: theme.spacing(1, 0),
    },
    [theme.breakpoints.up('md')]: {
      footerLayout: {
        display: 'grid',
        gridTemplateRows: 'auto',
        gridTemplateColumns: 'auto 1fr',
        gridGap: theme.spacing(4),
      },
      displayPhoto: {
        gridRow: '1/-1',
        gridColumn: '1/2',
        pointerEvents: 'none',
      },
      linksWrapper: {
        gridRow: '1/-1',
        gridColumn: '2/-1',
        alignSelf: 'center',
        margin: theme.spacing(2),
      },
    },
  }),
)

const ContactFooter = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footerLayout}>
      <img className={classes.displayPhoto} src={DisplayPhoto} alt={appName} />
      <section className={classes.linksWrapper}>
        <Typography className={classes.linksHeader} variant="h3">
          {'Find me elsewhere?'}
        </Typography>
        <span className={classes.linkIcons}>
          {links.map((link) => (
            <ContactLink key={link.name} {...link} />
          ))}
        </span>
      </section>
    </footer>
  )
}

export default ContactFooter
