export interface IModalContent {
  description: string
  extent: string
  name: string
  applicationDue: string
}

export interface IWorkLocation {
  country: string
  address: string
  city: string
  postalCode: string
  county: string
  municipal: string
}

export interface IOccupationCategory {
  level1: string
  level2: string
}

export interface IEmployer {
  name: string
  orgnr?: string
  description: string
  homepage: string
}

export interface IJobRootObject {
  uuid: string
  published: Date
  expires: Date
  updated: Date
  workLocations: IWorkLocation[]
  title: string
  description: string
  sourceurl?: string
  source: string
  applicationUrl: string
  applicationDue: string
  occupationCategories: IOccupationCategory[]
  jobtitle: string
  link: string
  employer: IEmployer
  engagementtype: string
  extent: string
  starttime?: string
  positioncount: string
  sector: string
}
