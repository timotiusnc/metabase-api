# metabase-api

Sample code to access Metabase API in TypeScript

Usage:

1. Create `.env` in root folder and set the credentials

```
METABASE_BASE_URL=<URL>/api // don't forget the `/api` suffix
METABASE_USERNAME=<username>
METABASE_PASSWORD=<password>
```

2. Query a question

The filter values must be appended as POST body.

```
npm run query-card -- --cardId=<cardId>
```

3. Get a card from an embedded dashboard

This API doesn't need username/password authentication (replaced with token (JWT)).

The filter values must be appended as query param.

```
npm run query-card-embed-dashboard -- --token=<token> --dashcardId=<dashcardId> --cardId=<cardId>
```
