import RoommateRepository from "repositories/RoommateRepository";
import TasksRepository from "repositories/TasksRepository";
import TaskObj from "protocols/TaskObj";
import errors from "errors";

const checkIfRoommateExists = async (id: number) => {
  const roommateExists = await RoommateRepository.getById(id);
  if (!roommateExists) throw errors.invalidBody("Roommate id does not exists.");
};

const checkIfTaskExists = async (id: number) => {
  const taskExists = await TasksRepository.getById(id);
  if (!taskExists) throw errors.resourceNotFound("Task");
};

const checkIfDateIsValid = (date: Date) => {
  if (date <= new Date() || date.toString() === "Invalid Date")
    throw errors.invalidDate();
};

const create = async (data: TaskObj) => {
  checkIfDateIsValid(new Date(data.date));
  await checkIfRoommateExists(data.roommateId);

  await TasksRepository.create(data);
};

const update = async (id: number, data: any) => {
  if (!id) throw errors.invalidParam();
  await checkIfTaskExists(id);

  const { title, description, date, roommateId, isDone } = data;

  if (Number(roommateId)) await checkIfRoommateExists(Number(roommateId));

  let updateDate: Date | undefined;

  if (date) {
    updateDate = new Date(date);
    checkIfDateIsValid(updateDate);
  }

  const updateData: Partial<TaskObj> = {
    title,
    description,
    date: updateDate,
    roommateId: Number(roommateId) || undefined,
  };

  for (let key in updateData) {
    if (updateData[key] === undefined) delete updateData[key];
  }

  if (isDone)
    try {
      updateData.isDone = JSON.parse(isDone);
    } catch {
      throw errors.invalidQuery("isDone");
    }

  console.log(updateData);

  await TasksRepository.updateById(id, updateData);
};

const deleteById = async (id: number) => {
  if (!id) throw errors.invalidParam();

  await checkIfTaskExists(id);

  await TasksRepository.deleteById(id);
};

const getAll = async () => {
  const res = await TasksRepository.getAll();
  return res;
};

const getByRoommateId = async (id: number) => {
  if (!id) throw errors.invalidParam();

  const res = await TasksRepository.getByRoommateId(id);
  return res;
};

export default { create, update, deleteById, getAll, getByRoommateId };
