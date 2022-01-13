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
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';

import classNames from 'classnames';

import { createStyles, withStyles } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';

const homeStyles = makeStyles((theme) => ({
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
  },
  tweet:{
   '&:hover': {
     cursor: 'pointer',
     backgroundColor: 'rgb(245, 248, 250)'
   } 
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
              <Paper className={classNames(classes.tweetsWrapperHeader, classes.tweet)} variant='outlined'>
              <Grid container spacing={3}>
                <Grid item xs={1}>
                  <Avatar alt='User Avatar' src='https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'/>
                </Grid>
                <Grid item xs={11}>
                  <Typography><b>mxfLord</b> <span className={classes.twetsUserName}>@mxfLord</span></Typography>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet architecto illo eos exercitationem labore delectus nostrum sed hic, sapiente nulla dignissimos quibusdam quis, fugit rem temporibus saepe ipsam, nobis blanditiis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis nemo corporis ducimus cupiditate iste libero maiores sapiente corrupti soluta, possimus autem quibusdam quae temporibus nihil quasi dolores non voluptatem.
                  </Typography>
                  <div className={classes.tweetFooterIcons}>
                    <div>
                      <IconButton>
                        <CommentIcon style={{fontSize: 20}}/>
                      </IconButton>
                      <span>1</span>
                    </div>
                    <div>
                    <IconButton>
                      <RepeatIcon style={{fontSize: 20}}/>
                    </IconButton>
                  </div>
                  <div>
                    <IconButton>
                      <LikeIcon style={{fontSize: 20}}/>
                    </IconButton>
                  </div>
                  <div>
                    <IconButton>
                      <ShareIcon style={{fontSize: 20}}/>
                    </IconButton>
                  </div>
                  </div>
                </Grid>
              </Grid>
              </Paper>
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
