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
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon}/>
          <Typography variant='h6' className={classes.sideMenuListItemLabel}>Поиск</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationIcon className={classes.sideMenuListItemIcon}/>
          <Typography variant='h6' className={classes.sideMenuListItemLabel}>Уведомления</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MessageIcon className={classes.sideMenuListItemIcon}/>
          <Typography variant='h6' className={classes.sideMenuListItemLabel}>Сообщения</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MarkIcon className={classes.sideMenuListItemIcon}/>
          <Typography variant='h6' className={classes.sideMenuListItemLabel}>Закладки</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListIcon className={classes.sideMenuListItemIcon}/>
          <Typography variant='h6' className={classes.sideMenuListItemLabel}>Список</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <UserIcon className={classes.sideMenuListItemIcon}/>
          <Typography variant='h6' className={classes.sideMenuListItemLabel}>Профиль</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MoreIcon className={classes.sideMenuListItemIcon}/>
          <Typography variant='h6' className={classes.sideMenuListItemLabel}>Еще</Typography>
        </div>
      </li>
    </ul>
  )
}
