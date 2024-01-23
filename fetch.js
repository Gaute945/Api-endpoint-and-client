async function fetchData() {
    const data = await fetch("endpoint");
    const json = await data.json();
}