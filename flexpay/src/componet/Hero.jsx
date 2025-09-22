import '../componet/Hero.css'

const Hero = () => {
    return(
        <section className="h-screen bg-white px-6 md:px-16 flex items-center">
      <div className="grid grid-cols-12 gap-6 w-full">
        {/* Left Content */}
        <div className="col-span-12 md:col-span-6 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            A <span className="text-green-500">P2P</span> Lending platform<br />
            making lending &<br />
            borrowing easy
          </h1>
          
          <button className="bg-green-100 text-sm px-4 py-2 rounded-md w-max shadow-sm flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5V4H2v16h5m10 0v-6m0 6l-2-2m2 2l2-2" />
            </svg>
            <span className="text-green-500 font-semibold">Helping Hand</span>
            <span className="text-gray-700">in every step</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <img
            src="/path-to-your-image.png"
            alt="Lending Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
    )
}
 export default Hero
