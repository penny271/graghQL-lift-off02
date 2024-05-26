export type TrackModel = {
  id: string;
  title: string;
  //* ここだけREST API と graphQL Schemaとで食い違っているので変更
  authorId: string;
  thumbnail: string;
  length: number;
  modulesCount: number;
};

export type AuthorModel = {
  id: string;
  name: string;
  photo: string;
};
