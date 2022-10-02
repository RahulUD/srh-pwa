export interface baseBlog {
    title: string,
    description : string,
    _id: string
}
export interface blogMarkdown extends baseBlog{
    markdown : string
}