import Home from "./index";
import style from "../styles/Home.module.css";
import Link from "next/link";

function about(){
    return(
        <div>
            <Home/>
            <h1 id={style.h1}>ABOUT PAGE</h1>
            <Link href="/">Home</Link>
        </div>
    )
}
export default about;