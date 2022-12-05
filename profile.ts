import { Education, Subject } from "./types";

export function profile(): Subject {
  return {
    firstName: "Behrang",
    lastName: "Saeedzadeh",
    title: "Programmer",
    contact: {
      mobile: "+61 407 660 665",
      email: "enquiries@behrang.org",
      address: {
        city: "Docklands",
        state: "Victoria",
        country: "Australia",
        postcode: "3008",
      },
    },
    links: [
      {
        rel: "email",
        name: "Email",
        address: "hello@behrang.org",
      },
    ],
    company: {
      name: "Turingg Pty Ltd",
      url: "https://turingg.com.au",
      abn: "28 624 212 120",
      acn: "624 212 120"
    },
  };
}

export function education(): Education[] {
  return [
    {
      institution: "Monash University",
      degree: "Master of Computer Science",
      location: {
        country: "Australia",
      },
      period: {
        startDate: { year: 2007, month: 2 },
        endDate: { year: 2010, month: 1 },
      },
    },
    {
      institution: "AmirKabir University of Technology (Tehran Polytechnic)",
      degree: "Bachelor of Computer Science",
      location: {
        country: "Iran",
      },
      period: {
        startDate: { year: 1999, month: 9 },
        endDate: { year: 2005, month: 5 },
      },
    },
    {
      institution: "SAMPAD High School",
      degree: "Diploma in Physics and Mathematics",
      location: {
        country: "Iran",
      },
      period: {
        startDate: { year: 1995, month: 9 },
        endDate: { year: 1999, month: 5 },
      },
    },
  ];
}
