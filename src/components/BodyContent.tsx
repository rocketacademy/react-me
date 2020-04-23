import React from 'react'
import { Typography, makeStyles, createStyles } from '@material-ui/core'
import { greeting, name, aboutTextParagraphs, linkedInUrl } from '../constants'
import FocusedText from './FocusedText'

const useStyles = makeStyles((theme) =>
  createStyles({
    paragraph: {
      marginBottom: theme.spacing(4),
      '&::selection': {
        backgroundColor: 'rgba(166, 42, 23, 0.3)',
      },
      '&::-moz-selection': {
        backgroundColor: 'rgba(166, 42, 23, 0.3)',
      },
    },
  }),
)

const BodyContent = () => {
  const classes = useStyles()
  return (
    <main>
      <Typography className={classes.paragraph} variant="h1">
        {greeting}
      </Typography>
      <Typography className={classes.paragraph} variant="h3">
        {'My name is '}
        <FocusedText link={linkedInUrl}>{name}</FocusedText>
        {'.'}
      </Typography>
      {aboutTextParagraphs.map((aboutTextParagraph) => {
        return (
          <Typography
            className={classes.paragraph}
            key={aboutTextParagraph}
            variant="body1"
          >
            {aboutTextParagraph}
          </Typography>
        )
      })}
    </main>
  )
}

export default BodyContent
