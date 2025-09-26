import Signups from "../styles/Sign.module.css";
import Link from "next/link";
function Signup(){
    return(
        <div id={Signups.signs}>
            <section>
                <img src="/buycexlogo.svg"/>
                <p>Community Owned Crypto Currency Exchange</p>
                <legend>SIGNUP NOW</legend>
                <form onSubmit={(e) => e.preventDefault()}>
                    <nav>
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" id="email" placeholder="Enter Your Email Adress" />
                    </nav>
                    <nav>
                        <label htmlFor="email">PHONE NUMBER</label>
                        <input type="tel" id="phone" placeholder="Enter Your Phone Number" />
                    </nav>
                    <nav>
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" id="password" placeholder="Enter Your Password" />
                    </nav>
                    <nav>
                        <button onClick={() => {
                            document.querySelector("#log").click();
                        }}>SIGNUP</button>
                    </nav>
                    <nav className={Signups.nav}>
                        <h4 onClick={() => {
                            document.querySelector("#log").click();
                        }}>LOGIN</h4>
                        <p>Forget Password?</p>
                    </nav>
                </form>
                <Link href="/Login" id="log"/>
            </section>
        </div>
    )
}
export default Signup;