let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
let test= document.getElementById("number")
languages.forEach(element => test.innerHTML+=`<p>${element}</p>`);


