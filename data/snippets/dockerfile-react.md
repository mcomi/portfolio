---
title: React + NodeJS Dockerfile
description: Dockerffile template to run a react application in a docker container
logo: docker.png
---

# React + NodeJS Dockerfile

Dockerfile for running a create-react-app in a docker container.

```dockerfile
FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
RUN yarn run build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]
```
