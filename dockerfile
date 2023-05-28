FROM node:18-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN chown -R node:node /app
USER node
RUN npm install
CMD ["npm", "start"]