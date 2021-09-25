# ToDoList
A Web API used for ToDoList project.

## Installation
Follow the steps below to get started with this project's development environment.
1. Download and install ASP.NET Core from [https://dotnet.microsoft.com/download/dotnet/5.0](https://dotnet.microsoft.com/download/dotnet/5.0)
2. Download and install SQL Server Express from [https://www.microsoft.com/en-us/sql-server/sql-server-downloads](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
3. Download and install Visual Studio 2019 from [https://visualstudio.microsoft.com/downloads/](https://visualstudio.microsoft.com/downloads/)
4. Clone this repository and navigate into it

## Setup
To run this project, open the cloned repository in Visual Studio and follow these steps:
1. Choose ToDoList.WebAPI as Startup project
2. Choose ToDoList.WebAPI (Kestrel Server) instead of IIS Express (this step is required if the API is going to be used along with the FE)
3. Run the API

## API Documentation
After running the API, append */swagger* to the end of the URL, for example *https://localhost:8000/swagger*. 
It includes API documentation for all of the implemented endpoints and operations on each endpoint, as well as operation parameters, input and output for each operation, authentication methods, and so on.