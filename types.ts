export type Resume = {
  metadata: Metadata;
  subject: Subject;
  workExperience: WorkExperience[];
  education: Education[];
  certifications?: Certification[];
  publications?: Publication[];
};

export type Certification = {};

export type Publication = {};

export type Metadata = {
  defaultLanguage: string;
};

export type Subject = {
  firstName: Str;
  middleName?: Str;
  lastName: Str;
  title: Str;
  contact: {
    mobile: Str;
    email: Str;
    address: Partial<Address>;
  };
  company?: {
    name: Str;
    url?: Str;
    abn?: Str;
    acn?: Str;
  };
  links?: Link[];
};

export type WorkExperience = {
  company: Company;
  period: Period;
  summary: Str;
  links?: Link[];
  technologies?: Technology[];
};

export type Education = {
  institution: Str;
  degree: Str;
  period: Period;
  location?: Partial<Address>;
};

export type Str =
  | string
  | {
      text: string;
      language?: "markdown" | "asciidoc";
    };

export type Link = {
  rel: Str;
  name: Str;
  address: Str;
};

export type Company = {
  name: Str;
  url: Str;
  address: Partial<Address>;
  logos?: { [key in ImageSize]?: Image };
};

export type Period = {
  startDate: YearMonth;
  endDate: YearMonth | "current";
};

export type Technology = {
  name: Str;

  subs?: Technology[];

  links?: Link[];
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
  encoding?: Str;
  data: Str;
};

export type UrlImage = {
  mimeType: Str;
  url: Str;
};

export type Image = DataUrlImage | UrlImage;

export type YearMonth = {
  year: number;
  month: number;
};
