export type SearchUser = {
    id: string
    avatarUrl: string
    firstName: string
    lastName: string
    userTag: string
    department: string
    birthday: string
    phone: string
}

export type SearchResult = {
    items: SearchUser[]
}