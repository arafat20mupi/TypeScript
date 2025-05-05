{

    // Getter & Setter

    class BankAccount {
        public readonly name: string;
        protected _balance: number;

        constructor(name: string, balance: number) {
            this.name = name;
            this._balance = balance;
        }

        // addDeposit(amount: number) {
        //     this._balance = this._balance + amount
        // }

        // getBalance() {
        //     return this._balance
        // }


        // getter
        get balance() {
            return this._balance
        }

        // setter
        set deposit(amount: number) {
            this._balance = this._balance + amount
        }


    }


    class StudetAccount extends BankAccount {
        test() {
            this._balance
        }
    }

    const acc = new BankAccount("Arafat", 1000);
    acc.deposit = 100
    const mybalance = acc.balance
    console.log(mybalance);





}