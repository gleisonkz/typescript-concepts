type Fish = { swim: () => void };
type Bird = { fly: () => void };

declare function getSmallPet(): Fish | Bird;

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const pet = getSmallPet();

if (isFish(pet)) {
  pet.swim(); // Tipo inferido como Fish
} else {
  pet.fly(); // Tipo inferido como Bird
}
