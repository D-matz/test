const assert = require('assert');
const fs = require('fs');
const libxmljs = require('libxmljs');

// Read the sitemap and schema from the file system
// Could just as easily get these over HTTP
const sitemap = fs.readFileSync('valid.xml');
const schema = fs.readFileSync('vip_spec.xsd');

// Parse the sitemap and schema
const vip_info = libxmljs.parseXml(sitemap);
const schemaDoc = libxmljs.parseXml(schema);

// Perform validation
const isValid = vip_info.validate(schemaDoc);

len = vip_info.validationErrors.length;
for(i=0;i<len;i++)
{
console.log("ERROR "+i+": "+vip_info.validationErrors[i])
}


//console.log(vip_info);

// Check results
//assert.ok(isValid, vip_info.validationErrors);
