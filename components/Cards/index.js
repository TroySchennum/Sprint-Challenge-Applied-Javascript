// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function gitCardMaker (attrs) {
    const {headline, image, author} = attrs
    console.log(attrs)
    const card = document.createElement('div')
    const divH = document.createElement('div')
    const divA = document.createElement('div')
    const divI = document.createElement('div')
    const img = document.createElement('img')
    const spann = document.createElement('span')
    
    card.appendChild(divH)
    card.appendChild(divA)
    divA.appendChild(divI)
    divI.appendChild(img)
    divA.appendChild(spann)

    card.classList.add('card')
    divH.classList.add('headline')
    divA.classList.add('author')
    divI.classList.add('img-container')

    divH.textContent = `${headline}`
    img.src = `${image}`
    spann.textContent = `${author}`
    
    
    
    return card
  }
  
  const entryPointer = document.querySelector(".cards-container")

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
      .then(data => {
        const card = gitCardMaker({headline: data.data.articles.javascript[0].headline, image: data.data.articles.javascript[0].authorPhoto, author: data.data.articles.javascript[0].authorName})
        const card1 = gitCardMaker({headline: data.data.articles.javascript[1].headline, image: data.data.articles.javascript[1].authorPhoto, author: data.data.articles.javascript[1].authorName})
        const card2 = gitCardMaker({headline: data.data.articles.javascript[2].headline, image: data.data.articles.javascript[2].authorPhoto, author: data.data.articles.javascript[2].authorName})
        const card3 = gitCardMaker({headline: data.data.articles.javascript[3].headline, image: data.data.articles.javascript[3].authorPhoto, author: data.data.articles.javascript[3].authorName})
        const card4 = gitCardMaker({headline: data.data.articles.bootstrap[0].headline, image: data.data.articles.bootstrap[0].authorPhoto, author: data.data.articles.bootstrap[0].authorName})
        const card5 = gitCardMaker({headline: data.data.articles.bootstrap[1].headline, image: data.data.articles.bootstrap[1].authorPhoto, author: data.data.articles.bootstrap[1].authorName})
        const card6 = gitCardMaker({headline: data.data.articles.bootstrap[2].headline, image: data.data.articles.bootstrap[2].authorPhoto, author: data.data.articles.bootstrap[2].authorName})
        const card7 = gitCardMaker({headline: data.data.articles.technology[0].headline, image: data.data.articles.technology[0].authorPhoto, author: data.data.articles.technology[0].authorName})
        const card8 = gitCardMaker({headline: data.data.articles.technology[1].headline, image: data.data.articles.technology[1].authorPhoto, author: data.data.articles.technology[1].authorName})
        const card9 = gitCardMaker({headline: data.data.articles.technology[2].headline, image: data.data.articles.technology[2].authorPhoto, author: data.data.articles.technology[2].authorName})
        const card10 = gitCardMaker({headline: data.data.articles.jquery[0].headline, image: data.data.articles.jquery[0].authorPhoto, author: data.data.articles.jquery[0].authorName})
        const card11 = gitCardMaker({headline: data.data.articles.jquery[1].headline, image: data.data.articles.jquery[1].authorPhoto, author: data.data.articles.jquery[1].authorName})
        const card12 = gitCardMaker({headline: data.data.articles.jquery[2].headline, image: data.data.articles.jquery[2].authorPhoto, author: data.data.articles.jquery[2].authorName})
        const card13 = gitCardMaker({headline: data.data.articles.node[0].headline, image: data.data.articles.node[0].authorPhoto, author: data.data.articles.node[0].authorName})
        const card14 = gitCardMaker({headline: data.data.articles.node[1].headline, image: data.data.articles.node[1].authorPhoto, author: data.data.articles.node[1].authorName})
       




        entryPointer.appendChild(card)
        entryPointer.appendChild(card1)
        entryPointer.appendChild(card2)
        entryPointer.appendChild(card3)
        entryPointer.appendChild(card4)
        entryPointer.appendChild(card5)
        entryPointer.appendChild(card6)
        entryPointer.appendChild(card7)
        entryPointer.appendChild(card8)
        entryPointer.appendChild(card9)
        entryPointer.appendChild(card10)
        entryPointer.appendChild(card11)
        entryPointer.appendChild(card12)
        entryPointer.appendChild(card13)
        entryPointer.appendChild(card14)
        
       





        
        console.log(data)
       
      })
      .catch(error => {
        debugger // handle error
      })

      card.style.color