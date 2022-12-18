export type TResume = {
  metadata: TMetadata;
  subject: TSubject;
  workExperience: TWorkExperience[];
  educationHistory: TEducationHistory[];
  certifications: TCertification[];
  publications: TPublication[];
};

export type TCertification = {};

export type TPublication = {};

export type TSupportedLanguages = "asciidoc" | "markdown" | "plain";

export type TMetadata = {
  defaultLanguage: TSupportedLanguages;
};

export type TContact = {
  mobile: TStr;
  email: TStr;
  address: Partial<TAddress>;
};

export type TSubject = {
  title: TStr;
  firstName: TStr;
  lastName: TStr;
  about: TStr;
  contact: TContact;
  company: TCompany;
  links: TLink[];
};

export type TWorkExperience = {
  role: TStr;
  summary: TStr;
  company: TCompany;
  period: TPeriod;
  links: TLink[];
  technologies: TTechnology[];
};

export type TEducationHistory = {
  institution: TStr;
  degree: TStr;
  period: TPeriod;
  address: Partial<TAddress>;
};

export type TLink = {
  rel: TStr;
  name: TStr;
  address: TStr;
};

export type TCompany = {
  name: TStr;
  url: TStr;
  abn?: TStr;
  acn?: TStr;
  address: Partial<TAddress>;
  logo: TImage;
};

export type TPeriod = {
  startDate: TYearMonth;
  endDate: TYearMonth | "current";
};

export type TTechnology = {
  name: TStr;

  subs?: TTechnology[];

  links?: TLink[];
};

export type TAddress = {
  city: TStr;
  state: TStr;
  postcode: TStr;
  country: TStr;
};

export type TImageSize = "Small" | "Medium" | "Large" | "FreeSize";

export type TDataUrlImage = {
  mimeType: TStr;
  encoding: TStr;
  data: TStr;
};

export type TUrlImage = {
  mimeType: TStr;
  url: TStr;
};

export type TImage = TDataUrlImage | TUrlImage;

export type TYearMonth = {
  year: string;
  month: string;
};

export type TStr = string | TTypedString;

export type TTypedString = {
  text: string;
  language: TSupportedLanguages;
}
