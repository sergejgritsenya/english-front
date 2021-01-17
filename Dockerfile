FROM node:12.16.2 as build

WORKDIR /usr/src/app

COPY package.json yarn.lock tsconfig.json ./

RUN yarn

COPY . ./

RUN yarn build

FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
