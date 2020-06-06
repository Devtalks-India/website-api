FROM node:12
WORKDIR /usr/src/app
COPY package.json package*.json ./
RUN npm -g i yarn
RUN npm install --only=production
COPY . .
CMD ["npm", "start"]


