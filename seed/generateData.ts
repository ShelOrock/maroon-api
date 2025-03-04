import { Models } from "../datastore"

import createUser from "./data/users"

const generateData = async () => {
  const user = createUser();
  await Models.User.create(user);
};

export default generateData;