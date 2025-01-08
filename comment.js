document.getElementById("commentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.style.display = 'block';

    fetch("comment.php", {
        method: "POST",
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        responseMessage.innerText = data; 
        responseMessage.style.color = "greenyellow"; 
        document.getElementById("statusImage").src = "images/happycaco.gif";

        loadComments();
    })
    .catch(error => {
        console.error("Fetch error:", error);
        responseMessage.innerText = "Hubo un error al enviar tu comentario...";
        responseMessage.style.color = "red";  
    });
});

function loadComments() {
    fetch("getcomment.php")
        .then(response => response.json())
        .then(comments => {
            const commentsList = document.getElementById("commentsContainer");
            commentsList.innerHTML = "";

            comments.forEach(comment => {
                const commentDiv = document.createElement("div");
                commentDiv.className = "comment";

                const img = document.createElement("img");
                img.src = "images/pfp.png";
                img.alt = ":D";
                commentDiv.appendChild(img);

                const contentDiv = document.createElement("div");
                contentDiv.className = "comment-content";

                const nameDiv = document.createElement("div");
                nameDiv.className = "comment-name";
                nameDiv.innerText = comment.name;
                contentDiv.appendChild(nameDiv);

                const commentText = document.createElement("p");
                commentText.className = "comment-text";
                commentText.innerText = comment.comment;
                contentDiv.appendChild(commentText);

                commentDiv.appendChild(contentDiv);

                commentsContainer.appendChild(commentDiv);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

document.addEventListener("DOMContentLoaded", loadComments);