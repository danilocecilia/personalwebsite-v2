import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import GridList from '../components/GridList'
import useMediaQuery from '@material-ui/core/useMediaQuery'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

const a11yProps = (index: any) => {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}

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
    height: 'calc(100vh - 64px)',
  },
  portfolio: {
    flexGrow: 1,
    display: 'flex',
    height: 224,
    justifyContent: 'center',
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: '100%',
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.primary.light}`,
    marginRight: '1rem',

    [theme.breakpoints.down('sm')]: {
      borderRight: 'unset',
      marginRight: 'unset',
      overflow: 'unset',
      minHeight: 'unset',

      '& > div': {
        marginBottom: '1rem',
      },

      '& .MuiTabs-flexContainer': {
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },
  },
  section_title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // paddingBottom: theme.spacing(15),

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
}))

export default function Portfolio(): JSX.Element {
  const theme = useTheme()
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const matches = useMediaQuery(theme.breakpoints.up('md'))

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <section id="portfolio" className={classes.root}>
      <Container className={classes.container}>
        <Grid container>
          <Grid item container xs={12} className={classes.section_title}>
            <Typography variant="h2">Portfolio</Typography>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.portfolio}>
              <Tabs
                orientation={matches ? 'vertical' : 'horizontal'}
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}>
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <GridList />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <GridList />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <GridList />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <GridList />
              </TabPanel>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
