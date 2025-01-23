# Use an official C++ image as the base image
FROM gcc:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the C++ source code into the container
COPY hello.cpp .

# Compile the C++ code
RUN g++ -o hello hello.cpp

# Command to run the executable
CMD ["./hello"]
