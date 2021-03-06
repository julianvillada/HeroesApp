import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ( { history } ) => {

    const { heroeId } = useParams();
    const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ]);
    
    
    if( !hero ) {
        return <Redirect to='/' />
    }

    const{
            superhero,
            publisher,
            alter_ego,
            first_appearance,
            characters,
    }=hero;

    const handleReturn = () =>{

        if( history.length <=2 ){
            history.push('/');
        }else{
            history.goBack();
        }
        
    }

    return (
        <div className='row mt-5'>
            <div className='col-4 animate__animated animate__flip' >
                <img 
                src={ `../assets/heroes/heroes/${ heroeId }.jpg`}
                alt={ superhero }
                className='img-thumbnail'
                />
            </div>

            <div className='col-8'>
                <h3>{ superhero }</h3>
                <ul className='list-goup list-group-flush'>
                    <li className='list-group-item'><b>Alterego:</b>{ alter_ego }</li>
                    <li className='list-group-item'><b>publisher:</b>{ publisher }</li>
                    <li className='list-group-item'><b>First apperance:</b>{ first_appearance }</li>
                </ul>

                <h5>characters</h5>
                <p> { characters } </p>
                <button 
                className='btn btn-outline-info '
                onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
            
        </div>
    )
}
