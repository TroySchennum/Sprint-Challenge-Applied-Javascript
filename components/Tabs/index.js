// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function gitTabsMaker (attrs) {
    const {topic} = attrs
    console.log(attrs)
    const tab1 = document.createElement('div')
    const tab2 = document.createElement('div')
    const tab3 = document.createElement('div')
    const tab4 = document.createElement('div')
    const tab5 = document.createElement('div')
    
    

    tab1.textContent = `${topic} -`
    tab2.textContent = `${topic} -`
    tab3.textContent = `${topic} -`
    tab4.textContent = `${topic} -`
    tab5.textContent = `${topic} -`
    
    
    return tab1, tab2, tab3, tab4, tab5
  }
  
  const entryPoints = document.querySelector(".topics")

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
      .then(data => {
        const tab1 = gitTabsMaker({topic: data.data.topics[0]})
        entryPoints.appendChild(tab1)

        const tab2 = gitTabsMaker({topic: data.data.topics[1]})
        entryPoints.appendChild(tab2)

        const tab3 = gitTabsMaker({topic: data.data.topics[2]})
        entryPoints.appendChild(tab3)

        const tab4 = gitTabsMaker({topic: data.data.topics[3]})
        entryPoints.appendChild(tab4)

        const tab5 = gitTabsMaker({topic: data.data.topics[4]})
        entryPoints.appendChild(tab5)

       
      })
      .catch(error => {
        debugger // handle error
      })