const cart =  { 

    itemTotal: () => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('cart')) {
                return JSON.parse(localStorage.getItem('cart')).length
            }
        }
        return 0;
    },

    addItem: (item, cb) => {
        let cart = [];
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'))
            }
            cart.push({
                product: item,
                quantity: 1,
                shop: item.shop._id
            })
            localStorage.setItem('cart', JSON.stringify(cart))
            cb()
        }
    },

    // This method retrieves and returns the cart details from localStorage
    getCart: () => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('cart')) {
                return JSON.parse(localStorage.getItem('cart'))
            }
        }
        return [];
    },

    // This method updates the product quantity from localStorage
    updateCart: (index, quantity) => {
        let cart = []
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'))
            }
            cart[index].quantity = quantity
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    },

    // This method removes a product from localStorage 
    removeItem: index => {
        let cart = [];
        if ( typeof window !== 'undefined') {
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'))
            }
            cart.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify(cart)) 
        }
        return cart;
    },


}

export default cart;