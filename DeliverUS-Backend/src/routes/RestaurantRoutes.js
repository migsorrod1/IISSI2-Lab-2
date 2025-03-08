import RestaurantController from '../controllers/RestaurantController.js'
import ProductController from '../controllers/ProductController.js'

const loadFileRoutes = function (app) {
  app.route('/restaurants')
    .get(
      RestaurantController.index)
    .post(
      RestaurantController.create)

  app.route('/restaurants/:restaurantId')
    .get(
      RestaurantController.show)
    .put(
      RestaurantController.update)
    .delete(
      RestaurantController.destroy)

  app.route('/restaurants/:restaurantId/products')
    .get(
      ProductController.indexRestaurant)
}
export default loadFileRoutes
