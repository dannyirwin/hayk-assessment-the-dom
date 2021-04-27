/*
Changes the contents of the h1 to "HACKED!"
Change the href of all the links to https://thebadguys.com
Adds this image to the beginning of the body: https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png
Deletes the paragraph tags that are direct children of <main>
Adds a paragraph tag to the end of the document that says "Your account has been compromised."
Reset the days counter to 0
*/

function hacked() {
    document.querySelector("h1").textContent = "HACKED!"

    document.querySelectorAll("a").forEach(link => {
        link.href = "https://thebadguys.com";
    });

    const newImage = document.createElement("img");
    newImage.src = "https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png";
    document.querySelector("body").prepend(newImage);

    const main = document.querySelector("main");
    main.querySelectorAll(":scope > p").forEach(element => {
        element.remove();
    });

    const p = document.createElement("p");
    p.innerHTML = "Your account has been compromised.";
    document.querySelector("body").append(p);

    document.querySelector("span").innerHTML = 0;
}

hacked();