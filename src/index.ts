export type Resume = {
  metadata: Metadata;
  subject: Subject;
  workExperience: WorkExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  publications: PublicationItem[];
};

export type CertificationItem = {};

export type PublicationItem = {};

export type SupportedLanguages = "asciidoc" | "markdown" | "plain";

export type Metadata = {
  defaultLanguage: SupportedLanguages;
};

export type Contact = {
  mobile: Str;
  email: Str;
  address: Partial<Address>;
};

export type Subject = {
  title: Str;
  firstName: Str;
  lastName: Str;
  about: Str;
  contact: Contact;
  company: Company;
  links: LinkItem[];
};

export type WorkExperienceItem = {
  role: Str;
  summary: Str;
  company: Company;
  period: Period;
  links: LinkItem[];
  technologies: TechnologyItem[];
};

export type EducationItem = {
  institution: Str;
  degree: Str;
  period: Period;
  address: Partial<Address>;
};

export type LinkItem = {
  rel: Str;
  name: Str;
  address: Str;
};

export type Company = {
  name: Str;
  url: Str;
  abn: Str;
  acn: Str;
  address: Partial<Address>;
  logo: Image;
};

export type Period = {
  startDate: YearMonth;
  endDate: YearMonth | "current";
};

export type TechnologyItem = {
  name: Str;

  subs?: TechnologyItem[];

  links?: LinkItem[];
};

export type Address = {
  city: Str;
  state: Str;
  postcode: Str;
  country: Str;
};

export type ImageSize = "Small" | "Medium" | "Large" | "FreeSize";

export type DataUrlImage = {
  mimeType: Str;
  encoding: Str;
  data: Str;
};

export type UrlImage = {
  mimeType: Str;
  url: Str;
};

export type Image = DataUrlImage | UrlImage;

export type YearMonth = {
  year: string;
  month: string;
};

export type Str = string | TypedString;

interface TypedString {
  text: string;
  language: SupportedLanguages;
}
