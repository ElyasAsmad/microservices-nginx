FROM ubuntu:jammy

RUN apt update -y

RUN curl -fsSL https://bun.sh/install | bash

RUN apt install nginx