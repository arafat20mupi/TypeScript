{

    // Type Guard using Typeof & In


    // Type Gourd
    type Alpheneumeric = number | string

    const add = (params1: Alpheneumeric, params2: Alpheneumeric) => {
        if (typeof params1 === 'number' && typeof params2 === 'number') {
            return params1 + params2
        } else {
            return params1.toString() + params2.toString()
        }
    }
    const addnumber = add(1, 2)
    console.log(addnumber);


    // in gourd
    type NormalUser = {
        name: string
    }

    type AdminUser = {
        name: string,
        role: "Admin"
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        } else {
            console.log(`My name is ${user.name} and my role is User`);
        }
    }

    const normalUser: NormalUser = {
        name: "Arafat Islam"
    }

    const adminUser: AdminUser = {
        name: "Parsian",
        role: 'Admin'
    }

    getUser(adminUser)

}