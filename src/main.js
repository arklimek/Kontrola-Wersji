import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1 class = "text-2xl font-bold text-primary" >Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button" class="bg-blue-500 p-4" ></button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
