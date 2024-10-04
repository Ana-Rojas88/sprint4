import './style.scss';

const Count = ({cantidadFood, setCantidadFood}) => {
   
  return (
          <div className="counter">
              <button
                disabled={cantidadFood <= 1}
                onClick={() => {
                    if (cantidadFood > 0) {
                        setCantidadFood(cantidadFood - 1);
                    }
                }}
              >
                -
              </button>
              <h4>{cantidadFood}</h4>
              <button
                onClick={() => {
                    setCantidadFood(cantidadFood + 1);
                }}
              >
                +
              </button>
            </div>
  )
}

export default Count