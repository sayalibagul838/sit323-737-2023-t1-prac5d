FROM node:18.15.0
WORKDIR H:\Deakin\SIT737_Cloud\programs\dist_task 
COPY package*.json app.js server.js index.html ./
RUN npm install


