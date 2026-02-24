export type ProjectType = {
  name: string;
  slug: string;
  details: string;
  primaryObjectives: string[];
  baths: number;
  area: number;
  images: projectImage[];
};

interface projectImage {
  src: string;
}
