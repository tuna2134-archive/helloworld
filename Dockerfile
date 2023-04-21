FROM node:20-slim

WORKDIR /app

COPY . .

ENV NODE_ENV=production

CMD ["bash", "run.sh"]
