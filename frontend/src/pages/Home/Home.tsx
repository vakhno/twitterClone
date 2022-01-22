import { TextField, ListItemAvatar, InputAdornment, ListItem, Divider, Avatar, ListItemText, List, TextareaAutosize, CircularProgress, Grid, Typography, makeStyles, Container, Paper, Button, } from '@material-ui/core'
import React from 'react'

import { withStyles } from '@material-ui/styles';
import { Tweet } from '../../components/Tweet/Tweet'
import { SideMenu } from '../../components/SideMenu/SideMenu';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddRounded';
import { AddTweetForm } from '../../components/AddTweetForm/AddTweetForm';
import { homeStyles } from './theme';

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
                <AddTweetForm classes={classes}/>
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
              variant='outlined'
              placeholder='Поиск по Твиттеру'
              fullWidth
              inputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon/>
                  </InputAdornment>
                )
              }}
               />
              <Paper className={classes.rightSideBlock}>
                <Paper className={classes.rightSideBlockHeader}>
                  <b>Актуальные темы</b>
                </Paper>
                <List>
                  <ListItem className={classes.rightSideBlockItem}>
                    <ListItemText
                      primary='Одесса'
                      secondary={
                        <Typography component='span' variant='body2'>
                          Твитов: 3 332
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider component='li'/>
                  <ListItem className={classes.rightSideBlockItem}>
                    <ListItemText
                      primary='Киев'
                      secondary={
                        <Typography component='span' variant='body2'>
                          Твитов: 9 562
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider component='li'/>
                  <ListItem className={classes.rightSideBlockItem}>
                    <ListItemText
                      primary='Львов'
                      secondary={
                        <Typography component='span' variant='body2'>
                          Твитов: 5 288
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider component='li'/>
                </List>
              </Paper>
              <Paper className={classes.rightSideBlock}>
                <Paper className={classes.rightSideBlockHeader} variant='outlined'>
                  <b>Кого читать</b>
                </Paper>
                <List>
                  <ListItem className={classes.rightSideBlockItem}>
                    <ListItemAvatar>
                      <Avatar
                        alt="Andrey Veliki"
                        src='https://media.istockphoto.com/photos/young-man-with-backpack-taking-selfie-portrait-on-a-mountain-smiling-picture-id1329031407?b=1&k=20&m=1329031407&s=170667a&w=0&h=J6qRqj9hbKtSVwIfMJhcRXf3AEyAOshph2IAbPHwNUo='
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary='Veliki Hear'
                      secondary={
                        <Typography component='span' variant='body2'>
                          @veilikiHear
                        </Typography>
                      }
                    />
                    <Button>
                      <PersonAddIcon/>
                    </Button>
                  </ListItem>
                  <Divider component='li'/>
                </List>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Container>
  )
}
