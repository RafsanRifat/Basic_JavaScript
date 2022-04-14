const display = document.getElementById('display')


function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => {

            for (let key in data) {
                console.log(key);
                // console.log(`${key}: ${data[key]}`)

                display.innerHTML += key + ':' +data[key]
                // const button = document.getElementById('button').removeAttribute("onclick")
                const button = document.getElementById('button').onclick = ()=> false
            }

        })
}