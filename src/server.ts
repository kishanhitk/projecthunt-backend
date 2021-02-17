import express from "express";
import { createConnection } from "typeorm";
import { BaseEntity } from "./entities/Base_Entity";
import { Comment } from "./entities/Comment";
import { Hashtag } from "./entities/Hashtag";
import { Image } from "./entities/Image";
import { Project } from "./entities/Project";
import { User } from "./entities/User";
import { Vote } from "./entities/Vote";
const app = express();
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

async function start() {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "projecthunt",
      password: "projecthunt",
      database: "projecthunt",
      synchronize: true,
      logging: true,
      logger: "advanced-console",
      entities: [User, BaseEntity, Image, Project, Vote, Hashtag, Comment],
    });
  } catch (error) {
    console.error(error);
  }
  app.listen(3000, () => {
    console.log("Listening to port 3000");
  });
}

start();
