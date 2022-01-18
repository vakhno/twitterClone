import { TextField, IconButton, ListItem, Divider, Avatar, ListItemText, List, TextareaAutosize, CircularProgress, Grid, Typography, makeStyles, Container, InputBase, Paper, Button, } from '@material-ui/core'
import React from 'react'

import classNames from 'classnames';

import { createStyles, withStyles } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';
import { Tweet } from '../components/Tweet/Tweet'
import { SideMenu } from '../components/SideMenu/SideMenu';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import ImageIcon from '@material-ui/icons/ImageOutlined';
import theme from '../theme';

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
    position: 'sticky',
    top: 0,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
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
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0',
    borderRadius: 0,
    padding: '10px 15px',
    '& h6': {
      fontWeight: 800,
    },
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
    maxWidth: 450,
  },
  tweet:{
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'flex-start',
    paddintTop: 15,
    paddintLeft: 20,
   '&:hover': {
     backgroundColor: 'rgb(245, 248, 250)'
   } 
  },
  tweetAvatar: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
    marginRight: 15,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(3),
  },
  rightSide: {
    paddingTop: 20,
    position: 'sticky',
    top: 0,
  },
  addForm: {
    padding: 20,
  },
  addFormBody: {
    display: 'flex',
    width: '100%',
  },
  addFormBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addFormBottomActions: {
    marginTop: 10,
    paddingLeft: 70,
  },
  addFormTextarea: {
    width: '100%',
    border: 0,
    fontSize: 20,
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'none',
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: '#E6ECF0',
  },
  addFormCircleProgress: {
    position: 'relative',
    width: 20,
    height: 20,
    margin: '0 10px',
    '& .MuiCircularProgress-root': {
      position: 'absolute',
    },
  },
  addFormBottomRight: {
    display: 'flex',
    alignItems: 'center',
  },
}))

const SearchTextField = withStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 30,
      backgroundColor: '#E6ECF0',
      padding: 0,
      paddingLeft: 15,
      '& .Mui-focused': {
        backgroundColor: '#fff',
        '& fieldset': { 
          borderWidth: 1, borderColor: theme.palette.primary.main 
        },
        '& svg path': {
          fill: theme.palette.primary.main,
        },
      },
      '&:hover': {
        '& fieldset': { 
          borderColor: 'transparent' 
        },
      },
      '& fieldset': {
        borderColor: 'transparent',
        borderWidth: 1,
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '12px 14px 14px 5px',
    },
  },
}))(TextField);


export const Home: React.FC = (): React.ReactElement => {
  const classes = homeStyles();

  return (
      <Container maxWidth='lg' className={classes.wrapper}>
        <Grid container spacing={3} style={{justifyContent:'center'}}>
          <Grid item sm={1} md={3}>
            <SideMenu classes={classes}/>
          </Grid>
          <Grid item sm={8} md={6}>
            <Paper className={classes.tweetsWrapper} variant='outlined'>
              <Paper style={{position: 'sticky', top: 0, backgroundColor: '#fff', opacity: 1, zIndex: 100}} className={classes.tweetsWrapperHeader} variant='outlined'>
                <Typography variant='h6'>Главная</Typography>
              </Paper>
              <Paper>
                <div className={classes.addForm}>
                  <div className={classes.addFormBody}>
                    <Avatar
                      className={classes.tweetAvatar}
                      alt={'User Avatar'}
                      src='https://media.istockphoto.com/photos/young-man-is-playing-with-a-dog-and-do-selfie-picture-id1300658241?b=1&k=20&m=1300658241&s=170667a&w=0&h=0lrTViinfnDjbWDgxV0TDDSAXvzSgmrN-pKq0q60hqA='
                    />
                    <TextareaAutosize
                      className={classes.addFormTextarea}
                      placeholder={'Tweet textarea'}
                    />
                  </div>
                  <div className={classes.addFormBottom}>
                    <div className={classNames(classes.tweetFooterIcons, classes.addFormBottomActions)}>
                      <IconButton color='primary'>
                        <ImageIcon style={{fontSize: 20}}/>
                      </IconButton>
                      <IconButton color='primary'>
                        <EmojiIcon style={{fontSize: 20}}/>
                      </IconButton>
                    </div>
                    <div className={classes.addFormBottomRight}>
                      <span>280</span>
                      <div className={classes.addFormCircleProgress}>
                        <CircularProgress 
                          variant='static' 
                          size={20}
                          thickness={5}
                          value={18}/>
                        <CircularProgress 
                          style={{color:'rgba(0, 0, 0, 0.1)'}}
                          variant='static'
                          size={20}
                          thickness={4}
                          value={100}
                        />
                      </div>
                      <Button color='primary' variant='contained'>
                        Твитнуть
                      </Button>
                    </div>
                  </div>
                </div>
                <div className={classes.addFormBottomLine}/>
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
                  avatarUrl: 'https://media.c.com/photos/excited-woman-wearing-rainbow-cardigan-picture-id1327495437?k=20&m=1327495437&s=612x612&w=0&h=uYgb28tIs15a-rrnli1gqAiG9mBhazPrui9FRpqu9UM='
                }}
              />
              )]
              }
            </Paper>
          </Grid>
          <Grid item sm={3} md={3}>
            <div className={classes.rightSide}>
              <SearchTextField
              placeholder='Поиск по Твиттеру'
              fullWidth/>
            </div>
          </Grid>
        </Grid>
      </Container>
  )
}
