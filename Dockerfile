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

# Install app dependencies (cache's them)
ADD package.json /tmp/package.json
RUN cd /tmp && npm install

# Move the dependency directory back to the app.
RUN mv /tmp/node_modules .

# Copy code in the docker image
COPY . .

# Expose the port 8080
EXPOSE 8080

# Build the app
CMD ["npm", "run", "build-drone"]
