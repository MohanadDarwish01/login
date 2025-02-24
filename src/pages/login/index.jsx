import { useRef } from 'react';
import style from './index.module.css'
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loader from '../../components/loader';
import { useLoader } from '../../store';

// rgb(8 16 40)  dark_blue
// rgb(11 23 57)   mid_dark_blue
// rgb(127 37 251)   magenta
// rgb(174 185 225)   gray

export default function LoginPage() {

    const phoneNo = useRef();
    const codeNo = useRef();
    const navegate = useNavigate();
    const { open, close } = useLoader();

    const handleSubmit = (e) => {
        open();
        e.preventDefault();
        let userData = {
            user_phone: phoneNo.current.value,
            user_code: codeNo.current.value
        }
        if (userData.user_phone == "" || userData.user_code == "") {
                Swal.fire({
                    icon: 'error',
                    title: 'fields cannot be empty',
                    timer: 1500
                }).then(() => {
                    close();
                });


        } else {
            let domainName = "https://support.israaosman.com";
            let endPoint = "/php/index.php/api/auth/login"
            let url = domainName + endPoint;
            axios.post(url, userData).then((res) => {
                if (res.data.err) {
                    setTimeout(() => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Wrong user name or password',
                            timer: 1500
                        }).then(() => {
                            close();
                        });
                    }, 2000)

                } else {
                    setTimeout(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Login successfully',
                            timer: 1500
                        }).then(() => {
                            close();
                            navegate('/profile');
                        });
                    }, 2000)

                }
            })
        }





    }




    return (
        <div className={` col-12 h-100 d-flex align-items-center justify-content-center ${style.loginBg} `}>
            <form onSubmit={handleSubmit} className={`rounded d-flex flex-column align-items-center gap-4 py-5 px-5 ${style.formDs}`}>
                <h2 className=' text-white'>LogIn</h2>
                <div className=' d-flex flex-column flex-md-row gap-3 gap-md-0 justify-content-between text-center w-100'>
                    <Link
                        to="*" className={`px-4 border-0 rounded py-2 ${style.btnDs}`}>
                        <FaGoogle className=' text-white me-3 ' />
                        <span>Login with Google</span>
                    </Link>
                    <Link
                        to="*" className={`px-4 border-0 rounded py-2 ${style.btnDs}`}>
                        <FaApple className=' text-white me-3 ' />
                        <span>Login with Apple</span>
                    </Link>
                </div>
                <div className={` d-flex ${style.lineDs}  align-items-center justify-content-between w-100`}>
                    <hr />
                    <p>or Login with</p>
                    <hr />
                </div>



                {/* form active inputs */}
                <input type="text" ref={phoneNo} placeholder='Enter your phone' className={` w-100 form-control  ${style.inputDs}`} />
                <input type="text" ref={codeNo} placeholder='Enter your code' className={` w-100 form-control  ${style.inputDs}`} />




                <div className=' d-flex flex-column flex-md-row gap-3 gap-md-0 w-100 align-items-center justify-content-between'>
                    <Link
                        to="*" className="form-check">
                        <input className={`form-check-input ${style.checkDs} `} type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label text-white" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </Link>
                    <Link className={`${style.linkDs} `} to="*">Forgot password?</Link>

                </div>


                <button className={`${style.submitDs} btn w-100 `}> Submit</button>

                <div className=' d-flex gap-2'>
                    <p className=' text-white'>Don't have an account?</p>
                    <Link className={`${style.linkDs} `} to="*">Signup</Link>
                </div>

            </form >
        </div >
    )
}