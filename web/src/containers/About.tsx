import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Image from 'next/image'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    minHeight: '300px',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  section_title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: theme.spacing(15),
    position: 'relative',

    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(10),
    },

    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(10),
    },

    '&::after': {
      content: '""',
      width: '70px',
      height: '3px',
      position: 'absolute',
      background: theme.palette.primary.light,
      top: '185px',

      [theme.breakpoints.down('xs')]: {
        top: '230px',
      },
    },
  },
  section_content: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  text_content: {
    '& h3': {
      fontSize: '20px',
      color: theme.palette.primary.light,
      fontWeight: '700',
    },
    '& span': {
      fontSize: '18px',
      lineHeight: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '3rem',
      height: '300px',
    },
  },
  photo: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    textAlign: 'center',
  },
}))

export default function About() {
  const classes = useStyles()

  return (
    <section id="about" className={classes.root}>
      <Container className={classes.container}>
        <Grid container item xs={12} md={6} className={classes.section_title}>
          <Typography variant="h2">About Me</Typography>
          <Typography variant="subtitle1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            dicta, repudiandae temporibus ex dolores corrupti voluptatibus fuga
            ea, impedit ad sint eaque
          </Typography>
        </Grid>
        <Grid container className={classes.section_content}>
          <Grid item xs={5} className={classes.photo}>
            <Image
              src="/danilo_cecilia.png"
              alt="Danilo Cecilia"
              width={311}
              height={397}
            />
          </Grid>

          <Grid container item xs={12} md={7} className={classes.text_content}>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis dicta, repudiandae temporibus ex dolores corrupti
                voluptatibus fuga ea, impedit ad sint eaque
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3">Name:</Typography>
              <span>Danilo Cecilia</span>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3">Email:</Typography>
              <span>danilo.cecilia@gmail.com</span>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">LinkedIn:</Typography>
              <span>Danilo Cecilia</span>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
