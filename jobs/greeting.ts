import { CronJob } from "cron";

const timeZone = "America/Sao_Paulo";

const greetingJob = new CronJob('* * * * *', function() {
    const date = new Date();
    console.log("Hi! - time: ", date.toLocaleTimeString("en-us", { timeZone }));
}, null, false, timeZone);

export default greetingJob;