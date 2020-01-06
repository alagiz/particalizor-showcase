# particalizor-showcase
[![build status][build badge]][BUILD_URL]
[![coverage status][coverage badge]][COVERAGE_URL]

live demo for [particalizor-3000](https://github.com/ArtemAlagizov/particalizor-3000)

available here at the moment => http://3.13.90.180:8080/ (static image for moving picture component for now)

## deployment
* the app is deployed to a **docker swarm** cluster running on a single node (aws ec2 t2.micro)
* the following commands were used to deploy the app:
  * create **docker swarm** cluster
    ```
    docker swarm init --advertise-addr 172.31.19.6
    ```
  * create stack of services for particalizor-showcase
    ```
    docker stack deploy -c docker-compose.depl.yml particleStackk
    ```
## ci/cd
* on every pull request merge to master and push to master travis runs yarn install and yarn build (yarn test and yarn lint to be added soon)
  * in case those commands were successful:
     * new docker image is built and pushed to docker hub
     * docker swarm stack is updated with the latest docker image

[BUILD_URL]: https://travis-ci.org/ArtemAlagizov/particalizor-showcase
[build badge]: https://img.shields.io/travis/ArtemAlagizov/particalizor-showcase/master?style=flat-square
[COVERAGE_URL]: https://coveralls.io/github/ArtemAlagizov/particalizor-showcase?branch=master
[coverage badge]: https://img.shields.io/coveralls/github/ArtemAlagizov/particalizor-showcase.svg?style=flat-square&color=red
