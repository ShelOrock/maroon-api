interface SearchParameters {
  scope?: string;
  searchCondition?: SearchCondition
}

interface SearchCondition {
  [key: string]: string;
};

type GetAllRecords<Model> = (model: Model, searchParameters?: SearchParameters) => Promise<Model[]>;

type GetRecord<Model> = (model: Model, searchParameters?: SearchParameters) => Promise<Model>;

export {
  GetAllRecords,
  GetRecord
};
