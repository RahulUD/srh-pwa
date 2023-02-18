export interface baseSyllabus {
    title: string,
    markdown : string,
}

export interface responseSyllabus extends baseSyllabus{
    _id : string
}