import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: "ef3sly4d",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: false,
};

const client = createClient(config);

export default client;