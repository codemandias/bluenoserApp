# Youtube tutorial
# https://www.youtube.com/watch?v=GIM5irN4Ix0&ab_channel=DylanGonzales
# Stage 0 - Build / Frontend Assets
FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
ENV PORT 8080
EXPOSE 8080
RUN npm run build

CMD [ "npm", "start" ]
# Stage 1 - Serve Frontend Assets
# FROM fholzer/nginx-brotli:v1.12.2
# WORKDIR /etc/nginx
# ADD nginx.conf /etc/nginx/nginx.conf

# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 443
# CMD ["nginx", "-g", "daemon off;"]

# Article dockerfile
# FROM node:12.16.3-alpine as build

# WORKDIR /app

# COPY . ./

# # ---
# FROM fholzer/nginx-brotli:v1.12.2

# WORKDIR /etc/nginx
# ADD nginx.conf /etc/nginx/nginx.conf

# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


# Brightspace Module dockerfile()
# FROM node:16.13.2-alpine

# # set working directory
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# # ENV PATH /app/node_modules/.bin:$PATH

# # install app dependencies
# COPY package.json ./
# # COPY package-lock.json ./
# RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# # add app
# COPY . ./

# # start app
# CMD ["npm", "start"]

