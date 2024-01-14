/**
* @typedef {{
*   handleEvent: (newState: Object, prevState: Object, eventType: String) => void,
*   eventTypes: [String]
* }} Observer
*/

class Observer {

  constructor(state) {
    this.#prevState = JSON.parse(JSON.stringify(state));
  }

  /** @type Observer[] */
  #observers = [];

  /** @type Object */
  #prevState = {};

  /** @param { String } eventType */
  notificationObservers = (eventType) => {
    this.#observers.forEach(observer => {
      if (observer.eventTypes.includes(eventType)) {
        console.log('notificationObservers => displayName, eventType =>', observer.displayName, eventType);
        console.log('notificationObservers => prevState, newState =>', this.#prevState, this.state);

        observer.handleEvent(this.state, this.#prevState, eventType)
      }
    })

    this.#prevState = JSON.parse(JSON.stringify(this.state));
  }

  /**
  * @param { Observer } observer
  * @returns this
  * */
  addObserver = (observer) =>  {
    this.#observers.push(observer)
    return this;
  }

  /**
  * @param { Observer } observer
  * @returns this
  * */
  removeObserver = (observer) => {
    this.#observers = this.#observers.filter(obs => obs !== observer)
    return this;
  }
}

export default Observer;