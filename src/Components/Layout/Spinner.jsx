import spinnerLoading from './Assets/Rhombus.gif';

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img
        width={100}
        className='text-center mx-auto'
        src={spinnerLoading} 
        alt='Loading'
      />
    </div>
  )
}

export default Spinner
