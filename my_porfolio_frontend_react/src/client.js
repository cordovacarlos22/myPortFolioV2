import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = SanityClient({
  projectId: process.env.APP_REACT_SANITY_PORTFOLIO_PROJECT_ID,
  dataset:'production',
 apiVersion:'03-05-2023',
 useCdn:true,
  token: process.env.APP_REACT_SANITY_PORTFOLIO_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) =>builder.image(source);
