{

    type Person = {
        name: string;
        age: number;
        address: string;
        phone: string;
    }

    // Pick Type
    type PersonNameAndAge = Pick<Person, 'name' | 'age'>; // { name: string; age: number; }


    // Omit Type
    type PersonWithoutAddress = Omit<Person, 'address'>; // { name: string; age: number; }

    // Required Type
    type PersonWithRequired = Required<Person>; 
    // { name: string; age: number; address: string; phone: string; }

    // Partial Type
    type PersonWithPartial = Partial<Person>;
    // { name?: string; age?: number; address?: string; phone?: string; }

    // Readonly Type
    type PersonWithReadonly = Readonly<Person>;
    // { readonly name: string; readonly age: number; readonly address: string; readonly phone: string; }

    // Record Type
    type PersonRecord = Record<string, string>;
    // { [key: string]: string; }

    // Exclude Type
    type ExcludeType = Exclude<'name' | 'age' | 'address' | 'phone', 'name' | 'age'>; // 'address' | 'phone'






}