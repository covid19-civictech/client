FROM node:latest AS build

WORKDIR /app
COPY . /app
RUN yarn install 
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html