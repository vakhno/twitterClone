import { Grid, IconButton, Typography, makeStyles, Container, InputBase, Paper, Avatar } from '@material-ui/core'
import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/MessageOutlined';
import MarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import MoreIcon from '@material-ui/icons/MoreOutlined';

import { createStyles, withStyles } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';
import { Tweet } from '../components/Tweet/Tweet'
import { relative } from 'path/posix';


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
  },
  sideMenuListItem: {
    display: 'flex',
    alignItems: 'center',
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 14,
  },
  sideMenuListItemIcon: {
    fontSize: 25,
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
              <ul className={classes.sideMenuList}>
                <li className={classes.sideMenuListItem}>
                  <IconButton className={classes.logo} color="primary" aria-label="twitter-icon">
                    <TwitterIcon className={classes.logoIcon}/>
                  </IconButton>
                </li>
                <li className={classes.sideMenuListItem}>
                  <IconButton aria-label="search-icon">
                    <SearchIcon className={classes.sideMenuListItemIcon}/>
                  </IconButton>
                  <Typography variant='h6' className={classes.sideMenuListItemLabel}>Поиск</Typography>
                </li>
                <li className={classes.sideMenuListItem}>
                  <IconButton aria-label="notification-icon">
                    <NotificationIcon className={classes.sideMenuListItemIcon}/>
                  </IconButton>
                  <Typography variant='h6' className={classes.sideMenuListItemLabel}>Уведомления</Typography>
                </li>
                <li className={classes.sideMenuListItem}>
                  <IconButton aria-label="message-icon">
                    <MessageIcon className={classes.sideMenuListItemIcon}/>
                  </IconButton>
                  <Typography variant='h6' className={classes.sideMenuListItemLabel}>Сообщения</Typography>
                </li>
                <li className={classes.sideMenuListItem}>
                  <IconButton aria-label="mark-icon">
                    <MarkIcon className={classes.sideMenuListItemIcon}/>
                  </IconButton>
                  <Typography variant='h6' className={classes.sideMenuListItemLabel}>Закладки</Typography>
                </li>
                <li className={classes.sideMenuListItem}>
                  <IconButton aria-label="list-icon">
                    <ListIcon className={classes.sideMenuListItemIcon}/>
                  </IconButton>
                  <Typography variant='h6' className={classes.sideMenuListItemLabel}>Список</Typography>
                </li>
                <li className={classes.sideMenuListItem}>
                  <IconButton aria-label="user-icon">
                    <UserIcon className={classes.sideMenuListItemIcon}/>
                  </IconButton>
                  <Typography variant='h6' className={classes.sideMenuListItemLabel}>Профиль</Typography>
                </li>
                <li className={classes.sideMenuListItem}>
                  <IconButton aria-label="more-icon">
                    <MoreIcon className={classes.sideMenuListItemIcon}/>
                  </IconButton>
                  <Typography variant='h6' className={classes.sideMenuListItemLabel}>Еще</Typography>
                </li>
              </ul>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.tweetsWrapper} variant='outlined'>
              <Paper className={classes.tweetsWrapperHeader} variant='outlined'>
                <Typography variant='h6'>Главная</Typography>
              </Paper>
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
