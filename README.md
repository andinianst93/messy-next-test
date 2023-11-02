### Docker Dev 

```docker build -t andinianst93/frontend:latest -f Dockerfile.dev .```

Not good:
```docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app andinianst93/frontend```

#### Docker Compose to setup volume

```
version: '3'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - /app/node_modules
      - .:/app
```

#### Test
Two options
- first:
```docker run -it andinianst93/frontend npm run test```
- second:
set up second container in docker-compose.yml

#### Travis CI
1. Tell travis we need a copy of docker running
2. Build our image using Dockerfile.dev
3. Tell travis how to run our test suite
4. Tell travis how to deploy our code to AWS