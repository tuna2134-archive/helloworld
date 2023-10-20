FROM node:21-slim

WORKDIR /app

COPY . .

ENV NODE_ENV=production

CMD ["bash", "run.sh"]
