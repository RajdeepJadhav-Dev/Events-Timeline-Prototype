import Events from "../EvenDetailsdata";

export default function TrioConclave() {
    const trioconclaveEvent = Events.find(event => event.title === 'TRIO-CONCLAVE 2024');
   

    const renderOverview = (overview) => {
      return (
        <div className="overview pb-9">
          {Object.values(overview).map((point, index) => (
            <p style={{ fontFamily: 'Exo, sans-serif' }} key={index} className="text-sm leading-loose text-white px-4 ">{point}<br></br></p>
          ))}
        </div>
      );
    };
    return (
        <>
            <section
                style={{ backgroundImage: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)" }}
                className="wrapper h-screen m-0 p-0 relative overflow-hidden"
            >
                {/* Background Stars */}
                <div id="stars" className="absolute inset-0"></div>
                <div id="stars2" className="absolute inset-0"></div>
                <div id="stars3" className="absolute inset-0"></div>

                {/* Event Details on top of Background */}
                <div className="relative z-10 text-white px-4 py-8 md:px-16">
                    <h2 style={{ fontFamily: "'Orbitron', sans-serif"}} className="text-6xl my-4 mb-5 text-center">{trioconclaveEvent.title}</h2>
                   

                    {/* Gallery Section */}
                    <div className="overflow-hidden relative w-full">
  <div className="flex items-center gap-x-4 animate-scroll w-max">
    {/* Directly place the images inside the flex container */}
    <img
      src={trioconclaveEvent.gallery.image1}
      alt="Trioconclave Image 1"
      className="event-image rounded-lg shadow-lg object-cover my-3 w-72 h-52 m-0"
    />
    <img
      src={trioconclaveEvent.gallery.image2}
      alt="Trioconclave Image 2"
      className="event-image rounded-lg shadow-lg object-cover w-72 h-52 m-0"
    />
    <img
      src={trioconclaveEvent.gallery.image3}
      alt="Trioconclave Image 3"
      className="event-image rounded-lg shadow-lg my-3 object-cover w-72 h-52 m-0"
    />
    <img
      src={trioconclaveEvent.gallery.image4}
      alt="Trioconclave Image 4"
      className="event-image rounded-lg shadow-lg object-cover w-72 h-52 m-0"
    />
    <img
      src={trioconclaveEvent.gallery.image5}
      alt="Trioconclave Image 5"
      className="event-image rounded-lg my-3 shadow-lg object-cover w-72 h-52 m-0"
    />
    <img
      src={trioconclaveEvent.gallery.image6}
      alt="Trioconclave Image 6"
      className="event-image rounded-lg shadow-lg object-cover w-72 h-52 m-0"
    />
    <img
      src={trioconclaveEvent.gallery.image7}
      alt="Trioconclave Image 7"
      className="event-image rounded-lg shadow-lg my-3 object-cover w-72 h-52 m-0"
    />
    <img
      src={trioconclaveEvent.gallery.image8}
      alt="Trioconclave Image 8"
      className="event-image rounded-lg shadow-lg object-cover w-72 h-52 m-0"
    />

    {/* Repeat images for endless scroll effect */}
    <img
      src={trioconclaveEvent.gallery.image1}
      alt="Trioconclave Image 1"
      className="event-image rounded-lg shadow-lg object-cover my-3 w-72 h-52 m-0"
    />
    <img
      src={trioconclaveEvent.gallery.image2}
      alt="Trioconclave Image 2"
      className="event-image rounded-lg shadow-lg object-cover w-72 h-52 m-0"
    />
    <img
      src={trioconclaveEvent.gallery.image3}
      alt="Trioconclave Image 3"
      className="event-image rounded-lg shadow-lg my-3 object-cover w-52 h-52 m-0"
    />
    <img
      src={trioconclaveEvent.gallery.image4}
      alt="Trioconclave Image 4"
      className="event-image rounded-lg shadow-lg object-cover w-52 h-52 m-0"
    />
    <img
      src={trioconclaveEvent.gallery.image5}
      alt="Trioconclave Image 5"
      className="event-image rounded-lg my-3 shadow-lg object-cover w-52 h-52 m-0"
    />
    <img
      src={trioconclaveEvent.gallery.image6}
      alt="Trioconclave Image 6"
      className="event-image rounded-lg shadow-lg object-cover w-52 h-52 m-0"
    />
    <img
      src={trioconclaveEvent.gallery.image7}
      alt="Trioconclave Image 7"
      className="event-image rounded-lg shadow-lg my-3 object-cover w-52 h-52 m-0"
    />
    <img
      src={trioconclaveEvent.gallery.image8}
      alt="Trioconclave Image 8"
      className="event-image rounded-lg shadow-lg object-cover w-52 h-52 m-0"
    />
  </div>
</div>



<p className="text-md mb-2 text-center" style={{ fontFamily: 'Exo, sans-serif' }}>Date: {trioconclaveEvent.date}</p>
<p className="text-md mb-6 text-center" style={{ fontFamily: 'Exo, sans-serif' }}>Location: {trioconclaveEvent.location}</p>
<p className="text-md text-center leading-none relative bottom-3" style={{ fontFamily: 'Exo, sans-serif' }}>Timings: {trioconclaveEvent.timings}</p>
                </div>
                <div
  className="event-overview text-center relative bottom-7 mx-40 "
  style={{
    background: "transparent",
    color: "#ffffff",
    padding: "12px",
    backdropFilter: "blur(8px) saturate(120%)", // Reduced blur for better readability
    WebkitBackdropFilter: "blur(8px) saturate(120%)", // For Safari support
    backgroundColor: "rgba(20, 20, 30, 0.6)", // Darker & more transparent for a subtle effect
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.1)" // Subtle border effect
  }}
>
  <h2
    style={{ fontFamily: 'Exo, sans-serif' }}
    className="text-4xl leading-loose text-white "
  >
    Overview of {trioconclaveEvent.title}
  </h2>
  {renderOverview(trioconclaveEvent.overview)}
</div>

            </section>
        </>
    );
}
