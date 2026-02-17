export type ProjectType = {
  name: string;
  slug: string;
  location: string;
  // rate: string
  beds: number;
  baths: number;
  area: number;
  images: projectImage[];
};

interface projectImage {
  src: string;
}
