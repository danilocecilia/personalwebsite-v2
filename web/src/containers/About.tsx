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
  },
  section_title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: theme.spacing(15),
    position: 'relative',

    '&::after': {
      content: '""',
      width: '70px',
      height: '3px',
      position: 'absolute',
      background: theme.palette.primary.light,
      top: '185px',
    },
  },
  section_content: {},
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
  },
  photo: {
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
              src="https://avatars.githubusercontent.com/u/2642530?s=460&u=9f7504dc61463e614cf7852c80c3167763504ac7&v=4"
              alt="Picture of the author"
              width={250}
              height={250}
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
