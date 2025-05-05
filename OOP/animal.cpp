#include <iostream>
using namespace std;

class Animal {
public:
    Animal() { cout << "Animal constructed\n"; }
    void hasBelly() { cout << "Animal has a belly\n"; }
};

class Mammal : virtual public Animal {
public:
    Mammal() { cout << "Mammal constructed\n"; }
};

class Bird : virtual public Animal {
public:
    Bird() { cout << "Bird constructed\n"; }
};

class Platypus : public Mammal, public Bird {
public:
    Platypus() { cout << "Platypus constructed\n"; }
};

int main() {
    Platypus p;
    p.hasBelly();
    return 0;
}
