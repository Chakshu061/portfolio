import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 's5y4ny91',
  dataset: 'production',
  apiVersion: '2023-04-02',
  useCdn: true,
  token: 'sk2l1GU7XZxZI5VOJ670n0d8b6Y2ynHpbkjegGZIocPgb5tS26AeLv3msyis96jruz90uWNWcdZ6bDkhQdai1f8eoI4FSNRAgU4QS9TspyzmjURFBsSks0Ynq3faQBpVWAKDHDOap39vqyCb4wBG70dTaWp8rDYmHyauWk6pzlOsCmbdDcqm',
});
  
const builder = imageUrlBuilder(client);
  
export const urlFor = (source) => builder.image(source);