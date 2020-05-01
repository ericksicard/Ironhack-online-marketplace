import Order from '../models/order.model'
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

export default { create }