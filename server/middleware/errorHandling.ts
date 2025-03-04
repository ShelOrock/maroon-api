import { 
  Request,
  Response,
  NextFunction
} from "express";

const handleAPIRouteNotFound = (_request: Request, response: Response, nextFunction: NextFunction) => {
  const err = new Error("API Route not found");
  response.status(404);
  nextFunction(err);
};

export {
  handleAPIRouteNotFound
};
