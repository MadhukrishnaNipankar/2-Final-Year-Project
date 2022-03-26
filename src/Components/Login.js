import React from 'react'
import '../Styles/Login.css';
import { useEffect } from 'react';



export default function Login() {

    useEffect(() => {
        let windowWidth = window.matchMedia("(min-width: 1077px)");
        if (windowWidth.matches) {
          document.getElementById("Login").className = "w-50 shadow p-3 mb-5 bg-body mx-auto my-5 ";
        }
        else {
          document.getElementById("Login").className = "w-75 shadow p-3 mb-5 bg-body mx-auto my-5 t";
        }
      });
    return (
        <>
            <div id="Login" className="w-50 shadow p-3 mb-5 bg-body mx-auto my-5 " style={{ height: "30rem", display: "flex" }}>
                <img id="loginImage" src="Images/login.jpg" width="50%" alt="" />
                <div className='container mx-3 my-3'>
                    <div className='fs-5 text-center'>Login</div>
                    <hr />
                    <form action="">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Username</label>
                            <input type="email" class="form-control" placeholder="username" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" class="form-control" placeholder="abc@gmail.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Password</label>
                            <input type="password" class="form-control" placeholder="password" />
                        </div>
                        <div className='text-center'>
                            <button id="loginBtn" type="submit" class="btn btn-primary" style={{ "alignSelf": "center" }}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
