FROM node:11.1.0

WORKDIR /srv/orbit-ui

COPY package.json package.json

RUN npm install

COPY . .

EXPOSE 5000:5000
CMD [ "npm", "start" ]
