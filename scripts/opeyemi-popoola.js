let result, printResult  // variable declaration

// function declaration
printResult = (prop) => `Hello World, this is ${prop.firstname} ${prop.lastname} with HNGi7 ID ${prop.ID} using ${prop.dev_lang} for stage 2 task`

result = printResult({ ID: "HNG-06043", firstname: "opeyemi", lastname: "popoola", dev_lang: "Javascript" })

console.log(result)
