import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { useContext, useState } from 'react';
import {MobContext} from './Mobile';

export default function SimpleModal({description,inputName,handleClose,handleChange,open,open1,open2,open3,handleUnChange}){
    
    const [screen,setScreen] = useContext(MobContext);
    console.log(screen);

    const useStyles = makeStyles((theme) => ({

        paper: {
          position: 'absolute',
          width: 1000,
          height: 400,
          backgroundColor: theme.palette.background.paper,
          borderRadius:'8px',
          boxShadow: theme.shadows[5],
          outline:'none'
        },
        mobpaper: {
          position: 'absolute',
          width: '90%',
          height: '90%',
          backgroundColor: theme.palette.background.paper,
          borderRadius:'8px',
          boxShadow: theme.shadows[5],
          outline:'none',
        },
        paper1: {
            position: 'absolute',
            width: 500,
            height: 300,
            backgroundColor: theme.palette.background.paper,
            borderRadius:'4px',
            boxShadow: theme.shadows[5],
            outline:'none'
          },
        mobpaper1: {
            position: 'absolute',
            width: '90%',
            height: '90%',
            backgroundColor: theme.palette.background.paper,
            borderRadius:'4px',
            boxShadow: theme.shadows[5],
            outline:'none',
            overflow:'hidden scroll'
        },
        paper2: {
            position: 'absolute',
            width: 300,
            height: 100,
            backgroundColor: theme.palette.background.paper,
            borderRadius:'4px',
            boxShadow: theme.shadows[5],
            outline:'none'
        },    
        
      }));


    const classes = useStyles();

    
    
      function getModalStyle() {
        const top = 50;
        const left = 50;
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
      }
    
      const [modalStyle] = useState(getModalStyle);
      

    return (
        <>

        {/* ACTION ITEM MODAL STARTS */}
        <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={screen > 800 ? classes.paper : classes.mobpaper}>
          <h2 id="simple-modal-title" style={{margin:0,padding:10,borderBottom:'1px solid black'}}>
            Action Item Details 
            <button 
            type="button" 
            style={{float:'right',backgroundColor:'transparent',cursor:'pointer',border:'none',fontSize:20}} 
            onClick={handleClose}
            >X</button>
          </h2>
          


          {description.map((item,index) => {
            return (
              index == inputName ? 
              <>
                <p id="simple-modal-description" style={screen > 800 ? {width:'95%',margin:'10px auto',fontSize:20}:{width:'95%',margin:'10px auto',fontSize:14}}>{item.head}</p>
                <div style={screen > 800 ? {height:'55%',overflow:'hidden scroll'}:{height:'35%',overflow:'hidden scroll'}}>
                {item.subhead.map(obj=>{
                    return (
                        <p style={screen > 800 ? {width:'95%',margin:'15px auto',fontSize:15}:{width:'95%',margin:'15px auto',fontSize:12}}>{obj.para}</p>
                    );
                })}
                </div>  

                <div style={screen > 800 ? {width:'40%',margin:'10px 20px',display:'flex',justifyContent:'space-between'}:{width:'85%',margin:'10px 20px',display:'flex',justifyContent:'space-between'}}>
                  <button style={{color:'white',backgroundColor:'rgb(73 160 73)',cursor:'pointer',width:180,height:30,border:'none',borderRadius:'5px'}} type="button" onClick={()=>{
                      handleChange(index,"green")
                      }}>MARK AS COMPLETE</button>

                  <button style={{color:'white',backgroundColor:'#5bbeec',cursor:'pointer',width:180,height:30,border:'none',borderRadius:'5px'}} type="button" onClick={()=>handleChange(index,"blue")}>REQUEST ASSISTANCE</button>
                </div>
              </>
              : null
            );
          })}
    
          
        </div>
    </Modal>
    {/* ACTION ITEM MODAL ENDS */}


    {/* MARK AS DONE MODAL STARTS */}
    <Modal
        open={open1}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    >
        <div style={modalStyle} className={screen > 800 ? classes.paper1 : classes.mobpaper1}>
          <h2 id="simple-modal-title" style={{margin:0,padding:'10px 20px',borderBottom:'1px solid black'}}>
              Action Item Completed
              <button type="button" style={{float:'right',backgroundColor:'transparent',cursor:'pointer',border:'none',fontSize:20}} onClick={handleClose}>X</button>
              </h2>
          <div style={screen > 800 ? {height:'40%',width:'35%',margin:'10px auto'}:{height:'30%',width:'25%',margin:'10px auto'}}>
            <img src="https://online-learning.harvard.edu/sites/default/files/styles/social_share/public/course/har-cybersecurity-managing-risk-in-the-information-age-course-banner-1b0921a65e24ee45144dab27bc65b19e_0.jpg?itok=jvryovNF" style={{height:'100%',width:'100%'}}/>
          </div>
          <div style={{width:'90%',margin:'0 auto'}}>
              <p style={{margin:0,fontSize:22,textAlign:'center'}}>Nicely Done!</p>
              <p style={{margin:0,fontSize:14,textAlign:'center'}}>Congratulations on completing this Action Item. You're one step closer to better cybersecurity for your company.</p>
          </div>
        </div>
    </Modal>
    {/* MARK AS DONE MODAL ENDS */}



    {/* ASSITANCE REQUEST MODAL STARTS */}
    <Modal
        open={open2}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    >
        <div style={modalStyle} className={screen > 800 ? classes.paper1 : classes.mobpaper1}>
          <h2 id="simple-modal-title" style={{margin:0,padding:'10px 20px',borderBottom:'1px solid black'}}>
              Assistance Request
              <button type="button" style={{float:'right',backgroundColor:'transparent',cursor:'pointer',border:'none',fontSize:20}} onClick={handleClose}>X</button>
              </h2>
          <div style={screen > 800 ? {height:'40%',width:'35%',margin:'10px auto'}:{height:'30%',width:'25%',margin:'10px auto'}}>
            <img src="https://online-learning.harvard.edu/sites/default/files/styles/social_share/public/course/har-cybersecurity-managing-risk-in-the-information-age-course-banner-1b0921a65e24ee45144dab27bc65b19e_0.jpg?itok=jvryovNF" style={{height:'100%',width:'100%'}}/>
          </div>
          <div style={{width:'90%',margin:'0 auto'}}>
              <p style={{margin:0,fontSize:22,textAlign:'center'}}>We're here to help!</p>
              <p style={{margin:0,fontSize:14,textAlign:'center'}}>A service ticket has been sent to the JumpStart Security team and we'll be in touch shortly to help you out.</p>
              <p style={{margin:0,fontSize:14,textAlign:'center'}}>Thanks for letting us know!</p>
          </div>
        </div>
    </Modal>
    {/* ASSITANCE REQUEST MODAL ENDS */}



    {/* UNCHECK MODAL STARTS */}
    <Modal
        open={open3}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    >
        <div style={modalStyle} className={classes.paper2}>
            <h2 id="simple-modal-title" style={{margin:0,padding:'10px 20px',borderBottom:'1px solid black'}}>
                Uncheck this?
                <button type="button" style={{float:'right',backgroundColor:'transparent',cursor:'pointer',border:'none',fontSize:20}} onClick={handleClose}>X</button>
                </h2>
            <div style={{width:'90%',margin:'10px auto'}}>
                {description.map((item,index) => {
                    return (
                        index != inputName ? null : 
                        <>
                        <button style={{color:'white',backgroundColor:'rgb(73 160 73)',cursor:'pointer',width:100,height:30,border:'none',borderRadius:'5px'}} type="button" onClick={()=>handleUnChange(index)}>YES</button>
                        </>
                    );
                })}
                
            </div>
        </div>
    </Modal>
    {/* UNCHECK MODAL ENDS */}

    </>
    );
}