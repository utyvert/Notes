# Redux

## Prop Drilling

Redux allows us to avoid prop drilling.

![](Images/diagram1.png)


## State management library

- Simplified access to state across complex applications
- Better debugging - including time travel!
- Simplified testing
- A single source of truth

## Observer Design Pattern

- A software design pattern in which an object, called the **subject**, which references state, *publishes* its presence.
- It maintains a list of its dependents, called **observers** (or listeners), that have *subscribed* to notifications of any updates. When state changes, the subject notifies all subscribed observers, usually by calling one of their methods.
- The observer pattern is used primarily in **event-driven applications**. In front-end development, user actions are one prime example of the events that would drive the functionality of the application.


## Under the hood

![](Images/underthehood.png)


## Flux

**Flux** is an implementation of the **Observer Pattern** that Facebook uses internally.
- Actions (object)
- Action Creator (function)
- Dispatcher (function)
- Stores (object) <- note that this is plural
- Views

## Flux Data Flow

1. An action occurs, which is created and passed by an action creator to the global dispatcher. 

[...]


Redux provides a stripped down version of flux architecture

## Redux Data Flow

![](Images/dataflow.png)


[...]

## The Golden Rules of Redux

- Redux Store (single source of truth) - an object containing application state
- Actions - describe updates to state
- Action Creators - functions we call to dynamically create Actions
- Dispatch - sends action to all reducers
- Reducers - functions that apply updates to state

### Stores

[...]

### Actions

- Simple objects that contain data for our reducers to updates state. The **only way** to update state in the Redux store.
- Your component **dispatches** action objects whenever a state change needs to occur.
- Created via Action Creators
- Must contain a type that indicates the kind of update, thereby allowing the reducers to perform some work or not.

### Reducers

![](Images/reducers.png)

