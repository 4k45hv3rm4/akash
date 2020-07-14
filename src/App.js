import React from 'react';
import './App.css';
import Header from './components/header'
import Content from './components/content'
import Project from './components/projects'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {  faFile } from '@fortawesome/free-solid-svg-icons'
import Contact from './components/contact';
import {Button } from 'react-bootstrap/Button';



var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
}

function App() {
  return (

    <div className="App">
      <header className="header">
        <img src="https://instagram.fbho1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/106030138_2568905516704579_3147270883394418410_n.jpg?_nc_ht=instagram.fbho1-1.fna.fbcdn.net&_nc_ohc=Lg4jYkR6iAcAX-CdR3p&oh=d598583af9bb01aef1fd5d9317b5e91a&oe=5F23AF10" className="App-logo" alt="logo" />
        <p className="mainText">
          I am
          <span
            class="txt-rotate"
            data-period="2000"
            data-rotate='[ " Akash Verma.", " Bibliophile.", " Web Developer.", " Mobile Developer.", "" ]'>

          </span>
        </p>

      </header>
      <Header className="header"/>
      <hr />
      <Content />
      <div id="projects"><Project />
      </div>
      <Contact/>
    </div>
  );
}

export default App;
