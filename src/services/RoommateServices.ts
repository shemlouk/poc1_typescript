import RoommateRepository from "repositories/RoommateRepository";
import errors from "errors";

const create = async (data: { name: string; email: string }) => {
  const alreadyExists = await RoommateRepository.findByEmail(data.email);
  if (alreadyExists) throw errors.conflictError("Roommate");

  await RoommateRepository.create(data);
};

export default { create };
