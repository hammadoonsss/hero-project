// EDIT_HERO
export const editHero=(id, update) => ({
    type: 'EDIT_HERO',
        id,
        update
})
// ADD_HERO
export const addHero = ({id,name}) => ({
  type: 'ADD_HERO',
    hero: {
        id,
        name
    }
})
// REMOVE_HERO
export const removeHero = (id = {}) => ({
    type: 'REMOVE_HERO',
    id
});
