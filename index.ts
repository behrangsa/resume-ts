import { Resume } from "./types";
import { education, profile as behrang } from "./profile";
import { workExperience as origin } from "./origin";

const resume: Resume = {
  metadata: {
    defaultLanguage: "asciidoc",
  },
  subject: behrang(),
  workExperience: [origin()],
  education: education(),
};

console.log(JSON.stringify(resume, null, 2));
