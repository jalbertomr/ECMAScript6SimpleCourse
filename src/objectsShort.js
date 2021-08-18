const createObject = (name, age) => {
    return {
      name,
      age,
      showInfo: function() { return `name: ${name} age: ${age}`;}
    }
    
}

console.log( createObject("Juan", 24).showInfo());