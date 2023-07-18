import { useState } from 'react'
import './App.css';
import AppHeader from './components/AppHeader'
import TattooItem from './components/TattooItem'
import tattoos from './data/tattoos'
import TattooPost from './components/TattooPost';
import AppSearch from './components/AppSearch';


function App() {
    const [selectedTattoo, setSelectedTattoo] = useState()
    const [searchText, setSearchText] = useState("")

    function onTattooOpenClick (theTattoo){
        setSelectedTattoo(theTattoo)
    }

    function onTattooCloseClict() {
        setSelectedTattoo(null)
    }

    const tattooElements = tattoos.filter((tattoo) => {
        return tattoo.title.includes(searchText)
    }).map((tattoo, index) => {
        return <TattooItem key={ index } tattoo={ tattoo } onTattooClick={ onTattooOpenClick } />
    })

    let tattooPost = null
    if (!!selectedTattoo) {
        tattooPost = <TattooPost tattoo = { selectedTattoo } onBgClick = { onTattooCloseClict } />
    }

    return (
        <div className='App'>
            <AppHeader />
            <section className='app-section'>
                <div className='app-container'>
                    <AppSearch value = {searchText} onValueChange = {setSearchText} />
                    <div className="app-grid">
                        {tattooElements}
                    </div>
                </div>
            </section>
            { tattooPost }
        </div>
    );
}

export default App
