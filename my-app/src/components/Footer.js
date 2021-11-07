import React from 'react'

class Footer extends React.Component{
  constructor(){
    super()
    this.state={
      topText:"",
      bottomText:"",
      randomImg:"http://i.imgflip.com/1bij.jpg",
      allMemeImgs:[]
    }
  }

  componentDidMount(){
    fetch("http://api.imgflip.com/get_names")
      .then(response => response.json())
      .then(response=>{
        const {memes}=response.data
      })
  }

  render(){
    return(
      <h1>MEME GENERATOR</h1>
    )
  }
}

export default Footer;