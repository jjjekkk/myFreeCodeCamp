function convertHTML(str) {
  
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&apos;',
    '"': '&quot;'
  }

return str.split('').map(entity=>htmlEntities[entity]||entity).join('')
}

console.log(convertHTML("Dolce <> Gabbana"))