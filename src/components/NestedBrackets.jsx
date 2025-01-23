import React from 'react';

const NestedBrackets = () => {
  return (
    <div>
      <h1>Nested Brackets</h1>
      <p>
        This component demonstrates how (()) nested brackets [[]] look with {
          'Rainbow Brackets 2'
        }.
      </p>
      <div>
        <ul>
            <li> Level 1 : ( )</li>
           <li> Level 2 :  [[  ]] </li>
           <li> Level 3 :  {{  }} </li>
            <li> Level 4 :   ({ [ <( )> ] }) </li>
              <li> Level 5 :   ( { [ <{ [ ( ) ] }> ] } ) </li>
           <li>  Level 6:    ( ({ [<{[(<{()}>])}>]}))  </li>
        </ul>
        <p>
          { (
            ( ( (
            'More nested brackets: '
            )
          ) )
          ) }
            Here's a more complex one:
             [ ( { < { [ { (   ) } ] } > } )]
              
        </p>
       <div>
              (()=> {
                return (
                    [
                        1,2,3,4,5
                    ].map(i => (
                        <div>
                            {({a:1}).a}
                            <p key={i}>
                                {
                                  ( () => {
                                    return (<> { [1,2,3,4,5].reduce((acc,cur)=>acc+cur)} </>)
                                  })()
                                }
                            </p>
                        </div>
                    ))
                )
            })()
        </div>
        
         
      </div>
    </div>
  );
};

export default NestedBrackets;