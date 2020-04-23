import React, { ReactNode } from 'react'
import { Link, makeStyles, createStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    highlightedText: {
      position: 'relative',
      '&::after': {
        content: `''`,
        position: 'absolute',
        zIndex: -1,
        top: '60%',
        left: '-0.1em',
        right: '-0.1em',
        bottom: 0,
        transition: 'top 200ms cubic-bezier(0, .8, .13, 1)',
        backgroundColor: 'rgba(166, 42, 23, 0.3)',
      },
      '&::selection': {
        backgroundColor: 'rgba(166, 42, 23, 0.3)',
      },
      '&::-moz-selection': {
        backgroundColor: 'rgba(166, 42, 23, 0.3)',
      },
      '&:hover': {
        '&::after': {
          content: `''`,
          position: 'absolute',
          zIndex: -1,
          top: '0%',
          left: '-0.1em',
          right: '-0.1em',
          bottom: 0,
          transition: 'top 200ms cubic-bezier(0, .8, .13, 1)',
          backgroundColor: 'rgba(166, 42, 23, 0.3)',
        },
      },
    },
  }),
)

interface FocusedTextProps {
  link: string
  children: ReactNode
  variant?:
    | 'inherit'
    | 'button'
    | 'overline'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'srOnly'
    | undefined
}

const FocusedText = (props: FocusedTextProps) => {
  const classes = useStyles()
  return (
    <Link
      href={props.link}
      className={classes.highlightedText}
      underline="none"
      color="inherit"
      target="_blank"
      variant={props.variant ?? 'inherit'}
    >
      {props.children}
    </Link>
  )
}

export default FocusedText
