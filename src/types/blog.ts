import { baseCategory } from "./category"

export interface baseBlog {
    title: string,
    description : string,
    _id: string,
    isHot: boolean,
    updatedAt: string, createdAt: string
}

export interface blogMarkdown extends baseBlog{
    markdown : string,
    seo : string[]
}