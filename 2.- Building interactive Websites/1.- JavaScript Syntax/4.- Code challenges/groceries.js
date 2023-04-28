// Write function below
const groceries = arr => {
    let str = '';
    let items = arr.map(elem => elem.item)
    if (arr.length === 1) {
      return items.toString();
    } else {
      let first = items.slice(0, items.length - 1).join(', ');
      let second = items.slice(-1).toString();
      str = first + ' and ' + second;
      return str;
    }
  }
  console.log(groceries( [{item: 'Cheese Balls'}] ));