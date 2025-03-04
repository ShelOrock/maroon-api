import { Request, Response, NextFunction } from "express";

import { Models } from "../../datastore";

import { datastoreServices } from "../services";

const getAllUsers = async (_request: Request, response: Response, nextFunction: NextFunction) => {
  try {
    const users = await datastoreServices.getAllRecords(Models.User, {});

    if(!users) {
      const error = new Error("Users not found");
      nextFunction(error);
    };

    response.status(200).send(users);

  } catch(error) {
    nextFunction(error);
  };
};

const getUser = async (request: Request, response: Response, nextFunction: NextFunction) => {
  try {

    const user = await datastoreServices.getRecord(Models.User, {
      searchCondition: { id: request.params.id }
    });

    if(!user) {
      const error = new Error("User not found");
      nextFunction(error);
    };

    response.status(200).send(user);

  } catch(error) {
    nextFunction(error);
  };
};

export {
  getAllUsers,
  getUser
};
