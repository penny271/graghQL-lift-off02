export const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    // * shema.tsのルートクエリ内のルートフィールドと同じ名前である必要があります
    // ! => リゾルバは、データを入力するフィールドと同じ名前でなければなりません。
    // ^ tracksForHome: (parent, args, contextValue, info) => {},
    // get all tracks, will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  // * TrackAPIのgetAuthorメソッドにはauthorIdが必要である。この値は、リゾルバに渡された親引数から取得します。parent引数には、tracksForHomeリゾルバによって返されたデータが含まれており、tracksForHomeはリストを返すため、Apollo Serverはそのリストを繰り返し、各トラックに対して一度だけauthorリゾルバを呼び出します。parentの値として現在のトラックを渡すことで、authorIdを抽出することができます。
  Track: {
    author: ({ authorId }, __, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};
