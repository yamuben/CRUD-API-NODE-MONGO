import { Router } from "express";
import * as LoanController from "../controller/LoanController";
const route = Router();
route
  .route("/")
  .post(LoanController.createController)
  .get(LoanController.getAllController);

route
  .route("/:id")
  .patch(LoanController.updateOneController)
  .get(LoanController.getOneController)
  .delete(LoanController.deleteOneController);

export default route;
