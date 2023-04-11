interface IUser {
    firstName?: string;
    middleInitial?: string;
    lastName?: string;
    email: string;
    mobile?: string;
    userName?: string;
    refreshToken?: string;
    password: string;
    lastLogin?: Date
    intro?: string;
    profile?: string;
    creationDate?: Date;
    modifiedDate?: Date;
}

export default IUser;