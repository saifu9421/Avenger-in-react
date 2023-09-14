/* eslint-disable react/prop-types */

import './Cart.css';

const Cart = ({selectedActors, remaining,totalCost}) => {
//   console.log(props.selectedActors);

     console.log(selectedActors);
    return (
        <div>
            <h3> total actors:{selectedActors.length} </h3>
            <hr />
            <h5>
            remaining:{remaining}
            </h5>
            <hr />
            <h5>
                totalCost:{totalCost}
            </h5>
            <hr />
            {
                selectedActors.map(actor =>(
                    // eslint-disable-next-line react/jsx-key
                    <li key={actor.id}>{actor.name}</li>
                ) )
            }

        </div>
    );
};

export default Cart;