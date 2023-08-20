import {IUser, Note} from "@/types.ts";


export function getAllUsersFromLS(): IUser[] | undefined {
    const users: string | null = localStorage.getItem('users')
    if (users) return JSON.parse(users)
}
export function getOneUserById(id: number): IUser | undefined {
    const allUsers: IUser[] | undefined = getAllUsersFromLS()
    if(allUsers?.length){
        return allUsers.filter((user: IUser):boolean => user.id === id)[0]
    }
}
export function findByCredentials(username: string, password: string): IUser | undefined {
    const allUsers: IUser[] | undefined = getAllUsersFromLS()
    if(allUsers){
    console.log('allUsers', allUsers)
        return allUsers.filter((user: IUser):boolean => user.username === username && user.password === password)[0]
    }
}

export function getAllNotesFromLS(): Note[] | undefined {
    const notes: string | null = localStorage.getItem('notes')
    if (notes) return JSON.parse(notes)
}

export function saveUserToLocalStorage(dataToSave: IUser) {
    const allUsers: IUser[] | undefined = getAllUsersFromLS()
    if (!allUsers?.length) {
        const users = []
        users.push(dataToSave)
        localStorage.setItem('users', JSON.stringify(users))
    } else {
        if (!allUsers.some((userFromLS: IUser): boolean => userFromLS.username === dataToSave.username)) {
            allUsers.push(dataToSave)
            localStorage.removeItem('users')
            localStorage.setItem('users', JSON.stringify(allUsers))
        }
    }
}

export function saveNoteToLocalStorage(dataToSave: Note) {
    const allNotes: Note[] | undefined = getAllNotesFromLS()
    if (!allNotes?.length) {
        const notes = []
        notes.push(dataToSave)
        localStorage.setItem('notes', JSON.stringify(notes))
    } else {
        if (!allNotes.some((noteFromLS: Note): boolean => normalizeString(noteFromLS.title) === normalizeString(dataToSave.title))) {
            allNotes.push(dataToSave)
            localStorage.removeItem('notes')
            localStorage.setItem('notes', JSON.stringify(allNotes))
        }
    }
}


export function getLastUserId(): number {
    const users = getAllUsersFromLS()
    if(!users?.length) { return 0 }
    users.sort(sortASC)
    return users[users.length-1].id
}
export function getLastNoteId(): number {
    const notes = getAllNotesFromLS()
    if(!notes?.length) { return 0 }
    notes.sort(sortASC)
    return notes[notes.length-1].id
}

function normalizeString(str: string): string {
    return str.toLocaleLowerCase().replace(" ", "")
}

function sortASC(a: {id: number}, b: {id: number}){
    return a.id - b.id
}