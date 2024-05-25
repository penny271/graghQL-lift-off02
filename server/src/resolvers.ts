export const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    // * shema.tsのルートクエリ内のルートフィールドと同じ名前である必要があります
    // ! => リゾルバは、データを入力するフィールドと同じ名前でなければなりません。
    // tracksForHome: (parent, args, contextValue, info) => {},
    tracksForHome: () => {},
  },
};
