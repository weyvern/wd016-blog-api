# CRUD API + Mongo

![WBS Coding School](https://mlsf03rmjfdn.i.optimole.com/fVWTwdQ.Z_5R~130ed/w:auto/h:auto/q:90/https://www.wbscodingschool.com/files/WBS_CODING_SCHOOL_logo.svg)

## Install

- Fork project
- Clone your fork:

```bash
git clone <link-to-project>
cd <project-directory>/
npm install
```

## Environment

The app needs the following environment variables

- MONGO_URI=MongoDB connection string
- CORS_ORIGIN=Allowed origin (CORS)
- JWT_SECRET=Secret to sign auth tokens
- AWS_BUCKET=Name of S3 bucket, if a value is passed the next 3 values are required and AWS S3 will be used, if not, files will be stored in local server
- AWS_ACCESS_KEY_ID=AWS access id
- AWS_SECRET_ACCESS_KEY=AWS access key
- AWS_REGION=Bucket region

# Commands

## Dev

Dev commands runs app with nodemon

```bash
npm run dev
```

## Start

Start commands runs app with Node

```bash
npm start
```

# API routes and methods

Check the following Postman collection for more details: [link to Postman collection](https://www.postman.com/collections/a44b657b7ab4f1bf4015)
