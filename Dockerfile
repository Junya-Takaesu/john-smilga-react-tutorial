FROM node:14.17.4-alpine3.14
WORKDIR /app
COPY package.json package.json
RUN npm install

CMD [ "sh" ]