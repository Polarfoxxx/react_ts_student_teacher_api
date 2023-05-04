export type TypeSignIn = { 
    userName: string,
    password: string
}

export type TypeSignUp = {
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    email: string,
    phoneNumber: string,
}

export type TypeResponseLoginIn = {
    JWTkey: string,
    status: number
}