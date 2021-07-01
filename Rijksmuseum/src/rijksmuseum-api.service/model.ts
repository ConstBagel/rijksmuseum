export interface IObject {
    "title": string,
    "objectNumber": string,
    "principalOrFirstMaker": string,
    "longTitle": string,
    "webImage": { "url": string }
}

export interface IRespond {
    count: number,
    artObjects: IObject[]
}
