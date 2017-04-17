let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const multiplyNumeric = () => {
  for (let key in menu) {
    if (typeof menu[key] === 'number') {
      menu[key] *= 2
    }
  }
}

multiplyNumeric(menu)
