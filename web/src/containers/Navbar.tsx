import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

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
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
    },
    '& > div > * + *': {
      marginLeft: theme.spacing(8),
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexGrow: 1,
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuMobile: {
    display: 'none',
    background: theme.palette.secondary.main,
    borderTop: `2px solid ${theme.palette.primary.light}`,

    '& .MuiCollapse-wrapperInner': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      lineHeight: '2',
      marginLeft: '2rem',
      padding: '1rem 0rem 1rem 0',

      '& h6': {
        marginBottom: '0.4rem',
      },
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
  },
  hireme: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))

export default function Navbar(): JSX.Element {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(!open)
  }

  const renderDesktopMenu = () => {
    return (
      <>
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
      </>
    )
  }

  const renderMobileNav = (): JSX.Element => {
    return (
      <div id="menu-mobile" className={classes.menuMobile}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Typography variant="h6" color="textSecondary">
            <Link href="#" onClick={handleMobileMenuOpen}>
              Home
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link href="#about" onClick={handleMobileMenuOpen}>
              About
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link href="#skills" onClick={handleMobileMenuOpen}>
              Skills
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link href="#portfolio" onClick={handleMobileMenuOpen}>
              Portfolio
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link href="#contact" onClick={handleMobileMenuOpen}>
              Contact
            </Link>
          </Typography>
          <div className={classes.grow}></div>
          <Link href="#" className={classes.hireme}>
            HIRE ME
          </Link>
        </Collapse>
      </div>
    )
  }

  return (
    <AppBar position="fixed" className={classes.nav}>
      <Container>
        <Toolbar className={classes.navItem}>
          <div className={classes.sectionDesktop}>{renderDesktopMenu()}</div>

          <div className={classes.sectionMobile}>
            <IconButton
              edge="start"
              aria-controls="menu-mobile"
              color="inherit"
              onClick={handleMobileMenuOpen}
              aria-label="open drawer">
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
        </Toolbar>
      </Container>
      {renderMobileNav()}
    </AppBar>
  )
}
