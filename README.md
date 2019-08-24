## Development environment
* Run
```
  docker-compose up
```
* Run commands
```
  docker-compose run --rm CONTAINER_NAME COMMAND
```
* Connect to mongo database outside docker network:
```
  mongodb://user:user_12345@localhost:27017/database_example
```

## Production environment
* Build
```
  docker build -t sjdonado/docker-ci-api --build-arg var_name=${VARIABLE_NAME} (...) ./api
  docker build -t sjdonado/docker-ci-nginx --build-arg var_name=${VARIABLE_NAME} (...) ./nginx
```
* Run
```
  docker run -d sjdonado/docker-ci-api
  docker run -d sjdonado/docker-ci-nginx
```