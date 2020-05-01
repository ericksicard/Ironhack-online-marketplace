import { Order } from '../models/order.model'
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



export default { create, listByShop }