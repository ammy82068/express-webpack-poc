
FROM node:12.22.1-alpine3.10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY dist/api.bundle.js .

EXPOSE 5000
CMD ["node","api.bundle.js"]