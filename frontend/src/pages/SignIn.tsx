import { Button, makeStyles, Typography } from "@material-ui/core"
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh'
  },
  leftContainer: {
    position: 'relative',
    backgroundColor: '#71C9F8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
    overflow: 'hidden'
  },
  leftContainerBackgroundImage: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '350%',
    height: '350%',
  },
  leftContainerListInfo: {
    position: 'relative',
    listStyle: 'none',
    width: 380,
    fontSize: 20,
    padding: 0,
    margin: 0,
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700
    }
  },
  leftContainerListInfoItem: {
    marginBottom: 40,
  },
  leftContainerListInfoIcon: {
    fontSise: 32,
    marginRight: 14
  },
  rightContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
    overflow: 'hidden'
  },
  rightContainerTwitterIcon: {
    fontSize: 46,
    marginBottom: 20
  },
  rightContainerWrapper: {
    width: 380,
  },
  rightContainerTitle: {
    fontWeight: 800,
    fontSize: 32,
    marginBottom: 60
  }
}))

function SignIn() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <section className={classes.leftContainer}>
        <TwitterIcon color="primary" className={classes.leftContainerBackgroundImage}/>
        <ul className={classes.leftContainerListInfo}>
          <li className={classes.leftContainerListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.leftContainerListInfoIcon}/>
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li className={classes.leftContainerListInfoItem}>
            <Typography variant="h6">
              <PeopleOutlineIcon className={classes.leftContainerListInfoIcon}/>
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li className={classes.leftContainerListInfoItem}>
            <Typography variant="h6">
              <ChatBubbleOutlineOutlinedIcon className={classes.leftContainerListInfoIcon}/>
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.rightContainer}>
        <div className={classes.rightContainerWrapper}>
          <TwitterIcon color="primary" className={classes.rightContainerTwitterIcon}/>
          <Typography className={classes.rightContainerTitle} variant="h4">
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <br/>
          <Button style={{marginBottom: 12}} variant="contained" color="primary" fullWidth>
            Зарегистрироваться
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            Войти
          </Button>
        </div>
      </section>
    </div>
  )
}

export default SignIn
