import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DraftsRoundedIcon from '@material-ui/icons/DraftsRounded';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import GamesRoundedIcon from '@material-ui/icons/GamesRounded';



const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        height: 56,
        backgroundColor: 'white',
        position: 'fixed',
        bottom: 0,
        width: '100%'

    }
});

const BottomNav = () => {

    const classes = useStyles();
    const [value, setValue] = useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction value="home" icon={<DraftsRoundedIcon />} />
            <BottomNavigationAction value="playlist" icon={<MusicNoteRoundedIcon />} />
            <BottomNavigationAction value="hackathon" icon={<GamesRoundedIcon />} />
            <BottomNavigationAction value="profile" icon={<PersonRoundedIcon />} />
        </BottomNavigation>
    )
}

export default BottomNav
