FROM golang:1.21.4

WORKDIR /usr/src/microservice2

COPY . .

RUN go mod download

RUN go build -o /microservice2

EXPOSE 7272

ENTRYPOINT [ "/microservice2" ]