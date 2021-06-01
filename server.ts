import express from "express";
import greetingJob from "./jobs/greeting";

const app = express();

//Starting Jobs
greetingJob.start();

app.listen(8080, () => {
    console.log("The server is running.");
});