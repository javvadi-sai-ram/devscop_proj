# Use official node image
FROM node:14

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose port
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
