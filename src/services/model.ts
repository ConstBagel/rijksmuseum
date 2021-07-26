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
