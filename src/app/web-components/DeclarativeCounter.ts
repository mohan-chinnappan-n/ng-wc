class DeclarativeCounter extends HTMLElement {

    // ref: https://www.grapecity.com/blogs/using-web-components-in-angular

    // shadow holds the Web Component’s shadow DOM,

    private readonly shadow: ShadowRoot;
    // stores the current value of our counter.
    private currentCount: number = 0;
    constructor() {
      super();
      // creates the shadow DOM and stores it in shadow 
      this.shadow = this.attachShadow({ mode: 'open'});
      // We want to wait and see if a value was passed into the component via the count attribute

      // This value for count won’t be available at the time the component’s constructor is called. 
      // Instead, we use a Web Component lifecycle method: connectedCallback.

    }

    // observedAttributes static property
    // provides the browser a list of attribute names for
    //   which the component would like to receive a notification when they change.
    // end-users of the component could add as many attributes to it as they want to,
    //  and it would be a waste of resources for the browser to 
    //  send the component change notifications it isn’t going to use.

    static get observedAttributes() {
        return ['count'];
    }

    // gets called after a component has been inserted in the DOM
    connectedCallback() {
        //  reads the value of the component’s count attribute 
        //   ses it to set the value of currentCount
        this.currentCount = parseInt(this.getAttribute('count')) || 0;

        // calls update to render the component.
        this.update();
    }

    // called by the browser whenever one of the attributes listed in attributeChangedCallback changes
    //  in our case count is the only attribute we’ll receive notifications for.
    attributeChangedCallback(attrName, oldVal, newVal) {
        // when the method is called, we update currentCount with the new value and
        //  then call update to re-render the component.
        this.currentCount = newVal;
        this.update();
    }
    update() {
      // HTML template for our element that includes the value of currentCount
      // 
      const template = `
        <style>
          .counter {
            font-size: 25px;
          }
        </style>
        <div class="counter">
          <b>Count:</b> ${this.currentCount}
      `;
      // assign our template string to our shadow DOM’s innerHTML property.
      this.shadow.innerHTML = template;
    }
  }
  window.customElements.define('d-counter', DeclarativeCounter);