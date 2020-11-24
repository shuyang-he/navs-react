FROM node
WORKDIR /
COPY package.json ./
RUN npm install
COPY . .
RUN npm start
CMD ["node", "/index.js"]