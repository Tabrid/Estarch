import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const paymentLogos = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXi87nPggz4Oyk_rbUxrjDFfGW2Em2sBapmw&s", alt: "Visa" },
    { src: "https://i.ibb.co/RjGvvDD/download.png", alt: "MasterCard" },
    { src: "https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2021/02/untitled-1612637581649.jpg", alt: "American Express" },
    { src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg", alt: "Other1" },
    { src: "https://www.logo.wine/a/logo/BKash/BKash-Icon2-Logo.wine.svg", alt: "Other1" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg6Jz-BNw96FY0Vz2TPwkN18sJA9adSxyz6Q&s", alt: "Other1" },
    { src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg", alt: "Other1" },
    { src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg", alt: "Other1" },
    { src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg", alt: "Other1" },
    { src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg", alt: "Other1" },
    { src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg", alt: "Other1" },
    { src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg", alt: "Other1" },
    { src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg", alt: "Other1" },
    { src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg", alt: "Other1" },
    { src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg", alt: "Other1" },
    { src: "https://theincap.com/wp-content/uploads/2022/03/brac-bank.jpg", alt: "Other1" },
    // add more logos here
  ];
  return (
    <div className="bg-black">
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/002/207/834/small_2x/black-and-gold-hexagonal-background-free-vector.jpg')`,
          backgroundBlendMode: 'overlay',
          opacity: 0.6, // Adjust opacity as needed
        }}
      >
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>+880 9606999695</p>
          <p> Worktime: SAT - FRI, 10AM - 11PM</p>
          <div className="flex flex-row gap-3">
            <FontAwesomeIcon
              size="2x"
              className="text-black mb-2"
              icon={faWhatsapp}
            />
            <FontAwesomeIcon
              size="2x"
              className="text-black mb-2"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              size="2x"
              className="text-black mb-2"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              size="2x"
              className="text-black mb-2"
              icon={faFacebookMessenger}
            />
          </div>
        </aside>
        <nav>
          <h6 className="footer-title uppercase">Information</h6>
        </nav>
        <nav>
          <h6 className="footer-title uppercase">Contact Info</h6>
          <p>
            Bashundhara City Shopping Complex,
            <br />
            Level-3, Block-D, Shop 45, 46,
            <br />
            Panthapath, Dhaka.
          </p>
          <p>manfarebd@gmail.com</p>
          <p>
            09606999695 | 01948-898198
            <br />
            01730-642262 | 01845-813237
          </p>
        </nav>
        <nav>
          <div className="relative w-72 h-48 bg-black text-white rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/288x422" // Replace with your image URL
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex items-center p-4">
              <img
                src="https://via.placeholder.com/48" // Replace with your logo URL
                alt="Logo"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">Manfare</h2>
                <p className="text-sm">597,707 followers</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 z-10">
              <button className="bg-white text-black font-semibold px-4 py-2 rounded-full">
                Follow Page
              </button>
            </div>
          </div>
        </nav>
      </footer>

      <footer className="footer bg-black  text-base-content border-base-300 border-t px-10 py-4">
        <div className=" py-4">
          <div className="container mx-auto flex items-center space-x-4">
            <div className=" border-r-2">
              {" "}
              <span className="text-white font-semibold mr-2 ">Pay With</span>
            </div>

            {paymentLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-12 bg-white p-1 rounded"
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Footer;
