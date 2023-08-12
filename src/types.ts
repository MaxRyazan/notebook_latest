export interface IUser {
    id: number
    login: string
    password?: string
    notes: Note[]
}

export interface Note {
    id: number
    userId: number
    title: string
    text: string
}

export interface LoginData {
    username: string
    password: string
}

export interface RegData extends LoginData{
    confirmPassword: string,
    secretWord: string
}
