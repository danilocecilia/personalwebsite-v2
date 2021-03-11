import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  nav: {
    background: theme.palette.primary.dark,
    '& a': {
      color: '#d5d5d5',
      fontWeight: '400',
      '&:hover': {
        textDecoration: 'none',
        color: theme.palette.primary.light,
        transition: '0.3s',
      },
    },
  },
  navItem: {
    '& > * + *': {
      marginLeft: theme.spacing(8),
    },
  },
  hireme: {},
}))

export default function Navbar(): JSX.Element {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.nav}>
      <Container>
        <Toolbar className={classes.navItem}>
          <Typography variant="h6" color="textSecondary">
            <Link href="#">Home</Link>
          </Typography>
          <Typography variant="h6">
            <Link href="#about">About</Link>
          </Typography>
          <Typography variant="h6">
            <Link href="#skills">Skills</Link>
          </Typography>
          <Typography variant="h6">
            <Link href="#portfolio">Portfolio</Link>
          </Typography>
          <Typography variant="h6">
            <Link href="#contact">Contact</Link>
          </Typography>
          <div className={classes.grow}></div>
          <Link href="#" className={classes.hireme}>
            HIRE ME
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
