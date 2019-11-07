class ImperativeCounter extends HTMLElement {
  // holds the Web Component’s shadow DOM
  private readonly shadow: ShadowRoot;
  //  stores the current value of our counter.
  private currentCount: number = 0;
  
  constructor() {
    super(); 
    // creates the shadow DOM and stores it in shadow.
    this.shadow = this.attachShadow({ mode: 'open'});
    // finishes up by calling the update method 
    this.update();
  }

  // we define an HTML template for our element that includes the value of currentCount
  update() {
    const template = `
      <style>
        .counter {
          font-size: 25px;
        }
      </style>
      <div class="counter">
        <b>Count:</b> ${this.currentCount}
      </div>
    `;
    //  assign our template string to our shadow DOM’s innerHTML
    this.shadow.innerHTML = template;
  }

  increment(){
    this.currentCount++;
    // update to ensure that we show the new value of currentCount in our component’s HTML.
    this.update();
  }

  decrement() {
    this.currentCount--;
    this.update();
  }
}

// register our  new component with the browser.

window.customElements.define('i-counter', ImperativeCounter);