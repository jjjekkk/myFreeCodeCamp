function truthCheck(collection, pre) {
      return collection.every((obj)=>obj[pre])
    }
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: true}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"))