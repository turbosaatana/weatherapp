FROM node:13

COPY ./ /usr/src/app/
WORKDIR /usr/src/app/

COPY package*.json ./

ENV APPID=${APPID}

EXPOSE 9000

RUN npm install

CMD ["npm", "start"]