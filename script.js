fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        console.log(res);
        if (res.ok) {
            return res.json();
        } else {
            console.error("API JOK");
        }

    });