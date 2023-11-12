## Description

Scaling NodeJS with Kubernetes and applying Message Queue

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment
Ensure you have docker, kubernetes, helm installed

```bash
# Build Docker image
$ docker build -t your-tag-name:version .

# Push your image (Optional)
$ docker image push your-tag-name

# Run K8S Pods with Helm
$ cd  k8s/nestjs-mq && helm install nestjs-mq .
```
