//Methods for fetching sign-in and sign-out API endpoints

//Sign-in
/*
The signin method will take user sign-in data from the view component, then use fetch
to make a POST call to verify the user with the backend. The response from the server will
be returned to the component in a promise, which may contain the JWT if sign-in was successful.
*/
const signin = user => {
    return fetch('/auth/signin/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
        })
        .then( response => response.json() )
        .catch( err => console.log(err) )
};

//Sign-out
const signout = () => {
    return fetch('/auth/signout/', {
        method: 'GET'
        })
        .then( response => response.json() )
        .catch( err => console.log(err) )
};

export { signin, signout };