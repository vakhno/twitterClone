import { Button, DialogActions, Dialog, DialogContent, DialogTitle, IconButton} from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import {useStylesSignIn} from '../../pages/SignIn';

interface ModalBlockProps {
  title: string;
  children: React.ReactNode;
  classes?: ReturnType<typeof useStylesSignIn>;
  visible?: boolean;
  onClose: () => void;
}

export const ModalBlock: React.FC<ModalBlockProps> = ({title, onClose, visible=false, children}: ModalBlockProps): React.ReactElement => {
  return (
    <Dialog open={visible} onClose={onClose}>
    <DialogTitle id="form-dialog-title">
      <IconButton
        onClick={onClose}
        color="secondary"
        aria-label="close">
          <CloseIcon style={{fontSize: 26}} color="secondary"/>
      </IconButton>
      {title}
    </DialogTitle>
    <DialogContent>
      {children}
    </DialogContent>
  </Dialog>
  )
}
