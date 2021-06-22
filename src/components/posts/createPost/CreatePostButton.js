import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    fabButton: {
        position: 'absolute',
        zIndex: 1,
        bottom: 70,
        right: 30,
        margin: '0 auto',
    },
});

const CreatePostButton = () => {
    const classes = useStyles();
    return (

        <Fab color="primary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
        </Fab>

    )
}

export default CreatePostButton
