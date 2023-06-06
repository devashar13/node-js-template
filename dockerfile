FROM node:18-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN chown -R node:node /app
USER root
RUN npm install -g pnpm --unsafe-perm
USER node
RUN pnpm install
CMD ["pnpm", "start"]
