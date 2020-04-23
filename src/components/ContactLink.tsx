import React from 'react'
import {
  makeStyles,
  createStyles,
  IconButton,
  Tooltip,
} from '@material-ui/core'
import { Contact } from '../types'

const useStyles = makeStyles((theme) =>
  createStyles({
    contactIcon: {
      marginRight: theme.spacing(1),
      padding: theme.spacing(1),
    },
  }),
)

const ContactLink = (props: Contact) => {
  const classes = useStyles()
  return (
    <Tooltip
      title={props.name}
      placement="top"
      arrow
      disableTouchListener={true}
    >
      <IconButton
        className={classes.contactIcon}
        href={props.link}
        target="_blank"
      >
        <img
          src={props.icon}
          alt={props.name}
        />
      </IconButton>
    </Tooltip>
  )
}

export default ContactLink
