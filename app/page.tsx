import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Spline
        scene="https://prod.spline.design/EPorBgDQX3aUaK0s/scene.splinecode"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="relative z-10 flex flex-col p-6 pt-24">
        <header className="w-full flex justify-between items-center p-6 absolute top-0 left-0 bg-transparent">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 ml-6">
            DanielApp
          </h1>
          <nav>
            <ul className="flex space-x-6 text-white mr-6">
              <li><a href="#home">Home</a></li>
              <li><a href="#service">Service</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
        </header>

        <div className="flex-grow flex items-start mt-24">
          <div className="text-left max-w-lg ml-6">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
            Transform Your Ideas with Next JS
            </h2>
            <p className="mt-6 font-semibold text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            </p>
            <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mt-8">
            Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
