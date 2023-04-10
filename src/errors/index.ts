import ErrorObj from "protocols/ErrorObj";

const createError = (name: string, message: string, statusCode: number) => {
  const newError: ErrorObj = new Error(message || "An error has ocurred.");
  newError.name = name || "UnknownError";
  newError.statusCode = statusCode || 500;
  return newError;
};

const conflictError = (item: string) => {
  return createError(
    "ConflictError",
    `${item} already exists in database.`,
    409
  );
};

const invalidBody = (message: string) => {
  return createError("InvalidBody", message, 422);
};

const invalidParam = () => {
  return createError("InvalidParam", "Param is not valid.", 400);
};

const invalidQuery = (field: string) => {
  return createError("InvalidQuery", `Query field ${field} is not valid.`, 400);
};

const invalidDate = () => {
  return createError("InvalidDate", `Date is not valid.`, 400);
};

const resourceNotFound = (resourse: string) => {
  return createError("ResourceNotFound", `${resourse} was not found.`, 404);
};

export default {
  createError,
  conflictError,
  invalidBody,
  invalidParam,
  invalidQuery,
  invalidDate,
  resourceNotFound,
};
