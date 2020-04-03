
function post(){
    let url1 = 'https://my-json-server.typicode.com/aktan24/aktan24.github.io/posts';
    let val = document.getElementsByClassName = ("mainTodo__input");
    let data = val.value;
    fetch(url1,{
        method:'POST',
        body:JSON.stringify(data),
    })
}


export default post;
