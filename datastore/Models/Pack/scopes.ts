import { RegisterModelScopesType } from "../types";
import { PackTypes } from "./types";

const registerPackScopes: RegisterModelScopesType<PackTypes> = Pack => {
  Pack.addScope("default", {
    attributes: { exclude: [ "openCount" ] }
  });

  Pack.addScope("public", {
    attributes: { exclude: [ "openCount" ] }
  });

  Pack.addScope("private", {
    attributes: { exclude: [] }
  });
};

export default registerPackScopes;
