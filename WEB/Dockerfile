FROM node:16

# Bundle app source
COPY . .

RUN npm ci

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"]