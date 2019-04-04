FROM node:11.1.0

WORKDIR /srv/orbit-ui

COPY package.json package.json

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "run", "open:dist" ]
