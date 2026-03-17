const sub =

{

"FSD": [

{

"Topic": "HTML",

"course": "Beginer",

"content": ["tags", "table", "form"],

},

{

"Topic": "CSS",

"course": "Beginer",

"content": ["tags", "table", "form"]

}

]};

// for (const x in sub.FSD) {
//     for (const y in sub.FSD[x]) {
//         console.log(sub.FSD[x][y]);
//     }
// }

for(x of sub.FSD){
    console.log(x.Topic);
    console.log(x.course);
    console.log(x.content);
}