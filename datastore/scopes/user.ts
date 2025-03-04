import { UserDefinition } from "../definitions";

UserDefinition.addScope(
  "defaultScope",
  { attributes: { exclude: [ "password "] } }
);

UserDefinition.addScope(
  "withPassword",
  { attributes: { exclude: [] } }
);

export default UserDefinition;
