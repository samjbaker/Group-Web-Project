# We use the official image as a parent image.
FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Set the working directory.
WORKDIR /home/node/app

# Copy the file(s) from your host to your current location.
COPY package*.json ./

# Change the user to node. This will apply to both the runtime user and the following commands.
USER node

# Run the command inside your image filesystem.
RUN npm install

COPY --chown=node:node . .

#building website
RUN ./node_modules/.bin/ng build

RUN wget -O wait-for.sh https://raw.githubusercontent.com/eficode/wait-for/master/wait-for

RUN chmod +x wait-for.sh

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 3000

# Run the specified command within the container.
#CMD [ "node", "seed.js" ]

#CMD ./wait-for.sh db:27017 -- /home/node/app/node_modules/.bin/nodemon server.js

#RUN ./wait-for.sh db:27017 -- node seed.js
