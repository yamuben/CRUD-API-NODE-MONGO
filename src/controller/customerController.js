import CustomerModel from "../models/customer";
import {
  create,
  getAll,
  getOneById,
  updateOneById,
  deleteOneById,
} from "./globalController";

export const createController = create(CustomerModel);
export const getAllController = getAll(CustomerModel);
export const getOneController = getOneById(CustomerModel);
export const updateOneController = updateOneById(CustomerModel);
export const deleteOneController = deleteOneById(CustomerModel);
