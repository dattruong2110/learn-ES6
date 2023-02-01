// Backend -> API (URL) -> Fetch -> JSON/XML -> JSON.parse -> JavaScript types -> Render ra giao diện với HTML

var postApi = 'https://jsonplaceholder.typicode.com/posts'

// fetch sẽ trả lại stream (luồng dữ liệu trả về)
fetch(postApi)
    .then((response) => {
        return response.json();
        // JSON.parse: JSON -> JavaScript types
    })
    .then((posts) => {
        var htmls = posts.map((post) => {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`;
        });

        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch((err) => {
        alert('Failure!');
    })