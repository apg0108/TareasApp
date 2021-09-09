import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function DialogAlert(props: {id: number, delete: any, open: boolean, setOpen: any}) {  
    function HandleDelete() {
      props.delete(props.id);
      props.setOpen(false);
    };
    function handleClose() {
      props.setOpen(false);
    };
    return (
      <>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Eliminar Usuario"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Desea eliminar el usuario?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={HandleDelete} color="primary">
            Si
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
      </>
    );
}

export default DialogAlert;
