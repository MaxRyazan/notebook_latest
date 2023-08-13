export interface IUser {
    id: number
    username: string
    password?: string
    notes: Note[]
}

export interface Note {
    id: number
    userId: number
    title: string
    text: string
    tags: string[]
    dateTime: number
}

export type NewNote = Omit<Note, 'id'>

export interface LoginData {
    username: string
    password: string
}

export interface RegData extends LoginData{
    confirmPassword: string,
    secretWord: string,
    notes: Note[]
}
