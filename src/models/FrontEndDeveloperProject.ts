export default interface FrontEndDeveloperProject {
  id: string;
  name: string;
  type: string;
  employment_type: string;
  role: string;
  description: string;
  link: string | null;
  image_thumbnail: string;
  image_gif: string | null;
  skills: string[];
  started_on: string;
  finished_on: string | null;
  images: string[];
  company_name?: string | null;
}
