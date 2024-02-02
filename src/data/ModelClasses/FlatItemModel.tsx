// export interface ItemInterface {
//     Id:string;
//     title:string;

// }

class UserModel {
    id: string;
    name: string;
    username: string;
    phone: string;
    email: string;
    website: string;
    constructor({ id, name, username,phone,email,website }: { id: string, name: string, username: string,phone:string,email:string,website:string}) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.phone = phone;
        this.email = email;
        this.website = website;
    }
}