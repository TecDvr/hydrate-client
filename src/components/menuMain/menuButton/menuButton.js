import React, { Component } from 'react';
import './menuButton.css';
import { Link } from 'react-router-dom'; 

//VERSION TWO MENU BUTTON

class MenuButton extends Component {

  renderLogoutLink() {
    return (
      <div className='menuLink'>
        <Link 
          style={{ textDecoration: 'none' }} 
          to='/ui'><p className='linkText'>Home</p>
        </Link>
        <Link 
          style={{ textDecoration: 'none' }} 
          to='/contact'><p className='linkText'>Contact</p></Link>
        <Link
          style={{ textDecoration: 'none' }}
          onClick={() => {
            window.localStorage.removeItem('zachs-token-son');
            window.localStorage.removeItem('userID');
          }}
          to='/'><p className='linkText'>Logout</p>
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='menuLink'>
        <Link
          style={{ textDecoration: 'none' }}
          to='/user'>
          <p className='linkText'>Register</p>
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          to='/login'>
          <p className='linkText'>Login</p>
        </Link>
      </div>
    )
  }

  render() {
    return (
      <div className='buttonContainer'>
        <button className='roundButton'>
          <img src='https://lh3.googleusercontent.com/QUmjkIivpF5lIk4gGBG-FhIMygLn2IZ12jiHXrAEmJ43MehKJmTP8V_qGSNKyeH_DejR18jTwgufcN3ezQ1haYCpId-q8AIdAiqnz_OXPpLpXhnlD6kbp4G2XLN8ATMZmf6gBLbnayknevcI013J92u4gkmJE04p4anXGqWG0J-G9DADQYI2P8fdD4-ZLr0HvbS7aP_jPdrmqRUrF5mOONVuPE7fS9P61D5sN-O7wiUmwG-iUh1GR55aSoCcZuzNOyVUiRWbtONxVCdl05Z8qKKwhmoag2vyNHQIVio26l2RAYGOD7vuymypl64Uu1nQjC-BwCXtUiY69hQykYNRrQw-vVGiWlQv5LCpojOs6fWSFwk79cVwktDwjHYPq7rMXsHfVXKuskLVAoodnPaQEgTCU1bGYF1vh2HS0rf5UDzJrBJZAAWwIRTNBn_LNmBhHi57Gp2LDc0eULRLm5qNFkTgvXUuE6kINh1kw3jijITUTPRELtNkMRAru9vykRGykZF9aRE2lLiOBYE15PM39mGUk1TswBTP8amhq601zs_btJecyJQ6GJw3-Wj8pxSc75lX28vLMqxL4ZDAU5rFb0oKBC5ab5mr_Mmp8tdkiWRzjpWjh9EUbcyVoWPuhuRHB3h8FQ-j_g6xwADQthulSGaP1kOxLeN0OdOGKKzvfZOeKzP034pO4RI2f1Ju74ytF4b2r1zU9lTGXrE81H6CxQ3InyeouW7g4E_raEDaxrbAQ7Qf=w446-h801-no' alt='water drop icon' className='waterDrop'/>
        </button>
        <div>
              {!!window.localStorage.getItem('zachs-token-son')
                ? this.renderLogoutLink()
                : this.renderLoginLink()}
        </div> 
      </div>
    )
  }
}
 
export default MenuButton; 