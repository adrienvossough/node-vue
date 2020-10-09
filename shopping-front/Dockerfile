FROM node as build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d
CMD ["nginx", "-g", "daemon off;"]