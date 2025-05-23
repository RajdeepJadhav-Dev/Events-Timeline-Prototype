import Events from "../EvenDetailsdata";

export default function SatelliteWorkshop() {
    const satelliteEvent = Events.find(event => event.title === 'Satellite Development and Model Rocketry Workshop');
   

    const renderOverview = (overview) => {
      return (
        <div className="overview pb-9">
          {Object.values(overview).map((point, index) => (
            <p style={{ fontFamily: 'Marcellus' }} key={index} className="text-sm leading-loose text-white px-4 ">{point}<br></br></p>
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
                    <h2 style={{ fontFamily: 'Nulshock', fontSize: "3rem" }} className="text-6xl my-4 mb-5 text-center">{satelliteEvent?.title}</h2>
                   

                    {/* Gallery Section */}
                    <div className="overflow-hidden relative w-full">
  <div className="flex items-center gap-x-4 animate-scroll w-max">
    {/* Directly place the images inside the flex container */}
    {satelliteEvent?.gallery && Object.values(satelliteEvent.gallery).map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Satellite Workshop Image ${index + 1}`}
        className="event-image rounded-lg shadow-lg object-cover my-3 w-72 h-52 m-0"
      />
    ))}
  </div>
</div>

<p className="text-md mb-2 text-center" style={{ fontFamily: 'Marcellus' }}>Date: {satelliteEvent?.date}</p>
<p className="text-md mb-6 text-center" style={{ fontFamily: 'Marcellus' }}>Location: {satelliteEvent?.location}</p>
<p className="text-md text-center leading-none relative bottom-3" style={{ fontFamily: 'Marcellus' }}>Timings: {satelliteEvent?.timings}</p>
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
   style={{ fontFamily: 'Marcellus' }}
    className="text-4xl leading-loose text-white "
  >
    Overview of {satelliteEvent?.title}
  </h2>
  {satelliteEvent?.overview && renderOverview(satelliteEvent.overview)}
</div>

            </section>
        </>
    );
}
