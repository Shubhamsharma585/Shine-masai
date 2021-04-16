import React from 'react'
import {auth, google} from "../FireAuth/auth"

const FireLogin = () => {

    const handleLogin = () => {
        auth.signInWithPopup(google)
        .then(resp => console.log(resp))
        .catch((err) => console.log(err));
    }


    

    return (
        <div>
            <button onClick={handleLogin}>Login With Google</button>
        </div>
    )
}

export {FireLogin}