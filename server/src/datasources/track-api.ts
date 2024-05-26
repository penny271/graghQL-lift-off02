import { RESTDataSource } from "@apollo/datasource-rest";
import { TrackModel, AuthorModel } from "../models";

export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  //  tracksForHome: [Track!]!
  getTracksForHome() {
    // * この TrackModel を使って getTracksForHome で呼び出される this.get メソッドにアノテーションを付けます。このメソッドはジェネリックを受け付け、TrackModel オブジェクトの配列を返すことを示します。
    return this.get<TrackModel[]>("tracks");
  }

  getAuthor(authorId: string) {
    return this.get<AuthorModel>(`author/${encodeURIComponent(authorId)}`);
  }
}
