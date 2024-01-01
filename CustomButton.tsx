'use client'

import { LoginLink, RegisterLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { ReactNode } from "react";


type CBProps = {
    btnType?: string
    href?: string
    text?: string
    child?: ReactNode
}

export default function CustomButton({btnType, href, text, child}: CBProps) {

    const btnStyle = "inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-950 rounded-md hover:bg-blue-950/90 dark:bg-blue-600 dark:hover:bg-blue-700"

    if(btnType == "SignIn")
    {
        return (<LoginLink className={btnStyle}>Sign In</LoginLink>);
    }
    else if(btnType == "SignUp" && child)
    {
        return (<RegisterLink postLoginRedirectURL="/welcome" className={btnStyle}>Sign Up {child}</RegisterLink>);
    }
    else if(btnType == "SignOut")
    {
        return (<LogoutLink className={btnStyle}>Sign Out</LogoutLink>);
    }
    else if(btnType == "Dashboard")
    {
        return (<Link href={"/dashboard"} className={btnStyle}>Dashboard</Link>);
    }
    else if(!btnType && href && text)
    {
        return (<Link href={href} className={btnStyle}>{text}</Link>);
    }
    else
    {
        return (<p>If !btnType must be href, text, and child</p>);
    }
}