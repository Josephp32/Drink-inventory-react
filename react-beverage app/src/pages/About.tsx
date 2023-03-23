import Background from '../assets/images/drink2.jpg'

function About() {
    return (
      <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-black bg-opacity-75 text-white rounded'>The most refreshing beverages all in one place!</h3>
        </div>
    </div>
    )
}
  
export default About

  