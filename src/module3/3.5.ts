{

    // Access Modifiers

    class BankAccount {
        public readonly name: string;
        protected _balance: number;

        constructor(name: string, balance: number) {
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number) {
            this._balance = this._balance + amount
        }

        getBalance() {
            return this._balance
        }
    }


    class StudetAccount extends BankAccount {
       test() {
        this._balance
       }
    }

    const acc = new BankAccount("Arafat", 1000);
    acc.addDeposit(500)
    // acc.name = "122"    read only property (not Work)
    const mybalance = acc.getBalance()
    console.log(acc);





}