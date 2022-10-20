# Agent-nodejs microservice 

This sample project allows you to quickly onboard on Forest Admin using agent-nodejs as a microservice, and to migrate step by step from forest-express-sequelize to agent-nodejs

## Setup your environment

You can start migrating to agent-nodejs using either a dedicated remote environment, or your own development environment.
Be careful of the following:
- Using your own development environment might cause layout loose. Make sure you are working on a fresh branch without any layout changes
- Working on a remote environment might be tedious. Anytime you do a change, you will need to deploy to your environment to observe the change. you might to give a shot to [ngrok](https://ngrok.com/) which allows you to work locally with a remote accessible url over https

In this guide, we will guide you to start migrating to agent-nodejs, using both ways.

### Using a development environment (preferred)

1. Copy the development environment variables from your initial project (usually in `.env` file)
2. Shutdown your initial project
3. Start this project using `npm run start`
4. Reach your development environment on `https://app.forestadmin.com`

### Using a remote environment

From your project settings:

1. Create your environment
   ![Alt text](./screenshots/add-new-environment.png?raw=true "Create a new environment")
2. Give your environment a name
   ![Alt text](./screenshots/name-environment.png?raw=true "Name environment")
3. Provide the application URl on which the environment can be reached out
   ![Alt text](./screenshots/application-url.png?raw=true "Application url")
4. Provide the database url, skip this step if you already know it
   ![Alt text](./screenshots/database-url.png?raw=true "Database url")
5. Gather your environment variables, and paste them in the `.env` file
   ![Alt text](./screenshots/environment-variables.png?raw=true "Environment variables")
6. Deploy this sample project (using a remote instance or using ngrok)

You should then be redirected to your environment.

