import React from 'react'
import '../index.css'
import { Link, useNavigate } from 'react-router-dom'


const LandingPage = () => {

    const router = useNavigate();

  return (
    <div className='landingPageContainer'>
        <nav>
            <div className='navHeader'>
             <h2 style={{ color: "white", fontWeight: "700", fontSize: "28px" }}>
  Vibe<span style={{ color: "#FF9839" }}>Call</span>
</h2>
            </div>
            <div className='navList'>
                  <p onClick={() => {
                        router("/home")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                </div>
            </div>
        </nav>

        <div className='landingMainContainer'>
             <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>

                    <p>Cover a distance by VibeCall</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>

                    <img src="/mobile.png" alt="" />

                </div>
        </div>
    </div>
  )
}

export default LandingPage;
