import { Router } from "express";
import * as CustomerController from "../controller/CustomerController";
const route = Router();
route
  .route("/")
  .post(CustomerController.createController)
  .get(CustomerController.getAllController);

route
  .route("/:id")
  .patch(CustomerController.updateOneController)
  .get(CustomerController.getOneController)
  .delete(CustomerController.deleteOneController);

export default route;
