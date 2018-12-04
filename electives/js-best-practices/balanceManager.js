var balance = 0;

function getBalance(){ 
  return balance;
}

function increaseBalance(amount){
  // if(!this.isValidAmount(amount)) throw new Error('Invalid amount');
  balance += amount;
}

function decreaseBalance(amount){ 
  // if(!this.isValidAmount(amount)) throw new Error('Invalid amount');
  if(!canAfford(amount)) throw new Error('Insufficient balance');
  balance -= amount;
}

function canAfford(amount){
  return amount <= balance;
}

function isValidAmount(amount){
  if(!amount) return false;
  return true;
}

module.exports = {
  getBalance,
  increaseBalance,
  decreaseBalance,
  canAfford,
  isValidAmount
};