import { createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: "iyy0n0b6",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:'skMCCaesKjWjnfAbI2C0YTCXPDB5ch3ggeHO8VtCI7cABwbZ8NaaPHdOUSzvlKW1UwfydLJff43uEG5VKeKeGve1jr3WVcOJJ2mlwqSHZOoV7tvJjnTjD5w8FtkICpCXnlQvvebEh7frPDPIf9lGYgDv4e9zZ5OmT48hsQFJTTFD2CnVUGg6',
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);