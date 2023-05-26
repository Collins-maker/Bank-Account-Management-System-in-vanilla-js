class BankAccount {
  constructor(accountNumber, accountHolder, balance) {

    //conditional on inputs parameters

    if (typeof accountNumber !== 'string') {
        throw new Error('Account number must be a string');
      }
      if (typeof accountHolder !== 'string') {
        throw new Error('Account holder must be a string');
      }
      if (typeof balance !== 'number') {
        throw new Error('Balance must be a number');
      }
  
    this._accountNumber = accountNumber;
    this._accountHolder = accountHolder;
    this._balance = balance;
  }
//getter method to get the account number
  get accountNumber() {
    return this._accountNumber;
  }
  //setter method to set the account number
  set accountNumber(accountNumber) {
    if (typeof accountNumber !== 'string') {
      throw new Error('Account number must be a string');
    }
    this._accountNumber = accountNumber;
  }

//getter method for account number
  get accountHolder() {
    
    return this._accountHolder;
  }
  //stter method for account number
  set accountHolder(accountHolder) {
    if (typeof accountHolder !== 'string') {
      throw new Error('Account holder must be a string');
    }
    this._accountHolder = accountHolder;
  }

//getter method for balance
  get balance() {
    return this._balance;
  }
  //setter method for balance
  set balance(balance) {
    if (typeof balance !== 'number') {
      throw new Error('Balance must be a number');
    }
    this._balance = balance;
  }

  deposit(amount) {
    this._balance += amount;
    console.log(
      `You have deposited ${amount} to Account number: ${this._accountNumber}`
    );
  }

  withdraw(amount) {
    if (this._balance >= amount) {
      console.log(
        `You have withdrawn ${amount} from bank Account ${this._accountNumber}`
      );
    } else {
      console.log(
        `You have inssufficient balance in your bank to withdraw ${amount} from account: ${
          this._accountNumber
        }`
      );
    }
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, accountHolder, balance, interestRate) {
    super(accountNumber, accountHolder, balance);
    if (typeof interestRate!=='number') {
        throw new Error("interestRate must be a number!")
    }
    this._interestRate = interestRate;
  }

  calculateInterest() {
    interst = (this._interestRate * this._balance) / 100;
    console.log(
      `interest for the account: ${this._accountNumber} is : ${interest}`
    );
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, accountHolder, balance, overdraftLimit) {
    super(accountNumber, accountHolder, balance);
    if (typeof overdraftLimit!=='number') {
        throw new Error("overdraftLimmit must be a number!")
    }
    this._overdraftLimit = overdraftLimit;
  }

  withdraw(amount) {
    if (
      this._balance >= amount ||
      this._overdraftLimit >= this._balannce - amount
    ) {
      console.log(
        `You have withdrwan ${amount} from account ${this._accountNumber}`
      );
    } else {
      console.log(
        `You have inssufficient balance or overdraftLimit in your bank to withdraw ${amount} from account: ${
          this._accountNumber
        }`
      );
    }
  }
}

//testing the implementation
try {
    // Create BankAccount instance
    const bankAccount = new BankAccount('Abc123456789D', 'Collins Muchui', 1000);
  
    console.log('Bank Account Information:');
    console.log('Account Number:', bankAccount.accountNumber);
    console.log('Account Holder:', bankAccount.accountHolder);
    console.log('Balance:', bankAccount.balance);
  
    // // Perform a deposit
    // bankAccount.deposit(500);
    // console.log('New Balance:', bankAccount.balance);
  
    // // Perform a withdrawal
    // bankAccount.withdraw(200);
    // console.log('New Balance:', bankAccount.balance);
  
    // // Create SavingsAccount instance
    // const savingsAccount = new SavingsAccount('987654321', 'Jane Smith', 2000, 5);
  
    // console.log('\nSavings Account Information:');
    // console.log('Account Number:', savingsAccount.accountNumber);
    // console.log('Account Holder:', savingsAccount.accountHolder);
    // console.log('Balance:', savingsAccount.balance);
  
    // // Perform a deposit
    // savingsAccount.deposit(1000);
    // console.log('New Balance:', savingsAccount.balance);
  
    // // Calculate and display interest
    // savingsAccount.calculateInterest();
  
    // // Create CheckingAccount instance
    // const checkingAccount = new CheckingAccount('456789123', 'Alice Johnson', 1500, 1000);
  
    // console.log('\nChecking Account Information:');
    // console.log('Account Number:', checkingAccount.accountNumber);
    // console.log('Account Holder:', checkingAccount.accountHolder);
    // console.log('Balance:', checkingAccount.balance);
  
    // // Perform a deposit
    // checkingAccount.deposit(500);
    // console.log('New Balance:', checkingAccount.balance);
  
    // // Perform a withdrawal within balance
    // checkingAccount.withdraw(200);
    // console.log('New Balance:', checkingAccount.balance);
  
    // // Perform a withdrawal exceeding balance but within overdraft limit
    // checkingAccount.withdraw(3000);
    // console.log('New Balance:', checkingAccount.balance);
  } catch (error) {
    console.log('Error:', error.message);
  }
  


