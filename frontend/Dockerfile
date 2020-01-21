FROM node:13

COPY ./ /usr/src/app/
WORKDIR /usr/src/app/

COPY package*.json ./
EXPOSE 8000

RUN npm install

CMD ["npm", "start"]
