import { Container } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#25263b',
      paddingTop: theme.spacing(10),
    },
    inputs: {
      '& > *': {
        marginBottom: theme.spacing(2),
      },
    },
    container: {
      maxWidth: '600px',
    },
    section_title: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      paddingBottom: theme.spacing(10),

      '& span': {
        textTransform: 'uppercase',
        color: theme.palette.primary.light,
        fontWeight: '500',
        marginBottom: '1rem',
      },

      '& h2::after': {
        content: '""',
        width: '70px',
        height: '3px',
        background: theme.palette.primary.light,
        top: '185px',
        display: 'flex',
        margin: '0 auto',
        marginTop: '1rem',
      },
    },
  })
)

export default function Contact() {
  const classes = useStyles()

  return (
    <section id="contact" className={classes.root}>
      <Container className={classes.container}>
        <Grid container>
          <Grid item container className={classes.section_title}>
            <Box component="span">Have any question?</Box>
            <Typography variant="h2">Contact Me</Typography>
            <Typography variant="subtitle1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis
            </Typography>
          </Grid>
        </Grid>
        <form noValidate className={classes.inputs} autoComplete="off">
          <TextField
            id="filled-full-width"
            label="Name"
            fullWidth
            variant="filled"
          />

          <TextField
            fullWidth
            id="filled-basic"
            label="Email"
            variant="filled"
          />

          <TextField
            id="filled-textarea"
            label="How can I help?"
            rows={5}
            multiline
            fullWidth
            variant="filled"
          />
        </form>
      </Container>
    </section>
  )
}
