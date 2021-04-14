import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useContext, useState } from 'react';
import {MobContext} from './Mobile';

export default function Stats(){

    const [screen,setScreen] = useContext(MobContext);
    console.log(screen);

    const [colorValue,setColorValue] = useState('');

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          width:'90%',
          margin:'0 auto',
          justifyContent: 'space-evenly',
          '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(28),
            height: theme.spacing(10),
          },
        },
        mob: {
          display: 'flex',
          flexWrap: 'wrap',
          width:'90%',
          margin:'0 auto',
          justifyContent: 'space-evenly',
          '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(18),
            height: theme.spacing(10),
          },
        },
        colorPrimary: {
            backgroundColor: '#efefef',
          },
        barColorPrimary: {
            backgroundColor: 'red',
        },
        barColorPrimary1: {
            backgroundColor: '#fbdb67',
        },
        barColorPrimary2: {
            backgroundColor: '#1cc71c',
        },
    }));

    const classes = useStyles();

    const boxes = {
        display:'flex',
        flexDirection:'column',
        height:'100%',
        justifyContent:'center',
        width:'80%',
        margin:'0 auto'
    }



    const [progress, setProgress] = useState(50);

    const papers = [{
        subhead: 'Overall Security Rating',
        value: 60
    },
    {
        subhead: 'People Security',
        value: 40
    },
    {
        subhead: 'Process Security',
        value: 86
    },
    {
        subhead: 'Technology Security',
        value: 21
    },];

    return (
        <>
        {screen > 800 ? 
        <div className={classes.root}>
            {papers.map(paper => {
                return (
                    <Paper elevation={0}>
                        <div style={boxes}>
                            <h3 style={{margin:0}}>{`${paper.value}%`}</h3>
                            <p style={{margin:0}}>{paper.subhead}</p>
                            <LinearProgress 
                            variant="determinate" 
                            value={paper.value} 
                            style={{marginTop:5}} 
                            classes={paper.value > 0 && paper.value <=30 ? {colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}: paper.value > 30 && paper.value<=60? {colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary1} : {colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary2}}/>
                        </div>
                    </Paper>
                );
            })}
            
            
        </div>
        :
        <div className={classes.mob}>
            {papers.map(paper => {
                return (
                    <Paper elevation={0}>
                        <div style={boxes}>
                            <h3 style={{margin:0}}>{`${paper.value}%`}</h3>
                            <p style={screen > 800 ? {margin:0} : {margin:0,fontSize:12}}>{paper.subhead}</p>
                            <LinearProgress 
                            variant="determinate" 
                            value={paper.value} 
                            style={{marginTop:5}} 
                            classes={paper.value > 0 && paper.value <=30 ? {colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}: paper.value > 30 && paper.value<=60? {colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary1} : {colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary2}}/>
                        </div>
                    </Paper>
                );
            })}
            
            
        </div>

        }
        </>
  );
}