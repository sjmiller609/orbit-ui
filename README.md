# Orbit

UI for Astronomer Cloud && Astronomer Enterprise.

Built in React. Connects to Houston API via Apollo.

## Run Locally

### Houston API

1.  Download Houston from https://github.com/astronomerio/houston-api/tree/run-orbit-local.

Note: To create deployments on your local machine, you must use the _run-orbit-local_ branch, which disables Commander service from actually spinning up new Airflow instances.

2.  Houston requires Docker to run. Make sure you have Docker installed.

3.  Run `docker-compose-up` in your houston-api repo.

4.  Navigate to http://localhost:8870/playground to access the graphql playground (and ensure houston is running.)

Note: Sometimes the docker image doesn't spin down, and thus, doesn't start up again correctly. Run `docker-compose down` and then try again.

### Orbit

1.  Download orbit https://github.com/astronomerio/orbit

2.  Run `npm install` in orbit repo

3.  Run `npm run local` to start the app.

4.  Go to http://localhost:5000/

### Temporary Auth

Before auth is setup, we still need to generate and use a token for any API calls to Houston.

1.  Go to Houston playground

2.  Enter this mutation:

````
mutation createToken($identity: String!, $password: String!) {
      response: createToken(identity: $identity, password: $password) {
        success
        message
    		token
      }
    }
```

3. In the query variables section, enter:

```
{
"identity": "admin",
"password": "admin"
}
```

4. Run the mutation. Copy the `token`.

5. Open orbit and in your console, paste `localStorage.setItem('token', YOUR_TOKEN_HERE)`. Hit enter. You should be good to go. Though note that the token expires every 24 hrs or so, you may need to redo these steps.
```
````
