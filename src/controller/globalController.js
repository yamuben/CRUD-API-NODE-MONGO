import Response from "../utils/Response";
import status from "http-status";
//save data in database
export const create = (Model) => async (req, res, next) => {
  try {
    // req.body.loanId = "MGNG-"+random().
    const data = await Model.create(req.body);
    if (!data) {
      return Response.errorMessage(
        res,
        "failed to register",
        status.BAD_REQUEST
      );
    }
    return Response.succesMessage(res, "Success", data, status.CREATED);
  } catch (error) {
    console.log(error);
  }
};

// get all datas
export const getAll = (Model) => async (req, res, next) => {
  try {
    const data = await Model.find().select("-password");
    if (!data) {
      return Response.errorMessage(res, "failed!", status.BAD_REQUEST);
    }
    return Response.succesMessage(res, "Success", data, status.OK);
  } catch (error) {
    console.log(error);
  }
};

// get One By Id datas
export const getOneById = (Model) => async (req, res, next) => {
  try {
    const data = await Model.findById(req.params.id).select("-password");;
    if (!data) {
      return Response.errorMessage(res, "failed!", status.BAD_REQUEST);
    }
    return Response.succesMessage(res, "Success", data, status.OK);
  } catch (error) {
    console.log(error);
  }
};

// Update One By Id datas
export const updateOneById = (Model) => async (req, res, next) => {
  try {
    const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).select("-password");;
    if (!data) {
      return Response.errorMessage(res, "failed!", status.BAD_REQUEST);
    }
    return Response.succesMessage(res, "Success", data, status.OK);
  } catch (error) {
    console.log(error);
  }
};

// delete One By Id datas
export const deleteOneById = (Model) => async (req, res, next) => {
  try {
    const data = await Model.findByIdAndDelete(req.params.id).select("-password");;
    if (!data) {
      return Response.errorMessage(res, "failed!", status.BAD_REQUEST);
    }
    return Response.succesMessage(res, "Success", data, status.OK);
  } catch (error) {
    console.log(error);
  }
};
