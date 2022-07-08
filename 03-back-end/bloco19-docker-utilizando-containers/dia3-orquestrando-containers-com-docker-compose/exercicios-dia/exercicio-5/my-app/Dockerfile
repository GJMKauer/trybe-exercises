FROM node:13-alpine
WORKDIR /my-app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
EXPOSE 80
CMD ["npm", "start"]