import React from 'react'
import { IconButton, Typography, Paper, Avatar } from '@material-ui/core'

import { homeStyles } from '../../pages/Home'

import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';

import classNames from 'classnames';

interface TweetProps {
  text: string;
  classes: ReturnType<typeof homeStyles>;
  user: {
    fullName: string;
    userName: string;
    tweetTime: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({classes, text, user}: TweetProps): React.ReactElement => {
  return (
    <Paper className={classNames(classes.tweetsWrapperHeader, classes.tweet)} variant='outlined'>
      <Avatar alt='User Avatar' src={user.avatarUrl} className={classes.tweetAvatar}/>
      <div>
        <Typography>
          <b>{user.fullName}</b>&nbsp;
          <span className={classes.twetsUserName}>@{user.userName}</span>&nbsp;
          <span className={classes.twetsUserName}>·</span>&nbsp;
          <span className={classes.twetsUserName}>{user.tweetTime}</span>
        </Typography>
        <Typography>
          {text}
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
      </div>
    </Paper>
  )
}
