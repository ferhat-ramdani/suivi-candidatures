# Use a base image with JDK 17 installed
FROM openjdk:17-jdk-alpine

# Set the working directory
WORKDIR /app

# Copy the necessary files
COPY target/suivi-candidatures-0.0.1-SNAPSHOT.jar /app

# Expose the port that the application will run on
EXPOSE 8080

# Start the application
CMD ["java", "-jar", "suivi-candidatures-0.0.1-SNAPSHOT.jar"]
