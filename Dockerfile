FROM node:18-slim

WORKDIR /app

COPY . .

CMD ["yarn", "install", "--frozen-lockfile", "--prod", "&&", "yarn", "build", "&&", "yarn", "start"]
