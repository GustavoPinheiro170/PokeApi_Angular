export interface PokeInfo {
     sprites: {
             other: {
                ["official-artwork"] : {
                   front_default: string
               }
            } 
      }
    abilities: {
         ability: {
          name: string
          url: string
        }
    }
    effect_entries: {
        effect: string
    }
    next: string
    previous: string
  }
