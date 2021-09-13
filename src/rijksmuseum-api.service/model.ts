export interface IObject {
    title: string,
    objectNumber: string,
    principalOrFirstMaker: string,
    longTitle: string,
    webImage?: { "url": string },
    headerImage?: { "url": string },
}

export interface IRespond {
    count: number,
    artObjects: IObject[]
}

export interface IRespondObject {
    elapsedMilliseconds: number,
    artObject: IObjectDetails,
    artObjectPage: {}
}

export interface IObjectDetails {
        webImage: {
            url?: string
        }
        title: string
        description: string
        artObjectPage: {
            tags: string[]
        },
        objectTypes: string[]
}
