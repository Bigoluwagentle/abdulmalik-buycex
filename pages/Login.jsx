import Link from "next/link";
import Logins from "../styles/Sign.module.css";
function Login(){
    return(
        <div id={Logins.signs}>
            <section>
                <img src="/buycexlogo.svg"/>
                <p>Community Owned Crypto Currency Exchange</p>
                <legend>LOGIN NOW</legend>
                <form>
                    <nav>
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" id="email" placeholder="Enter Your Email Adress" />
                    </nav>
                    <nav>
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" id="password" placeholder="Enter Your Password" />
                    </nav>
                    <nav>
                        <button onClick={() => {
                            document.querySelector("#land").click();
                        }}>LOGIN</button>
                    </nav>
                    <nav className={Logins.nav}>
                        <h4 onClick={() => {
                            document.querySelector("#sig").click();
                        }}>Sign up</h4>
                        <p>Forget Password?</p>
                    </nav>
                </form>
                <Link href="/Signup" id="sig"/>
                <Link href="/Dashboard" id="land">hi</Link>
            </section>
        </div>
    )
}
export default Login;