import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"
import "./App.css"
import duck from "./duck.svg"
import QR from "./QR.png"

const Header = () => {
  const MySwal = withReactContent(Swal)
  return (
    <main className="App-header bg-gray-800">
      <nav className="border-t-4 pt-5 mb-15 border-blue-500">
        <div className="container flex items-center justify-between px-6 py-3 mx-auto">
          <a
            className="w-full text-2xl text-center font-bold text-white lg:text-3xl hover:text-gray-300"
            href="#"
          >
            <h1 className="text-5xl">Duck Alarm</h1>
          </a>
        </div>
      </nav>
      <div className="container px-6 mx-auto">
        <div className="flex-col items-center lg:flex">
          <div className="w-full h-full flex justify-center">
            <img src={duck} className="h-60 lg:h-96 w-60 lg:w-96" alt="logo" />
          </div>
          <div className="py-10">
            <div className="lg:max-w-lg text-center">
              <h1 className="text-2xl font-semibold text-white lg:text-3xl">
                Suscribete a nuestro{" "}
                <span className="text-blue-500">Newsletter</span>
              </h1>

              <p className="mt-4 text-gray-400">
                y descubre todas las novedades de{" "}
                <span className="font-medium text-blue-500">Duck Alarm</span>
              </p>

              <div className="flex flex-row mt-8 justify-center">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />

                <button
                  onClick={() => {
                    MySwal.fire({
                      title: <strong>🦆 Quack! 🦆</strong>,
                      html: <i>Este botón no funciona :-)</i>,
                      icon: "success",
                    })
                  }}
                  className="w-auto ml-4 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                >
                  Suscribete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-ful flex justify-center">
        <img src={QR} className="h-60" alt="logo" />
      </div>
      <div className="w-full h-full flex-col mt-5">
        <h3 className="mb-3 text-center">Work in progress...</h3>
        <div
          className="overflow-hidden flex justify-evenly h-21 border-y border-gray-400 bg-animation-grey duck duck2"
          style={{ backgroundColor: "#43525b" }}
        >
          <img
            className="h-20"
            src={require("./duckAnimation.gif")}
            alt="loading..."
          />
          <img
            className="h-20"
            src={require("./duckAnimation.gif")}
            alt="loading..."
          />
          <img
            className="h-20"
            src={require("./duckAnimation.gif")}
            alt="loading..."
          />
          <img
            className="h-20"
            src={require("./duckAnimation.gif")}
            alt="loading..."
          />
          <img
            className="h-20"
            src={require("./duckAnimation.gif")}
            alt="loading..."
          />
          <img
            className="h-20"
            src={require("./duckAnimation.gif")}
            alt="loading..."
          />
          <img
            className="h-20"
            src={require("./duckAnimation.gif")}
            alt="loading..."
          />
          <img
            className="h-20"
            src={require("./duckAnimation.gif")}
            alt="loading..."
          />
          <img
            className="h-20"
            src={require("./duckAnimation.gif")}
            alt="loading..."
          />
        </div>
      </div>
    </main>
  )
}

export default Header
