import { Grid, Paper, IconButton, Typography, makeStyles, Container } from '@material-ui/core'
import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/MessageOutlined';
import MarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import MoreIcon from '@material-ui/icons/MoreOutlined';

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
  }
}))

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
              2
          </Grid>
          <Grid item xs={3}>
              3
          </Grid>
        </Grid>
      </Container>
  )
}
