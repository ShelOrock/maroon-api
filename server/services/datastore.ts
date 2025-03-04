import { GetAllRecords, GetRecord } from "./types";

const getAllRecords: GetAllRecords<any> = async (model, {
  scope = "defaultScope",
  searchCondition = {}
}) => {
  try {
    return await model
      .scope(scope)
      .findAll({ where: searchCondition });

  } catch(error) {
    throw new Error(`Error fetching all ${ model } records: ${ error.message }`);
  };
};

const getRecord: GetRecord<any> = async (model, {
  scope = "defaultScope",
  searchCondition = {}
}) => {
  try {
    return await model
      .scope(scope)
      .findOne({ where: searchCondition });

  } catch(error) {
    throw new Error(`Error fetching model record ${ error.message }`);
  }
}

export {
  getAllRecords,
  getRecord
};
