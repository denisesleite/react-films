
import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import img1 from '../../assets/img/img1.png';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/img3.jpg';
import img4 from '../../assets/img/img4.jpg';
import img6 from '../../assets/img/img6.jpg';
import img5 from '../../assets/img/img5.jpg';
import img7 from '../../assets/img/img7.jpg';
import img8 from '../../assets/img/img8.jpg';
import img9 from '../../assets/img/img9.jpg';
import img10 from '../../assets/img/img10.jpg';

import { Input } from '../../components/Input';

import './style.css';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const loginLabel = document.querySelector('#loginLabel');
  const loginPassword = document.querySelector('#passwordLabel');

  login !== '' ? loginLabel?.classList.add('upLabel') : loginLabel?.classList.remove('upLabel') 
  password !== '' ? loginPassword?.classList.add('upLabel') : loginPassword?.classList.remove('upLabel') 

  const history = useHistory();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    history.push('/home');
  }

  return (
    <>
      <div className="home__gallery">
        <div className="home__gallery-item">
          <img src={img1} alt="" />
          {/* <img src="https://via.placeholder.com/1399x786/CCCCCC/FFFFFF?text=?" alt="" /> */}
        </div>
        <div className="home__gallery-item">
          <img src={img2} alt="" />
          {/* <img src="https://via.placeholder.com/1024x535/CCCCCC/FFFFFF?text=?" alt="" /> */}
        </div>
        <div className="home__gallery-item">
          <img src={img3} alt="" />
          {/* <img src="https://via.placeholder.com/1399x786/CCCCCC/FFFFFF?text=?" alt="" /> */}
        </div>
        <div className="home__gallery-item">
          <img src={img4} alt="" />
          {/* <img src="https://via.placeholder.com/250x500/CCCCCC/FFFFFF?text=?" alt="" /> */}
        </div>
        <div className="home__gallery-item">
          <img src={img5} alt="" />
          {/* <img src="https://via.placeholder.com/800x540/CCCCCC/FFFFFF?text=?" alt="" /> */}
        </div>
        <div className="home__gallery-item">
          <img src={img7} alt="" />
          {/* <img src="https://via.placeholder.com/640x854/CCCCCC/FFFFFF?text=?" alt="" /> */}
        </div>
        <div className="home__gallery-item">
          <img src={img6} alt="" />
          {/* <img src="https://via.placeholder.com/1280x780/CCCCCC/FFFFFF?text=?" alt="" /> */}
        </div>
        <div className="home__gallery-item">
          <img src={img8} alt="" />
          {/* <img src="https://via.placeholder.com/674x969/CCCCCC/FFFFFF?text=?" alt="" /> */}
        </div>
        <div className="home__gallery-item">
          <img src={img9} alt="" />
          {/* <img src="https://via.placeholder.com/200x304/CCCCCC/FFFFFF?text=?" alt="" /> */}
        </div>
        <div className="home__gallery-item">
          <img src={img10} alt="" />
          {/* <img src="https://via.placeholder.com/512x288/CCCCCC/FFFFFF?text=?" alt="" /> */}
        </div>
      </div>

      <div className="home__login">
        <div className="home__login-content">
          <div>
            <div className="home__login-content-form">
              <form onSubmit={handleSubmit}>
                <Input 
                  type="text" 
                  id="login" 
                  name="login" 
                  value={login} 
                  handleChange={(e: any) => setLogin(e.target.value)}
                  label="Login"
                  idLabel="loginLabel"
                />
                <Input 
                  type="password" 
                  id="password" 
                  name="password"
                  value={password} 
                  handleChange={(e: any) => setPassword(e.target.value)}
                  label="Password"
                  idLabel="passwordLabel"
                />
                
                <button type="submit">Entrar</button>
              </form>
            </div>
            <div className="bullets">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
