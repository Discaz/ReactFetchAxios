import React, { Component } from 'react'
import './Consomation.css'
import DisplayCharacter from './DisplayCharacter';

class Consomation extends Component {
  state = {
    characters: [],
  }

  getCharacter = () => {
    const url = 'https://melroune.github.io/starwars-api/api/all.json'
    fetch(url)
    .then(res => res.json())
    .then(res => console.log(res) || this.setState({ characters: res }))
  }


  componentDidMount() {
    this.getCharacter()
  }
  render() {
    const { characters } = this.state
    return (
      <div>
        {characters.map(character => 
          <DisplayCharacter image={character.image} name={character.name} id={character.id}/>
        )}
      </div>
    )
}
}

export default Consomation
