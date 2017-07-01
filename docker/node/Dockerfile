FROM node:6.11.0-alpine

RUN apk update \
  && apk add tini \
  && apk add git \
  && rm -rf /var/cache/apk/*

ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR /src/

RUN npm install -g yarn && yarn config set prefix /usr/local/ && yarn global add wait-on@1.5.2 && chmod +x /root
ENV PATH=/src/node_modules/.bin:$PATH


EXPOSE 9876
