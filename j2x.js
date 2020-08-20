const fs = require('fs');
const js2xmlparser = require("js2xmlparser");

rawdata = fs.readFileSync('converted.txt')
vip_json = JSON.parse(rawdata)
//console.log(vip_json)

vip_xml = js2xmlparser.parse("VipObject", vip_json)
console.log(vip_xml)
