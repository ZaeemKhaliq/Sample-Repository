import './App.css';
import Stats from './Stats';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useContext, useState } from 'react';
import SimpleModal from './SimpleModal';
import {MobContext} from './Mobile';

function App() {

  const [screen,setScreen] = useContext(MobContext);
  console.log(screen);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(102),
        height: theme.spacing(52),
        overflow:'hidden scroll',
      },
    },
    mobroot: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
        height: theme.spacing(52),
        overflow:'hidden scroll',
      },
    },
    root1: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(31),
        height: theme.spacing(52),
        overflow:'hidden scroll',
      },
    },
    mobroot1: {
      display: 'flex',
      flexWrap: 'wrap',
      margin:'0 auto',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(31),
        height: theme.spacing(52),
        overflow:'hidden scroll',
      },
    },
    
  }));

  const classes = useStyles();



  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [inputName, setInputName] = useState(null);
  console.log(inputName);

  const handleOpen = (event) => {
    let nam = event.target.name;
    setInputName(nam);

    if(checked[nam]==true){
      setOpen3(true);      
    }
    else{
    setOpen(true);
    }
    
  };


  const handleClose = () => {
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
  };


  const checkboxes = [{
    name: 0,
    label:'Setup review of all users that have administrative priviliges on computer systems',
    remarks: 'Assessment',
    backColor: '#C3E8EE'
  },
  {
    name: 1,
    label:'Reset all default passwords on computer equipment',
    remarks: 'Assessment',
    backColor: '#C3E8EE'
  },
  {
    name: 2,
    label:'Change computer DNS settings to point to Cisco Umbrella Security',
    remarks: 'Check-in',
    backColor: '#de90de'
  },
  {
    name: 3,
    label:'Install Duo Mobile App across all phones and tablets',
    remarks: 'Check-in',
    backColor: '#de90de'
  },
  {
    name: 4,
    label:'Upgrade Wordpress to latest version',
    remarks: 'Report',
    backColor: '#51e8b1'
  },
  {
    name: 5,
    label:'Ask web hosting providers to enable SSL on company website',
    remarks: 'Report',
    backColor: '#51e8b1'
  },
  {
    name: 6,
    label:'Reset passwords for accounting team members',
    remarks: 'Report',
    backColor: '#51e8b1'
  }
];


  let obj = {};
  for(var i=0;i<checkboxes.length;i++){
    obj = {...obj,[i]:false}
  }
  console.log(obj);

  const [checked, setChecked] = useState(obj);
  console.log(checked);



  const handleChange = (name,color) => {
    if(color=="green"){
      setChecked((prev) => ({...prev,[name]:true}));
      setOpen1(true);
    }
    else if(color=="blue"){
      setOpen2(true);
    }
  };


  const handleUnChange = (name) => {
    setChecked((prev) => ({...prev,[name]:false}));
    setOpen3(false);
  }


  const stats = [{
    head:'60%',
    subhead: `Average security rating for your industry - Financial Services`
  },
  {
    head:'23',
    subhead: `Pending Cybersecurity Action Items`
  },
  {
    head:'Access Management',
    subhead: 'Your most issue-prone area with 15 Actions Items pending'
  },
  {
    head:'45 Records',
    subhead: `Unique data records we found relating to your company on the Dark Web so far`
  }];

  
  const description = [{
    head: 'Setup review of all users that have administrative priviliges on computer systems',
    subhead: [{
      para: `Users that have access to administrative functions (e.g. creating users, updating records) and
      making system-wide changes, etc.) can cause irreversible changes to your systems and data. This is why it is
      important that you reguarly review who these users are and confirm if they need access to such priviliges.`
    },{
      para: `These user accounts also need to be monitored because if they are breached, a hacker could use those same
      admininistrative privileges to wreak havoc across your organisation.`
    },{
      para: `Jumpstart Security recommend setting up a calendar reminder on a quarterly basis, where you review all the users
      in your company that have administrative privileges. If any users no longer need such privileges, remove their access.
      If you have a managed IT provider, ask them to send you a list of administrative users which you can confirm or make
      changes to.`
    }]
  },{
    head: 'Reset all default passwords on computer equipment',
    subhead: [{
      para: 'Second one'
    }]
  },{
    head: 'Change computer DNS settings to point to Cisco Umbrella Security',
    subhead: [{
      para: 'Third one'
    }]
  },];



  return (
    <div style={{marginTop:30,backgroundColor: '#F2F3F4'}}>
      <Stats />

      {/* CHECKBOX DIVISION STARTS*/}
      <div style={screen > 800 ? {display:'flex',width:'82%',margin:'20px auto'} : {display:'flex',width:'82%',margin:'20px auto',flexDirection:'column'}}>
        <div className={screen > 800 ? classes.root : classes.mobroot}>
          <Paper elevation={0}>
            <div style={{display:'flex',flexDirection:"column",width:'95%',margin:'20px auto'}}>

              <h4 style={screen > 800 ? {margin:0} : {margin:0,textAlign:'center',fontSize:18}}>My Cybersecurity Action Items</h4>
              <p style={screen > 800 ? {margin:0} : {margin:0,textAlign:'center',fontSize:15}}>List of your pending tasks that will improve your company's cybersecurity posture.</p>
              <p style={{margin:0,fontSize:12}}><em>Completing Assessement-related Action Items will improve your Overall  Security Rating.</em></p>
              

              <div style={{marginTop:20}}>
                {checkboxes.map((checkbox,index) =>{
                  return(
                    <>
                      <div style={{margin:'0px 5px',display:'flex',justifyContent:'space-between'}}>
                        
                        <div style={screen > 800 ? null : {width:'75%'}}>
                          <input type="checkbox" id={index} checked={checked[index]} name={checkbox.name} onChange={handleOpen} />
                          <label for={index} style={screen > 800 ? {cursor:'pointer'} : {cursor:'pointer',fontSize:12}}>{checkbox.label}</label>
                        </div>
                        
                        <p style={screen > 800 ? {backgroundColor:checkbox.backColor} : {backgroundColor:checkbox.backColor,fontSize:10,height:'100%'}}>{checkbox.remarks}</p>
                      </div>
                    </>
                  );
                })} 
              </div>


            </div>
          </Paper>
        </div>
        {/* CHECKBOX DIVISION ENDS*/}


        {/* STATS DIVISION STARTS*/}
        <div className={screen > 800 ? classes.root1 : classes.mobroot1}>
          <Paper elevation={0}>
            <div style={{display:'flex',flexDirection:'column',width:'90%',margin:'10px auto'}}>
              <h4 style={{margin:0,textAlign:'center'}}>Cybersecurity Stats</h4>
              <p style={{margin:0,fontSize:12,textAlign:'center'}}>Quick insights about your company</p>

              {stats.map(stat => {
                return (
                  <>
                  <h3 style={{textAlign:'center',margin:0,marginTop:15}}>{stat.head}</h3>
                  <p style={{textAlign:'center',margin:0,fontSize:14}}>{stat.subhead}</p>
                  </>
                );
              })}

              
            </div>
          </Paper>
        </div>
        {/* STATS DIVISION ENDS*/}

      </div>


      
      <SimpleModal 
        description={description} 
        inputName={inputName} 
        handleClose={handleClose} 
        handleChange={handleChange} 
        open={open}
        open1={open1}
        open2={open2}
        open3={open3}
        handleUnChange={handleUnChange}
      />

    </div>
  );
}

export default App;
