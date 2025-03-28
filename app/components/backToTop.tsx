import rocket12 from "../assets/images/rocket12.png"; 

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <footer className="bg-gray-600 text-white py-4 flex justify-center items-center flex-col">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="bg-no-repeat bg-center bg-cover w-16 h-16 rounded-full border-none cursor-pointer transition-all duration-300 ease-in-out"
        style={{
          backgroundImage: `url('${rocket12}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Footer Content */}
      <div className="text-center mb-4">
        <p className="text:md md:text-lg">Beam Me Up, Scotty!</p>        
      </div>
    </footer>
  );
}
