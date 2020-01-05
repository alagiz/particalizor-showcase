# particalizor-showcase
live demo for [particalizor-3000](https://github.com/ArtemAlagizov/particalizor-3000)

available here at the moment => http://3.13.90.180:8080/ (static image for moving picture component for now)

## deployment
* the app is deployed to a Docker Swarm cluster running on a single node (AWS EC2 t2.micro)
* the following commands were used to deploy the app:
  * create Docker swarm cluster
    ```
    docker swarm init --advertise-addr 172.31.19.6
    ```
  * create stack of services for particalizor-showcase
    ```
    docker stack deploy -c docker-compose.depl.yml particleStackk
    ```
