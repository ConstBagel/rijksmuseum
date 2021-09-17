export interface IObject { 
  title: string;
  objectNumber: string;
  principalOrFirstMaker: string;
  longTitle: string;
  webImage?: { url: string };
  headerImage?: { url: string };
}

export interface IRespond {
  count: number;
  artObjects: IObject[];
}

export interface IObjectDetails {
  webImage?: string,
  hasImage: boolean,
  title: string,
  description: string,
  productionPlaces: string[],
  materials: string[],
  principalOrFirstMaker: string,
  dating: {
    yearEarly: string,
    yearLate: string
  },
  classification: {
    iconClassDescription: string[]
  }
}

export interface IDetails {
  elapsedMilliseconds: number,
  artObject: IObjectDetails
}
