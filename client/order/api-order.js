const create = (params, credentials, order, token) => {
    return fetch('/api/orders/' + params.userId, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify({ order:order, token:token })
    })
    .then( response => response.json())
    .catch( err => console.log(err))
}

const listByShop = (params, credentials) => {
    return fetch('/api/orders/shop/' + params.shopId, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        }
    })
    .then( response => response.json() )
    .catch( err => console.log(err))
}

const getStatusValues = async (signal) => {
    try {
        let response = await fetch('/api/order/satus_values', {
            method: 'GET',
            signal: signal
        })
        return response.json()
    }
    catch( err) {
        console.log(err)
    }
}

const cancelProduct = async (params, credentials, product) => {
    try {
        let response = await fetch('/api/order/' + params.shopId + '/cancel/' + params.productId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: JSON.stringify(product)
        })
        return response.json()
    }
    catch(err) {
        console.log(err)
    }
}

const processCharge = async (params, credentials, product) => {
    try {
        let response = await fetch('/api/order/' + params.orderId + '/charge/' + params.userId + '/' + params.shopId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: JSON.stringify(product)
        })
        return response.json()
    }
    catch(err) {
        console.log(err)
    }
}

const update = async (params, credentials, product) => {
    try {
        let response = await fetch('/api/order/status/' + params.shopId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: JSON.stringify(product)
        })
        return response.json()
    }
    catch(err) {
        console.log(err)
    }
}

export {
    create,
    listByShop,
    getStatusValues,
    cancelProduct,
    processCharge,
    update
}