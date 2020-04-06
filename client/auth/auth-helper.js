
/* The following helper methods store and retrieve JWT credentials from client-side sessionStorage,
and also clear out the sessionStorage on user sign-out */

import { signout } from './api-auth'

const auth = {
    //Retrieve credentials if signed-in
    isAuthenticated() {
        if ( typeof window == "undefined") {
            return false
        }
        else if (sessionStorage.getItem('jwt')) {
            //console.log('This is the "t" info: ' + JSON.parse(sessionStorage.getItem('jwt')).token )
            return JSON.parse(sessionStorage.getItem('jwt'))
        }
        else {
            return false
        }
    },
    
    //Save credentials on successful sign-in
    authenticate(jwt, cb) {
        if(typeof window !== "undefined")
            sessionStorage.setItem('jwt', JSON.stringify(jwt))
        cb()
    },

    // Updating the user details stored in sessionStorage for auth purposes
    updateUser(user, cb) {
        if (typeof window !== undefined) {
            if (sessionStorage.getItem('jwt')) {
                let auth = JSON.parse(sessionStorage.getItem('jwt'));
                auth.user = user;
                sessionStorage.setItem('jwt', JSON.stringify(auth))
                cb()
            }
        }
    },

    //Delete credentials and sign out
    signout(cb) {
        if (typeof window !== "undefined") sessionStorage.removeItem('jwt')
        cb()
        signout()
            .then( data => {
                document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;" 
            })
    }
}

export default auth;




