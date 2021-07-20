let data = [
    {
        name: "Fatemeh",
        age: "23",
    },
    {
        name: "Maryam",
        age: "20",
    },
    {
        name: "Alireza",
        age: "23",
    },
    {
        name: "Benyamin",
        age: "25",
    },
    {
        name: "Bahar",
        age: "21",
    },
    {
        name: "Pourya",
        age: "18",
    },
];

const info = document.querySelector("#info");

let details = data.map(function (item) {
    return (
        "<div>" +
        item.name +
        " " +
        "is" +
        " " +
        item.age +
        " " +
        "yers old" +
        "</div>"
    );
});

info.innerHTML = details.join("\n");
