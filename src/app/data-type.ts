export interface signUp{
    name: string,
    email: string,
    password: string,
    department: string,
    empid: string,
    id: number
}

export interface userSignup{
    name: string,
    email: string,
    password: string
}

export interface login{
    email: string,
    password: string
}

export interface cars{
    carnumber: string,
    color: string,
    carmodel: string,
    carimg: string,
    licence: string,
    seats: number,
    area: string,
    drivername: string,
    email: string,
    id: number
}

export interface booking{
    carnumber: string,
    color: string,
    carmodel: string,
    carimg: string,
    licence: string,
    seats: number,
    area: string,
    drivername: string,
    email: string,
    id: number | undefined,
    userId: number
}

export interface requests{
    email: string,
    message: string,
    from: string
}

export interface mailingList{
    email: string
}