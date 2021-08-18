const createObject = (name, age) => {
    return {
      name,
      age,
      showInfo() { return `name: ${name} age: ${age}`}
    }
    
}

console.log( createObject("Juan", 24).showInfo());