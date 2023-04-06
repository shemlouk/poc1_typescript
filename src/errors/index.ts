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

export default { createError, conflictError, invalidBody };
