# micro20

# I. Setup and Hello world like code

docker:

set DOCKER_HOST=tcp://127.0.0.1:2376
mvn package docker:build
NO_PROXY=192.168.99.100
docker-compose -f src/main/docker/app.yml up -d

angular:
ng serve --proxy-config proxy.conf.json

npm install @angular/common@latest @angular/compiler@latest @angular/compiler-cli@latest @angular/core@latest @angular/forms@latest @angular/http@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/platform-server@latest @angular/router@latest @angular/animations@latest typescript@latest --save

1. Angular-2
2. SpringBoot
3. Swagger
4. Docker
--[done]----------

5. ZooKeeper
6. Kafka
--
7. JWT
9. SpringCloud
7. Cloud platform, one of: OpenShift, AWS, Google, CloudFoundry  
8. CI platform
--
10. gRPC
11. Axon
12. zipkin
--
13. Java-8
14. Java-9

II. Milestone 2

-DXXXXjava.net.useSystemProxies=true
-DXXXXjdk.http.auth.tunneling.disabledSchemes=true

-DXXXXhttp.proxySet=true 

-Dhttp.proxyHost=158.169.9.13
-Dhttp.proxyPort=8012
-Dhttp.proxyUserName=veninma
-Dhttp.proxyPassword=Parola


-Dhttps.proxyHost=158.169.9.13
-Dhttps.proxyPort=8012
-Dhttps.proxyUserName=veninma
-Dhttps.proxyPassword=Parola
