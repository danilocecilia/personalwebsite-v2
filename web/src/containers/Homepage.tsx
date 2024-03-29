import React from 'react'

import NavBar from './Navbar'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Portfolio from './Portfolio'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme: Theme) => ({
  about: {
    background: theme.palette.primary.main,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  socialIcons: {
    display: 'flex',
    width: '100%',
    maxWidth: '230px',
    justifyContent: 'space-between',

    [theme.breakpoints.up('md')]: {
      paddingLeft: '16px',
    },
    '& > a': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '60px',
      height: '60px',
      border: `2px solid ${theme.palette.primary.light}`,
      borderRadius: '50%',
      color: theme.palette.primary.contrastText,
    },
    '& > a:hover': {
      background: theme.palette.primary.light,
      color: theme.palette.primary.main,
      transition: '0.4s',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '400px',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },

    [theme.breakpoints.down('xs')]: {
      height: '500px',
    },
  },
  aboutMe: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: '16px',
    paddingRight: '16px',

    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  greetings: {
    display: 'flex',
    alignItems: 'baseline',

    [theme.breakpoints.down('xs')]: {
      '&>h3': {
        fontSize: '2rem',
      },
      '&>h1': {
        fontSize: '3rem',
      },
    },

    [theme.breakpoints.up('sm')]: {
      '&>h3': {
        fontSize: '3rem',
      },
      '&>h1': {
        fontSize: '4rem',
      },
    },

    [theme.breakpoints.up('md')]: {
      '&>h3': {
        fontSize: '4rem',
      },
      '&>h1': {
        fontSize: '6rem',
      },
    },

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      flexWrap: 'wrap',
    },

    '&>h3': {
      paddingRight: '1rem',
    },
    '&>h1': {
      fontWeight: '400',
    },
  },
  myPortfolio: {
    textAlign: 'center',
    width: '180px',

    '& > a': {
      display: 'block',
      border: `2px solid ${theme.palette.primary.light}`,
      padding: '1rem',
      borderRadius: '30px',

      '&:hover': {
        textDecoration: 'none',
        background: theme.palette.primary.light,
        color: theme.palette.primary.main,
        transition: '0.4s',
      },
    },
  },
}))

export function HomePage(): JSX.Element {
  const Home = () => {
    const classes = useStyles()
    return (
      <section className={classes.about}>
        <Container className={classes.container}>
          <Box component="div" className={classes.socialIcons}>
            <Link href="https://github.com/danilocecilia">
              <GitHubIcon />
            </Link>
            <Link href="#">
              <LinkedInIcon />
            </Link>
            <Link href="#">
              <InstagramIcon />
            </Link>
          </Box>

          <Box className={classes.aboutMe} component="div">
            <div className={classes.greetings}>
              <Typography variant="h3">Hi, I am</Typography>
              <Typography variant="h1">Danilo Cecilia</Typography>
            </div>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              accusamus quo ipsam mollitia sit, velit fuga veniam quia
              consectetur inventore, quis iste reprehenderit quod doloribus,
              libero nam laudantium vero dolorem?
            </Typography>
          </Box>
          <Typography variant="subtitle1" className={classes.myPortfolio}>
            <Link href="#portfolio">My Portfolio</Link>
          </Typography>
        </Container>
      </section>
    )
  }

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  )
}
