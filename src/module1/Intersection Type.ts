{

    type Identity = { name: string };
    type Contact = { phone: string };

    type Person = Identity & Contact;

    const employee: Person = {
        name: "Jahid",
        phone: "01711111111",
    };

    console.log(employee);


}