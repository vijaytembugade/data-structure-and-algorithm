//create a class of HashTable
class HashTable {
  //Constructor
  constructor(size = 7) {
    this.dataMap = new Array(size)
  }

  //hash function 
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;

    }
    return hash;
  }
  //now, set the values and keys in hash in ["key", "value"] formate
  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = []
    }
    this.dataMap[index].push([key, value])
    return this
  }

  //get value from hash table with key
  get(key) {
    let index = this._hash(key)
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][j][0]
        }
      }
    }
    return undefined
  }

  // to get all the keys from hash table
  getKeys() {
    let allKeys = []
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j])
        }
      }
    }
    return allKeys
  }
}

let hashTable = new HashTable()
hashTable.set("vijay", 28);
hashTable.set("Sam", 36);
hashTable.set("Sameer", 32);
hashTable.set("Ajay", 19);
