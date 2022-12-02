import LoanModel from "../models/loan";
import {
  create,
  getAll,
  getOneById,
  updateOneById,
  deleteOneById,
} from "./globalController";

export const createController = create(LoanModel);
export const getAllController = getAll(LoanModel);
export const getOneController = getOneById(LoanModel);
export const updateOneController = updateOneById(LoanModel);
export const deleteOneController = deleteOneById(LoanModel);
