// function displayComments(comments) {
//     commentsList.innerHTML = "";
//     comments.forEach(displayComment)
// }
// function displayComment(comment) {
//     const newComment = document.createElement('li');
//     newComment.textContent = comment.content;
//     commentsList.append(newComment);
// }
// function addNewComment() {
//     commentsList.addEventListener('submit', addComment)
// }
// function addComment(event) {
//     event.preventDefault();
//     const newPostedComment = event.target.comment.value;
//     displayComment({ content: newPostedComment });
//     event.target.reset();
// }

function renderTrainRow(train){
    console.log(train)
    let row =document.createElement('tr');
    row.innerHTML=`
    <td>${train.train_num}</td>
    <td>${train.name}</td>
    <td>${train.data.arriveTime}</td>
    <td>${train.data.departTime}</td>
    <td>${train.train_from}</td>
    <td>${train.train_to}</td>
    `;
    document.querySelector('.table').appendChild(row)
}


function getAllTrains(){const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'e1f2dbc0d7mshd0d7051c04779b7p1b61bbjsnec1444b0cac3',
		'X-RapidAPI-Host': 'trains.p.rapidapi.com'
	},
	body: '{"search":"Rajdhani"}'
};

fetch('https://trains.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => {
        response.forEach(train => renderTrainRow(train));
        console.log(response)
    })
	.catch(err => console.error(err));
}

function initialize(){
    getAllTrains()
}
initialize();