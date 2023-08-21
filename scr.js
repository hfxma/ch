const func2 = () => {
    document.querySelectorAll('body > div').forEach((e) => {
        e.style.display = "none";
    })
    document.querySelectorAll('body > nav > button').forEach((e) => {
        e.style.backgroundColor = "#aaaaaa";
        e.style.color = "black";
    })
}
const func = (a, e) => {
    func2()
    const m = document.getElementById(a);
    m.style.display = "grid"
    const b = document.getElementById(e);
    b.style.backgroundColor = "#0073ff";
    b.style.color = "white";
}