FROM node:11.1.0

# install Cypress OS dependencies
# https://github.com/cypress-io/cypress-docker-images/blob/master/base/11.13.0/Dockerfile
RUN apt-get update && \
  apt-get install --no-install-recommends -y \
  libgtk2.0-0 \
  libgtk-3-0 \
  libnotify-dev \
  libgconf-2-4 \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb && \
  rm -rf /var/lib/apt/lists/*

WORKDIR /srv/orbit-ui

COPY package.json package.json

RUN npm install

COPY . ./

EXPOSE 8080
RUN npm run build-production
CMD cd dist && python3 -m http.server 8080 --bind 0.0.0.0
