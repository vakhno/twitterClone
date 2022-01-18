import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import ImageIcon from '@material-ui/icons/ImageOutlined';
import {homeStyles} from '../../pages/Home'
import React from 'react'
import classNames from 'classnames'


interface AddTweetFormProps {
  classes: ReturnType<typeof homeStyles>;
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({classes}: AddTweetFormProps): React.ReactElement => {
  return (
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
  )
}
