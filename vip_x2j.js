const fs = require('fs')

fs.readFile('valid.xml', 'utf8' , (err, rawtext) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(rawtext)

  var vip_json = {};
  

})
