
# Lift-off II: Resolvers
## url: https://www.apollographql.com/tutorials/lift-off-part2/01-journey-of-a-graphql-query
## API: https://odyssey-lift-off-rest-api.herokuapp.com/docs/

## 1
/server
`npm install && npm run dev`
/client
`npm install && npm start`

## 4
Let's add this RESTDataSource class to our project.
	Apollo DataSource REST: このライブラリは REST API からデータを取得し、それを GraphQL API を通じて提供するのに役立ちます。HTTP リクエストを行い、その応答をキャッシュしてパフォーマンスを最適化するためのユーティリティを提供します。
`npm install @apollo/datasource-rest`



## Lift-off I: Basics
# url: https://www.apollographql.com/tutorials/lift-off-part1/09-codegen

# /server dir　では、npm run dev を使用する
# /clinet dir　では、npm run start を使用する(vite)

## 4. BUILDING OUR SCHEMA
`npm install @apollo/server graphql graphql-tag`

## 5. APOLLO SERVER
モックデータを使用する
`npm install @graphql-tools/mock @graphql-tools/schema`

## 8. APOLLO CLIENT SETUP
- graphql provides the core logic for parsing GraphQL queries.
- @apollo/client contains pretty much everything we need to build our client, including an in-memory cache, local state management, and error handling.
`npm install graphql @apollo/client`

## 9. codegen
Step 1: Installing `@graphql-codegen/cli`
※ これらのパッケージが必要なのは開発時だけなので、devDependenciesの下にインストールする。
`npm install -D @graphql-codegen/cli @graphql-codegen/client-preset`
