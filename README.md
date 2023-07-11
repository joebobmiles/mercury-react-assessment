# Goals

## Primary Goal

Build an app that fetches jokes from the Joke API, displays the joke, then
reveals the punchline when the user clicks a button. A second button fetches
a new joke and resets the state.

_We need to meet the functionality/acceptance criteria outlined in the PDF._

## Secondary Goal(s)

Show what they are looking for:
  * How we approach fetching the data.
  * How we approach rendering the results and the different states.
  * Accessible HTML.
  * Re-useable code.
  * How we approach using different libraries and utilities as assistive tools.
  * Designing responsive layouts.
    * Smallest size is smartphone portrait layout at 320px wide.
  * Inclusion of animations
  * Attention to detail

# Tasks

- [X] Write a function that fetches a joke from the API.
- [ ] Create Layout component
  - [ ] Add a green, rounded button that says "Get A New Random Joke"
  - [ ] Add a link to the API docs
  - [ ] Add a border under the header
  - [ ] Renders a Joke if there is NOT an API failure
  - [ ] Renders an error message if there IS an API failure
    * This screams for an error boundary, but it might not be necessary.
- [ ] Create a Joke component
  - [ ] Must have a blue, rounded button that says "Show Punchline"
  - [ ] Always shows setup
  - [ ] Only shows punchline after pressing "Show Punchline"
  - [ ] After "Show Punchline" is clicked, the button text turns to "Hide Punchline"
  - [ ] Toggle between showing and hiding the punchline