import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import logo from '../../assets/images/Logo.png';
import './landingPage.css';

export default function landingPage() {
  return (
    //   <div className='weavBackground'>
    //       Hii
    //   </div>
    <div style={{ marginTop: '3%', textAlign: 'center' }}>
      <img
        style={{ top: '47px', left: '626px', width: '115px', height: '95px' }}
        src={logo}
        alt='weavai'
      />
      <p className='appName'> WEAV AI </p>
      <div className='weavBackground'>
        <div className='waitList'>
          <h2>Interested?</h2>
          <button
          type='button'
            // onClick={handleWaitList}
            className='button'
          >
            Join the Waitlist!
          </button><br/>
          <p className='signInContent'>Already have a login id? <span>Sign In</span></p>
        </div>
      </div>
    </div>
  );
}
