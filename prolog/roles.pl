% Allow dynamic modification of facts
:- dynamic role/2.
:- dynamic person/1.

% Sample data
person(alice).
person(bob).
person(carol).
person(dave).

role(alice, manager).
role(bob, employee).
role(carol, secretary).
role(dave, employee).

% Modify relationships
assign_role(Person, Role) :- assert(role(Person, Role)).
remove_role(Person, Role) :- retract(role(Person, Role)).

% Query rules

% Check if two people share the same role
same_role(Person1, Person2) :-
    role(Person1, Role),
    role(Person2, Role),
    Person1 \= Person2.

% List all people with a specific role
people_with_role(Role, Person) :-
    role(Person, Role).

% Check if a person holds a particular role
has_role(Person, Role) :-
    role(Person, Role).
