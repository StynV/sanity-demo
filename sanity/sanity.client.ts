import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: "ef3sly4d",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: false,
    token: 'skPxAR8cbI9u6k44OEzvm63BpxPHNkUMCj8fQ4FKWSjZrlUGdOYrUBC4vyvAxFRk6OzzwPch30rbavagCpRStA4CSiKyxP6RGUY3SM6r56gPykdbay50ah8A7RNQWDHGE3WbnZtqjfdN39RYPaRds3AVOi8wWn1gDTP6zwBBm2ZITB7lYNng'
};

const client = createClient(config);

export default client;