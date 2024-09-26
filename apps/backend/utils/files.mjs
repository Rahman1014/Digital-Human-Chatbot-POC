import { exec } from "child_process";
import { promises as fs } from "fs";

const execCommand = ({ command }) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) reject(error);
      resolve(stdout);
    });
  });
};

const readJsonTranscript = async ({ fileName }) => {
  const data = await fs.readFile(fileName, "utf8");
  return JSON.parse(data);
};

const audioFileToBase64 = async ({ fileName }) => {
  const data = await fs.readFile(fileName);
  return data.toString("base64");
};

// Calling Animation API
const apiHashURL = "http://w3capi.marketing/api/v2/node/8b7c0c4970b1eb5878036a62ef22eaed";
export { execCommand, readJsonTranscript, audioFileToBase64, apiHashURL };
