//converts json file to xmile file
//formatting to ensure idempotent conversion is done here

var fs = require('fs');

fs.readFile(__dirname + '/converted.txt', function(err, data) {
	as_js = JSON.parse(data)
/*
	for(i=0;i<10;i++)
	{
		as_str = JSON.stringify(as_js)
		has_b = as_str.includes('{') || as_str.includes('[')
		console.log(has_b)

		xml_again = Object.keys(as_js)
		console.log(xml_again)
		if(xml_again.length > 1){	
			as_js = as_js[xml_again[0]]
		}
		else
		{
			as_js = as_js[xml_again]
		}
	}*/
//	console.log(parse(as_js,'test ',2))


	parse(as_js, 0)

//	xml_again = JSON.stringify(as_str)
	
	fs.writeFile('xml_again.txt', as_js, function (err) {
	  if (err) return console.log(err);
	});
});

function parse(json) {
	for(k in json)
	{
		console.log(k)
		if(typeof json[k] === "object")
		{
			if(k == "$")
			{
				in_tag = json[k]
				key = Object.keys(in_tag);
				val = in_tag[key];
				console.log("money " + key + " " + val)
			}
			else
			{
				parse(json[k])
			}
    		} 
		else
		{
			//console.log(json[k]);
    		}
	}
}

/*
function parse(input, output) {
	as_str = JSON.stringify(input)
	has_b = as_str.includes('{') || as_str.includes('[')
	if(has_b)
	{
		ret = ""

		keys = Object.keys(input)
		console.log(keys.length+" len: "+keys)
		if(keys.length > 1)
		{
			for(i=0;i<keys.length;i++)
			{
				console.log(i + " using key " + keys[i] + " " +keys.length)
				sub_js = JSON.parse(JSON.stringify(input[keys[i]])) //this monstrosity appears necessary to create a shallow copy
				sub_res = parse(sub_js, output)
				ret = ret + sub_res
			}
		}
		else
		{
			as_js = input[keys]
			sub_res = parse(as_js, output)
			ret = ret + sub_res
		}
		return ret

	}
	else
	{
		output = output + input
		return output
	}
}*/
