## Real time chat

A simple chat applications using raw websocket in Node.js that supports the following features -

-   Allow an admin to create a new chat session/room. Admin should be allowed to set the following properties on the room -
-   Name
-   start_time
-   is_open
-   cool_down_time
-   Allow a users to join the room and send messages
-   Allow users to upvote each other's messages.
-   If chat messages reach more than 3 upvotes, move them over to a separate section.
-   If chat messages reach more than 10 upvotes, alert the admin to answer.
