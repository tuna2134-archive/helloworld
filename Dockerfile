FROM node:lts-slim


WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile --prod

COPY . .
ENV NODE_ENV production
EXPOSE 3000

CMD ["yarn", "build", "&&", "yarn", "start"]
