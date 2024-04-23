import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: "ef3sly4d",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: false,
    token: 'skswi4a3EZY9mqqQUAy5uEyP6mwtftd4SepteZ8Yww3kp14zY9GnC1UTQv5G31vgy3rW3CfziME6enEBkPYqC4zrm47VXI4aHZSHNd7R46H4chtdP7ghZNPIFTotFCPywZNaEwt9uz0VDT64mSKo9AMyHquas4RdKxfVIWxXZFKmaUIAwIWG'
};

const client = createClient(config);

export default client;