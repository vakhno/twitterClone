import { useState } from "react";
import { Button, makeStyles, Typography, FormGroup, FormControl, TextField} from "@material-ui/core"
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import {ModalBlock} from '../components/ModalBlock/ModalBlock';

export const useStylesSignIn = makeStyles((theme) => ({
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
  },
  loginFormField: {
    marginBottom: theme.spacing(2),
  }
}))

function SignIn() {
  const classes = useStylesSignIn();
  const [visibleSignInModal, setVisibleSignInModal] = useState(false);
  const [visibleSignUpModal, setVisibleSignUpModal] = useState(false);

  const handleClickClose = () => {
    visibleSignInModal ? setVisibleSignInModal(false) : setVisibleSignUpModal(false);
  }

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
          <Button onClick={() => setVisibleSignUpModal(true)} style={{marginBottom: 12}} variant="contained" color="primary" fullWidth>
            Зарегистрироваться
          </Button>
          <Button onClick={() => setVisibleSignInModal(true)} variant="outlined" color="primary" fullWidth>
            Войти
          </Button>
        </div>
      </section>
      <ModalBlock
        title="Создайте учетную запись"
        classes={classes}
        onClose={handleClickClose}
        visible={visibleSignUpModal}>
      <FormControl component="fieldset" fullWidth>
        <FormGroup aria-label="position" row>
          <TextField
          className={classes.loginFormField}
          autoFocus
          margin="normal"
          id="name"
          label="Имя"
          type="text"
          fullWidth/>
          <TextField
          className={classes.loginFormField}
          margin="normal"
          id="email"
          label="E-Mail"
          type="email"
          fullWidth/>
          <TextField
          margin="normal"
          id="password"
          label="Пароль"
          type="password"
          fullWidth/>
          <Button onClick={handleClickClose} variant="contained" color="primary" fullWidth>
            Далее
          </Button>
        </FormGroup>
      </FormControl>
      </ModalBlock>
      <ModalBlock
        title="Войти в твиттер"
        classes={classes}
        onClose={handleClickClose}
        visible={visibleSignInModal}>
      <FormControl component="fieldset" fullWidth>
        <FormGroup aria-label="position" row>
          <TextField
          className={classes.loginFormField}
          autoFocus
          margin="normal"
          id="email"
          label="E-Mail"
          type="email"
          fullWidth/>
          <TextField
          margin="normal"
          id="password"
          label="Пароль"
          type="password"
          fullWidth/>
          <Button onClick={handleClickClose} variant="contained" color="primary" fullWidth>
            Войти
          </Button>
        </FormGroup>
      </FormControl>
      </ModalBlock>
    </div>
  )
}

export default SignIn
