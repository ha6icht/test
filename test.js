const heading = document.getElementsByTagName("H1")[0];
const image = document.getElementsByTagName("IMG")[0];
const button = document.getElementsByTagName("BUTTON")[0];
image.onclick = () => {
    heading.style.color = "darkred";
}
heading.onclick = () => {
    heading.style.color = "red";
}
button.onclick = () => {
    heading.style.color = "chocolate";
}