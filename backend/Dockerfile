# FROM node:18

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 3006

# CMD ["npm","start"]

# Use official Node.js base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the backend files
COPY . .

# Expose the port used by json-server
EXPOSE 3006

# Start the json-server directly (without npx)
CMD ["npx", "json-server", "-p", "3006", "-w", "db.json"]
