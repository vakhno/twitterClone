import { Grid, Typography, makeStyles, Container, InputBase, Paper } from '@material-ui/core'
import React from 'react'

import { createStyles, withStyles } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';
import { Tweet } from '../components/Tweet/Tweet'
import { SideMenu } from '../components/SideMenu/SideMenu';

export const homeStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100vh'
  },
  logo: {
    margin: '10px 0'
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    listStyle: 'none',
    width: '100%',
    padding: 0,
    margin: 0,
    maxWidth: 230,
  },
  sideMenuListItem: {
    cursor: 'pointer',
    '&:hover': {
      '& div': {
        backgroundColor: 'rgba(29, 161, 242, 0.1)',
        '& h6': {
          color: theme.palette.primary.main,
        },
        '& svg': {
          fill: theme.palette.primary.main,
        },
      }
    },
    '& div': {
      posiiton: 'relative',
      height: 50,
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 25px 0 20px',
      borderRadius: 30,
      marginBottom: 10,
      transition: 'background-color 0.15s ease-in-out'
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 14,
  },
  sideMenuListItemIcon: {
    fontSize: 28,
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderBottom: 0,
    borderTop: 0,
  },
  tweetsWrapperHeader: {
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    borderRadius: 0,
    padding: '10px 15px',
  },
  '& h6': {
    fontWeight: 800,
  },
  twetsUserName: {
    color: grey[500],
  },
  tweetFooterIcons: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    left: -13,
  },
  tweet:{
    paddintTop: 15,
    paddintLeft: 20,
   '&:hover': {
     cursor: 'pointer',
     backgroundColor: 'rgb(245, 248, 250)'
   } 
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(3),
  }
}))

const SearchTextField = withStyles(() => 
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: '#E6ECF0',
      height: 45,
      padding: 0,
    }
  })
)(InputBase);

export const Home: React.FC = (): React.ReactElement => {
  const classes = homeStyles();

  return (
      <Container maxWidth='lg' className={classes.wrapper}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <SideMenu classes={classes}/>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.tweetsWrapper} variant='outlined'>
              <Paper className={classes.tweetsWrapperHeader} variant='outlined'>
                <Typography variant='h6'>Главная</Typography>
              </Paper>
              {
                [...new Array(20).fill(
              
              <Tweet
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam culpa, error vero quas unde nobis vel nemo consequuntur delectus, tempora dolorem dignissimos soluta illo ad esse in alias saepe.'
                classes={classes}
                user={{
                  fullName: 'Glafira Shur',
                  userName: 'GlafiraShur',
                  tweetTime: '1 ч.',
                  avatarUrl: 'https://media.istockphoto.com/photos/excited-woman-wearing-rainbow-cardigan-picture-id1327495437?k=20&m=1327495437&s=612x612&w=0&h=uYgb28tIs15a-rrnli1gqAiG9mBhazPrui9FRpqu9UM='
                }}
              />
              )]
              }
            </Paper>
          </Grid>
          <Grid item xs={3}>
              <SearchTextField
              placeholder='Поиск по Твиттеру'
              fullWidth/>
          </Grid>
        </Grid>
      </Container>
  )
}
