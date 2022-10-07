export interface baseBlog {
    title: string,
    description : string,
    _id: string,
    isHot: boolean
}
export interface blogMarkdown extends baseBlog{
    markdown : string
}
