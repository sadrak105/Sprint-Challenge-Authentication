<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    Middleware- is code use to extend the functionality of (req, res) and apply next(), to extend the functionality.
    Sessions- store a space when logged in to save password and username and functions temporarily.
    Bycrypt- is an add on that hashes passwords to make them safe from attacks.
    JWT- a bit like sessions they store the users information and authorities in a token used to let the system what functionality to apply.

2.  What does bcrypt do in order to prevent attacks?
    It hashes passwords so that people are not able to see them, also uses the hashes it creates to make it hard for hackers to break the passwords.

3.  What are the three parts of the JSON Web Token?
    Header- contains the type of token and a hashing algorithim.
    Payload- Contains the information and options.
    Signature- takes the header, payload, a secret, and an algorithim to verify them and sign for the package to display it.

