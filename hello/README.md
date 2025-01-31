# Docker Container Hello World
## Build
docker build -t cpp-hello-world .
## Run
docker run cpp-hello-world

## Build and Run if in Container
g++ -o hello hello.cpp
./hello
