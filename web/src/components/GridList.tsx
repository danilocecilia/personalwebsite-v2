import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'

const tileData = [
  {
    img: 'https://material-ui.com/static/images/grid-list/mushroom.jpg',
    title: 'Tasty burger',
    author: 'director90',
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/mushroom.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/mushroom.jpg',
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/mushroom.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/mushroom.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      // backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 700,
      marginLeft: '300px',
      // paddingLeft: '5rem',
      // paddingRight: '5rem',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  })
)

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg'
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarGridList() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} spacing={10}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile> */}
        {tileData.map((tile, index) => (
          <GridListTile key={index}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
