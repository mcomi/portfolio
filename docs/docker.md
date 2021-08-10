---
title: Docker snippets
description: Useful Docker commands
---

## Docker useful commands and configurations

- Clean all images, containers and volumes that are not active.

```bash
docker system prune --volumes -a -f
```

- dockerfile for running a create-react-app in a docker container.

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
