1. yarn
2. yarn add

- express > lightweight and fast web framework for nodejs
- cors > stands for cross origin resource sharing, allows Ajax requests to skip the same-origin policy and access resources from remote hosts + provides an express middleware, access something outside of our server from our server
- mongoose > interacting with MongoDB through node.js simpler
- dotenv > load environment variables from a env file into process env

3. yarn add nodemon

its a tool that helps develop nodejs based applications by automatically restarting the node application when file changes in the directory are detective

4. create server file

5. add nodemon:

npm uninstall nodemon

sudo npm uninstall -g nodemon
What did work was:

sudo npm install -g --force nodemon

6. fix https://stackoverflow.com/questions/57895175/server-discovery-and-monitoring-engine-is-deprecated
   mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

---

0. Create server

1. Create models for schema
2. create routers files

.env file:

ATLAS_URL=mongodb+srv://codecamp_mern:codecamp_mern@cluster0.uzzqm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
