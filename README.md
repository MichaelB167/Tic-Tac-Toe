# Project Components

## Technologies Used

I used HTML and CSS to style the page's front end.  To add the menu modals I
applied bootsrap styling.  JQuery facilitates user interaction with the
gameboard via click handlers and produces a display of the game's result upon a
win or tie condition being met.  To communicate with the back end I used a
combination of jQuery, Javascript and AJAX.

## Approach Taken

Prior to the project work period starting, I tried to produce a viable front
end so that I would have sufficient time to create a functional game engine and
AJAX requests.  Thankfully I was mostly successful with the former as
translating the game's dynamics into Javascript, however simple they are,
proved to be a bit of a struggle.  After trying several approaches, I was
eventually able to represent the board with an 8 index array, create win
conditions for each orientation, and determined wins based on which players'
turn it was when a win condition was met.

In an effort to maintain modularity in my code I limited index files to
containing requirements rather than code as well as created separate directories
for files such as AJAX requests and event handlers.  To backup and track my
project, I made frequent and descriptive commits to my project repository.

## Unsolved Problems

My project does not yet meet expectations as despite extensive troubleshooting
I've been unable to fix broken AJAX requests, leaving me falling short of the
final three deliverables.  I think my sign-up/in/out's were working at one point
but I'm not yet very adept at testing their functionality so I may have been
getting some form of a false positive.  I also haven't quite fixed the page 
display for mobile devices or styled the page as I had originally intended.

## User Stories

1.  As a user, I want to be able to sign up so I create an account and sign in.
1.  As a user I want the square that I click to populate with X or O so I can
have my move registered.
1.  As a user, if I win or tie I want to see a message to that affect so I know
the game's outcome.
1.  As a user, I should be able to change my password to manage my account.
1.  As a user, I should be able to sign out after I'm done playing.
1.  As a developer, I want to test my code frequently in the interest of
minimizing errors.

## Wireframes

<http://imgur.com/a/YBlKy>
