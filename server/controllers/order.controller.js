import { Order, CartItem } from '../models/order.model'
import errorHandler from '../../helpers/dbErrorHandler'


/* This method takes the order details, creates a new order,
and saves it to the Order collection in MongoDB
*/
const create = (req,res) => {
    req.body.order.user = req.profile;
    const order = new Order(req.body.order)
    order.save()
        .then( result => {
            res.status(200).json(result)
        })
        .catch( err => res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        }))

}

/*The listByShop controller method will retrieve the orders that have products purchased
with the matching shop ID, then populate the ID, name, and price fields for each product,
with orders sorted by date from most recent to oldest.
*/
const listByShop = (req, res) => {
    Order.find({ 'products.shop': req.shop._id})
        .populate({
            path: 'products.product',
            select: '_id name price'
        })
        .sort('-created')
        .then( orders => {
            res.status(200).json(orders)
        })
        .catch( err => res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        }))
}

// This methods get the order status possible values
const getStatusValues = (req, res) => {
    res.json(CartItem.schema.path('status').enumValues)
}

// This method updated the status of the products included in an order
const update = (req, res) => {
    Order.update(
            { 'products._id': req.body.cartItemId },
            { '$set': { 'products.$.status': req.body.status }}
    )
    .then( order => {
        res.json(order)
    })
    .catch( err => res.status(400).json({
        error: errorHandler.getErrorMessage(err)
    }))
}

/* To retrieve the order associated with the orderId parameter in the route, we will use the
orderByID order controller method, which gets the order from the Order collection and
attaches it to the request object to be accessed by the next methods
*/
const orderByID = (req, res, next, id) => {
    Order.findById(id)
    .populate('products.product', 'name price')
    .populate('products.shop', 'name')
    .exec( (err, order) => {
        if (err || !order) 
            return res.status('400').json({
                error: "Order not found"
            })
        req.order = order;
        next()
    })
}


export default { 
    create,
    listByShop,
    getStatusValues,
    update,
    orderByID
}