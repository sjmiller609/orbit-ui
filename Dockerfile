FROM node:6.1.0
WORKDIR ./app
COPY [ "package.json", "webpack.config*", ".babelrc", ".eslintrc", ".istanbul.yml", ".npmrc", ".travis.yml", "./" ]
RUN npm install
EXPOSE 5000:5000
CMD [ "npm", "start" ]
