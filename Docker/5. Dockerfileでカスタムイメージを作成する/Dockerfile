FROM ubuntu:20.04

RUN apt update
RUN apt install -y curl

COPY . /app/

ENV hello="hello World"
ENV hoge=HOGEHOGE

ARG message
RUN echo $message > message.txt

CMD ["ls", "-la"]