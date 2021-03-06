import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser";
import getUser from "./endpoints/getUser";
import editUser from "./endpoints/editUser";
import createTask from "./endpoints/createTask";
import getTask from "./endpoints/getTask";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/user", createUser);

app.get("/user/:id", getUser);

app.put("/user/edit/:id", editUser);

app.post("/task", createTask);

app.get("/task/:id", getTask);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
