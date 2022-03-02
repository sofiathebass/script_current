import React, { Component } from 'react';
import logo from './logo512.png';
import './App.css';
import Button from "./components/Button.tsx";

class App extends React.Component {

  state = {
    width: "200px",
    height: "100px",
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 15,
    fontWeight: 400,
    fontSize: "12px",
    display: "inline"
  }
  onClick = () => {
    this.setState({ 
      width: "200px",
      height: "100px",
      marginRight: 25,
      marginLeft: 25,
      marginBottom: 15,
      fontWeight: 400,
      fontSize: "12px",
      display: "inline"
    });
  }

  render () {return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Are you as lazy as me? Use these short scripts to expedite tedious calculations within your lab work!
        </p> 
        <div className = "App-orderingButtons">
        <Button
        onClick={this.onClick}
        width = {this.state.width}
        height = {this.state.height}
        marginLeft = {this.state.marginLeft}
        marginRight =  {this.state.marginRight}
        marginBottom =  {this.state.marginBottom}
        fontWeight = {this.state.fontWeight}
        fontSize = {this.state.fontSize}
        display = {this.state.display}
        color= "#fe019a"
        children = "Dividing Experimental Cage Mice by Weight"
        code = "https://tinyurl.com/4y9d54du"
        />

        <Button
        onClick={this.onClick}
        width = {this.state.width}
        height = {this.state.height}
        marginLeft = {this.state.marginLeft}
        marginRight =  {this.state.marginRight}
        marginBottom =  {this.state.marginBottom}
        fontWeight = {this.state.fontWeight}
        fontSize = {this.state.fontSize}
        display = {this.state.display}
        color= "#de32fb"
        children = "Script 2"
        code = "https://example.com/faq.html"
        />

        <Button
        onClick={this.onClick}
        width = {this.state.width}
        height = {this.state.height}
        marginLeft = {this.state.marginLeft}
        marginRight =  {this.state.marginRight}
        marginBottom =  {this.state.marginBottom}
        fontWeight = {this.state.fontWeight}
        fontSize = {this.state.fontSize}
        display = {this.state.display}
        color= "#fe019a"
        children = "Script 3"
        code = "https://example.com/faq.html"
        />

        <Button
        onClick={this.onClick}
        width = {this.state.width}
        height = {this.state.height}
        marginLeft = {this.state.marginLeft}
        marginRight =  {this.state.marginRight}
        marginBottom =  {this.state.marginBottom}
        fontWeight = {this.state.fontWeight}
        fontSize = {this.state.fontSize}
        display = {this.state.display}
        color= "#de32fb"
        children = "Script 4"
        code = "https://example.com/faq.html"
        />

        <Button
        onClick={this.onClick}
        width = {this.state.width}
        height = {this.state.height}
        marginLeft = {this.state.marginLeft}
        marginRight =  {this.state.marginRight}
        marginBottom =  {this.state.marginBottom}
        fontWeight = {this.state.fontWeight}
        fontSize = {this.state.fontSize}
        display = {this.state.display}
        color= "#fe019a"
        children = "Script 5"
        code = "https://example.com/faq.html"
        />

        <Button
        onClick={this.onClick}
        width = {this.state.width}
        height = {this.state.height}
        marginLeft = {this.state.marginLeft}
        marginRight =  {this.state.marginRight}
        marginBottom =  {this.state.marginBottom}
        fontWeight = {this.state.fontWeight}
        fontSize = {this.state.fontSize}
        display = {this.state.display}
        color= "#de32fb"
        children = "Script 6"
        code = "https://example.com/faq.html"
        />

        <Button
        onClick={this.onClick}
        width = {this.state.width}
        height = {this.state.height}
        marginLeft = {this.state.marginLeft}
        marginRight =  {this.state.marginRight}
        marginBottom =  {this.state.marginBottom}
        fontWeight = {this.state.fontWeight}
        fontSize = {this.state.fontSize}
        display = {this.state.display}
        color= "#fe019a"
        children = "Script 7"
        code = "https://example.com/faq.html"
        />

        <Button
        onClick={this.onClick}
        width = {this.state.width}
        height = {this.state.height}
        marginLeft = {this.state.marginLeft}
        marginRight =  {this.state.marginRight}
        marginBottom =  {this.state.marginBottom}
        fontWeight = {this.state.fontWeight}
        fontSize = {this.state.fontSize}
        display = {this.state.display}
        color= "#de32fb"
        children = "Script 8"
        code = "https://example.com/faq.html"
        />
        
        </div>
      </header>
    </div>
  );}
}



export default App;
