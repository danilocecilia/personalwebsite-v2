import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#25263b',
    height: '100%',
    minHeight: '300px',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  skills: {
    paddingBottom: '2rem',
    '& h3': {
      fontSize: '30pt',
      fontWeight: '500',
    },
  },
  bar: {
    display: 'flex',
    width: '100%',
    background: '#7474742e',
    position: 'relative',
    marginBottom: '1rem',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  skill_item: {
    fontWeight: 600,
    fontSize: '14px',
    width: '100%',
    background: '#80f2db',
    maxWidth: '150px',
    color: '#131313',
    textAlign: 'center',
    padding: '0.2rem',
  },
  percentage: {
    background: '#55a1a7',

    '& > span': {
      display: 'flex',
      position: 'absolute',
      right: '12px',
      top: '0',
      fontSize: '18px',
    },
  },
}))

export default function Skills() {
  const classes = useStyles()

  return (
    <section id="skills" className={classes.root}>
      <Container>
        <Grid container>
          <Grid
            container
            item
            spacing={2}
            xs={12}
            md={6}
            className={classes.skills}>
            <Grid item md={12}>
              <Typography variant="subtitle1">I,M EXPERT ON</Typography>
            </Grid>

            <Grid item md={12}>
              <Typography variant="h3">Let,s Work Together</Typography>
            </Grid>

            <Grid item xs={12} md={9}>
              <Typography variant="subtitle1">
                Phasellus accumsan scelerisque dolor, quis mattis justo bibendum
                non. Nulla sollicitudin turpis in elementum varius. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid item md={12}>
              <Box component="div" className={classes.bar}>
                <Box component="div" className={classes.skill_item}>
                  JavaScript
                </Box>
                <Box
                  component="div"
                  style={{ width: 'calc(90% - 150px)' }}
                  className={classes.percentage}>
                  <Box component="span">90%</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box component="div" className={classes.bar}>
                <Box component="div" className={classes.skill_item}>
                  JavaScript
                </Box>
                <Box
                  component="div"
                  className={classes.percentage}
                  style={{ width: 'calc(40% - 150px)' }}>
                  <Box component="span">90%</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box component="div" className={classes.bar}>
                <Box component="div" className={classes.skill_item}>
                  JavaScript
                </Box>
                <Box
                  component="div"
                  style={{ width: 'calc(60% - 150px)' }}
                  className={classes.percentage}>
                  <Box component="span">90%</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box component="div" className={classes.bar}>
                <Box component="div" className={classes.skill_item}>
                  JavaScript
                </Box>
                <Box
                  component="div"
                  style={{ width: 'calc(80% - 150px)' }}
                  className={classes.percentage}>
                  <Box component="span">90%</Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
