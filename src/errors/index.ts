import ErrorObj from "protocols/ErrorObj";

type ErrorFunction<T> = (params?: T) => ErrorObj;

const createError: ErrorFunction<Partial<ErrorObj>> = ({
  name,
  message,
  statusCode,
}) => {
  const newError: ErrorObj = new Error(message || "An error has ocurred.");
  newError.name = name || "UnknownError";
  newError.statusCode = statusCode || 500;
  return newError;
};

const conflictError: ErrorFunction<string> = (item) => {
  return createError({
    name: "ConflictError",
    message: `${item} already exists in database.`,
    statusCode: 409,
  });
};

export default { createError, conflictError };
