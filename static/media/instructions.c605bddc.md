
# Feature tours

Were building a Todo list application and we are launching some new features to our customers. We want to introduce users to the new feature so they know it exists. Show a popover near the `Delete TODO` button that explains to new users that this is a new feature (heading and body text).

* Please don't use a popover library.
* Feel free to use any other libraries or styling methods you are comfortable with!
* Assume the feature tours come from the server, but feel free to mock the request out.
* User should be able to dismiss the tour.
* User should only see the tour once.

Now imagine the user hasn't logged in in a while, and there are two new features. Let's say one is the `Delete TODO` button, and the other is the `Change TODO Type` functionality. We should only show one feature tour at a time.