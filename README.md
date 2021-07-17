
# How to make build for express js (node js) using Webpack and deployment on Docker

## A step by step guide with an example

This article lists all the necessary steps for making a build for Node.js rest API with plain vanilla javascript.

For Creating this we need some tools for setup webpack for making build these are:

 1. ***Node js***

 2. **express**

 3. **nodemon**

 4. **eslint**

 5. **webpack**

 6. **Docker**

now we use these for making express js APIs.

![**Node Js. (express js ) API**](https://cdn-images-1.medium.com/max/2000/1*z4NzE9_4UVDjbPEMhsINUg.png)

In this phase, we will start some basic steps

* ***Initial express js api's setup***

* ***nodemon***

* ***Linting your project***

 1. ***Initial express js api’s setup***

Any node.js project starts with package.json then we will create our project.

For starting this project we will have node js latest version and npm latest version. After installing these we will use ***npm init **command for generating package.json.*

    mkdir express-webpack-poc
    cd express-webpack-poc
    npm init

Now it will ask you all the details like the package name, version, author, etc. You can leave them **blank** or give some values that will create a ***package.json*** in your folder.

Your package.json will look like this now:

 <iframe src="https://medium.com/media/61a7d1fa97b3dc8580cbfb9c17688e6a" frameborder=0></iframe>

let’s import express into index.js and create an HTTP server that listens on port 5000 and create a default route with “/” and another with “/api/user”.

Now run the below command

    node index.js

now open the browser and hit **http://localhost:5000 **and the default route works!!.

![Snapshot of the default route.](https://cdn-images-1.medium.com/max/2000/1*MAINqYySLtJGtITF88WsEA.png)

![](https://cdn-images-1.medium.com/max/2120/1*dvBZTIza_Ls-LCV1FO5sPA.png)

Let’s add scripts to package.json. Scripts are a great place to add all your commands so that you can run with the ***npm ***command

    "scripts": {   
        "start": "node index.js"
     },

now you can run with the command ***npm start.***

 <iframe src="https://medium.com/media/304a2f3013727012c2a336f3f45f461e" frameborder=0></iframe>

 1. **Nodemon**

Now add the install nodemon package it's stopping a manual restart of the server.

After changing and saving the file it restarts the server without any manual intervention. we install this as **dev dependencies **so we add flags for development purposes.

    npm install nodemon --save-dev

    // dev dependencies will be added
    "devDependencies": {
       "nodemon": "^1.18.10"
    }

    // scripts section in package.json
    "scripts": {
       "start": "node index.js",
       "startdev": "nodemon index.js",
    }

run the below npm command and edit the file you can see changes instantly without restart of the server. it boosts your productivity.

    npm run startdev

![nodemon](https://cdn-images-1.medium.com/max/2354/1*KQfLtZ61NAxLHGzi55hZ2Q.png)

## Linting your project

Let’s add eslint to our project. it’s very important to have linting for your project to maintain the same coding standards across your team. you have to use linting.

Run some following commands one by one.

    // installs eslint global so that you can use eslint
    npm install -g eslint

    //installs eslint for the project

    npm install eslint -save-dev

    //it will create .eslintrc.js, while creating it will create bunch
    of questions like which standards you want to use etc..

    eslint --init

now after init, it should ask some questions related to your project.

![eslint — lint](https://cdn-images-1.medium.com/max/2000/1*v1QX4QTznsKAmA09b4en1Q.png)

![](https://cdn-images-1.medium.com/max/2000/1*DjKzZ9k2Gh75YflR8JQEpA.png)

![](https://cdn-images-1.medium.com/max/2000/1*6bXxIhjPCXwAkk-Kg5BIQQ.png)

![](https://cdn-images-1.medium.com/max/2000/1*k6Ho90R7Ns5K0pZAMEpI_A.png)

![](https://cdn-images-1.medium.com/max/2914/1*IXWoAqeKjaKVsF2hXv3E3g.png)

    
    //add these below to scripts section in package.json
    "eslint": "eslint ./",
    "eslint-fix": "eslint ./ --fix",

when you first run the below command you will have lot of eslint errors you can easily fix all these with the second command

    npm run eslint
    npm run eslint-fix

![](https://cdn-images-1.medium.com/max/2028/1*Y6TIFhIL74BRAwnix_ktrg.png)

Now after eslint-fix command error fixed.

![](https://cdn-images-1.medium.com/max/2000/1*357cUuEC1WYtt-GGPpWTVw.png)

Now we add a file to avoid errors.

1 “**. eslintignore”**

 <iframe src="https://medium.com/media/f013dc05d493daac3f596deb612af01a" frameborder=0></iframe>

 <iframe src="https://medium.com/media/e9e42d1c1af4369c1d1ae8962a42a178" frameborder=0></iframe>

these all steps are at development purpose now let’s start for production phase to deploy this application.

In this, we have two-phase these are -

* ***Webpack setup***

* ***Dockerfile***

## **Webpack:**

once development is complete, we need to bundle our app and deploy it into other environments like stage,uat, and prod, etc.

Let’s add a webpack to our project to bundle the entire app file into a single file.

install the following to setup webpack

    // install webpack global
    npm install -g webpack

    //install webpack and webpack-cli in the project
    npm install webpack webpack-cli --save-dev

    // add below to scripts section in package.json
    "build": "webpack"

Now create a new file which the name webpack.config.js where we mention about starting file, output file, and target. All these are important.

 <iframe src="https://medium.com/media/b58a02a68a095b401e38aaa75c8d17e0" frameborder=0></iframe>

when we run the below command it converts the whole project into a single file.

    npm run build

![](https://cdn-images-1.medium.com/max/2000/1*dcZa3xtA4UKD_Jf9wwh9tA.png)

![](https://cdn-images-1.medium.com/max/2000/1*Ika2uW3zUaVatoiXP2mFxg.png)

after the build is complete, let’s add the below npm script to the scripts section in the package.json and run the command

    "prod": "node dist/final.js",

    npm run prod  //run this in the terminal

![](https://cdn-images-1.medium.com/max/2000/1*QMG707kK75zgmGoElLH_6g.png)

## **Dockerize the application**

For Dockerize the application we need to write a docker file and .dockerignore file.

let’s start to write the .dockerignore file.

    //add this in docker ignore file.

    node_modules

Now write docker file.

 <iframe src="https://medium.com/media/6f68c8fc5a84e2634d3b911c5fb17a1a" frameborder=0></iframe>

now create image using below command

    docker build -f dockerfile -t <imagename> .

After creating image you can run using command:

    docker run -p 5000:5000 -d imagename

now go to hostid with port:

like local docker run snapshot

![Snapshot of the default route.](https://cdn-images-1.medium.com/max/2000/1*MAINqYySLtJGtITF88WsEA.png)

For any query message or comment.
