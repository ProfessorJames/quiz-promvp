// Wait for the DOM to finish loading before running the game
// Get the topic and difficulty dropdowns

document.addEventListener('DOMContentLoaded', function (){

   



})



// generate picker to select categories an


const getQuestions = (category, difficulty = `easy` , amount = 10, type = `multiple`) => {
    fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=easy&type=multiple`).then( res => res.json()).then(data => console.log(data)).catch(err => console.log(err))
}


getQuestions(22, 'medium', 15, 'boolean');



// {
//     "response_code":0,
//     "results":[
//         {
//             "type":"multiple",
//             "difficulty":"easy",
//             "category":"General Knowledge",
//             "question":"The likeness of which president is featured on the rare $2 bill of USA currency?",
//             "correct_answer":"Thomas Jefferson",
//             "incorrect_answers":["Martin Van Buren","Ulysses Grant","John Quincy Adams"]
//         }
//     ]
// }


// {
//     "trivia_categories":
//     [
//         {"id":9,"name":"General Knowledge"},
//         {"id":10,"name":"Entertainment: Books"},
//         {"id":11,"name":"Entertainment: Film"},
//         {"id":12,"name":"Entertainment: Music"},
//         {"id":13,"name":"Entertainment: Musicals & Theatres"},
//         {"id":14,"name":"Entertainment: Television"},
//         {"id":15,"name":"Entertainment: Video Games"},
//         {"id":16,"name":"Entertainment: Board Games"},
//         {"id":17,"name":"Science & Nature"},
//         {"id":18,"name":"Science: Computers"},
//         {"id":19,"name":"Science: Mathematics"},
//         {"id":20,"name":"Mythology"},
//         {"id":21,"name":"Sports"},
//         {"id":22,"name":"Geography"},
//         {"id":23,"name":"History"},
//         {"id":24,"name":"Politics"},
//         {"id":25,"name":"Art"},
//         {"id":26,"name":"Celebrities"},
//         {"id":27,"name":"Animals"},
//         {"id":28,"name":"Vehicles"},
//         {"id":29,"name":"Entertainment: Comics"},
//         {"id":30,"name":"Science: Gadgets"},
//         {"id":31,"name":"Entertainment: Japanese Anime & Manga"},
//         {"id":32,"name":"Entertainment: Cartoon & Animations"}
//     ]
// }