async function fetchData(){

    let rawData = await fetch('/JSON/cities-timezone.json');
    let data = await rawData.json();

    let selector = document.querySelector('.selectorQ');

    for(let city of data.cities){

        selector.innerHTML += 
        `
        <option value=${city.name}>${city.name}</option>
        `

    }
}