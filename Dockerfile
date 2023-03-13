FROM node:19-slim

WORKDIR /app

COPY . .

ENV NODE_ENV=production

CMD ["bash", "run.sh"]
