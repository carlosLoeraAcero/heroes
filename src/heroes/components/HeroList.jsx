import { useMemo } from "react"
import { getHeroesByPublicher } from "../helpers/getHeroesByPublicher"
import { HeroeCard } from "./HeroeCard"

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublicher( publisher ), [publisher])

    // const { id, superhero, publisher, alter_ego, first_appearance, characters } = heroes

    // console.log(heroes)

    return(
        <>
            <div className="row wows-cols-1 row-cols-md-3 g-3">
            {heroes.map((heroe) =>
                    <HeroeCard key={heroe.id} heroe={ heroe }/>
            )}
            </div>
        </>
    )
}