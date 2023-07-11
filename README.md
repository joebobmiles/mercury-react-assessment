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
- [/] Create a Joke component
  - [ ] Must have a blue, rounded button that says "Show Punchline"
  - [X] Always shows setup
  - [ ] Only shows punchline after pressing "Show Punchline"
  - [ ] After "Show Punchline" is clicked, the button text turns to "Hide Punchline"
  - [ ] Toggle between showing and hiding the punchline

# Thinking Out Loud

I'm ~1 hour in and realizing I need to slow down and plan this out better.

Taking stock of what I have:
* A function that pulls a random joke.
  * Easy, simple.
  * Does not throw a descriptive error on failure.
* Rudiments of the interface
  * The Layout has a random joke button and a link.
  * The Joke component displays both setup and punchline, but no button.
  * A loader shows when the Joke is not ready to display.
* Unsolved problems:
  1. How to handle errors when fetching the joke.
  2. Where in the code to make the request for the joke.
  3. Styling Material UI to look like the example.

## Solving the Problems
### Problem 1

We have two ways of dealing with the error message:
1. Raise an error and create an error boundary to catch it, or
2. Don't raise an error and gracefully return an invalid result.

It makes more sense to raise an error, since then we can keep the return type
simple. A try-catch is probably more intuitive than logic dedicated to sussing
out what type got returned.

So that means we need an error boundary around whatever makes the request.
Ideally that would be the Joke component, since that's also where the error
message displays in the mock.

### Problem 2

That takes us to where we need to make the request. Since we've established that
the fetch should throw on a failure and we need an error boundary around the
joke to match the mock, that means the fetch should happen in the Joke
component. This also means we can use a suspense wrapper to handle the loading
dialog.

***Adendum***: I forgot that the "Get A New Random Joke" button needs to
instigate the fetch, which is problematic. 

There are still options, however:
* We could treat the Layout as the error boundary component, and it always
  shows the header if a child throws an error.
  * This means that the Layout component is responsible for fetching the new
    joke and maintaining the application's state.

### Problem 3

I don't have time to learn Material UI, so we'll just see how far we get with
implementing the skeleton.

## The Skeleton

```
<App /> =>
  <>
    /* The Header */
    <Container>
      <Button>Get A New Random Joke</Button> /* Triggers the fetch. */
      <Link>View API Docs</Link> /* Goes to API docs link */
    <Container/>
    /* The Joke */
    <Container>
      <Suspense fallback={<p>Loading your joke</p>}>
        <ErrorBoundary> /* Custom component that catches the error and displays the message */
          <Joke />
        </ErrorBoundary>
      </Suspense>
    <Container/>
  </>

<Joke /> =>
  <>
    <p>{setup}</p>
    <Button>{Show ? Hide} Punchline</Button>
    <p>{punchline}</p>
  <>
```