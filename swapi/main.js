let textDocument = "https://docs.google.com/document/d/1ZfRumNfwAbRCPzHw3B1ctxRg0q8RULycXVIgARi-OrU/edit#heading=h.plyl9yt40ql"

let residents = document.querySelector('#residentsButton')


const buttonClicked = () => {
    axios.get('http://swapi.dev/api/planets/?search=Alderaan').then(response => {
        const residents = response.residents
        for(let i=0; i < residents.length; i++) {
            axios.get(residents).then(response => {
                document.head.appendChild(h2(residents[i]))
            })
        }
      })
}

residents.addEventListener('click', buttonClicked)