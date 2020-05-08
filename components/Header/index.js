// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(attrs) {
    const {date, head, temp} = attrs

    const headerDiv = document.createElement('div')
    const span = document.createElement('span')
    const h1 = document.createElement('h1')
    const spanTemp = document.createElement('span')

    headerDiv.appendChild(span)
    headerDiv.appendChild(h1)
    headerDiv.appendChild(spanTemp)

    headerDiv.classList.add('header')
    span.classList.add('date')
    spanTemp.classList.add('temp')

    span.textContent = `${date}`
    h1.textContent = `${head}`
    spanTemp.textContent = `${temp}`

    return headerDiv
}

const heading = Header({date: 'MARCH 28, 2019', head: 'Lambda Times', temp: '98'})

const entryPoint = document.querySelector(".header-container")

entryPoint.appendChild(heading)