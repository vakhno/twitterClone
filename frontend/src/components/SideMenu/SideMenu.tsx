import { IconButton, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import {homeStyles} from '../../pages/Home'
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/MessageOutlined';
import MarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import MoreIcon from '@material-ui/icons/MoreOutlined';

interface SideMenuProps {
  classes: ReturnType<typeof homeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): ReactElement => {
  return (
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
  )
}
