# Use official Java 21 runtime
FROM eclipse-temurin:21-jdk

# Set working directory inside container
WORKDIR /app

# Copy Gradle wrapper and config
COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .

# Download dependencies (cache layer)
RUN ./gradlew dependencies --no-daemon

# Copy source code
COPY src src

# Build the application
RUN ./gradlew build --no-daemon

# Expose application port
EXPOSE 8080

# Run the Spring Boot application
CMD ["java", "-jar", "build/libs/CRUD-0.0.1-SNAPSHOT.jar"]
