#!/bin/sh
if docker ps | grep -q 'syoboi-calendar-grpc-server'; then docker rm -f syoboi-calendar-grpc-server; fi
docker pull docker.chao.tokyo/syoboi-calendar-grpc-server:latest
docker run --name syoboi-calendar-grpc-server -p 10001:50051 -d docker.chao.tokyo/syoboi-calendar-grpc-server:latest