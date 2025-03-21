import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form, Navbar, Container, Nav, FormControl } from "react-bootstrap";
import { data } from "react-router-dom";
import HotelHavenLanding from "../mainpage/mainpage";

function Dashboard() {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState(6000);
  // const [roomType, setRoomType] = useState("");
  const [location, setLocation] = useState('');
  
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    user_id: "",
    room_id: "",
    check_in: "",
    check_out: "",
  });
  
  // Fetch hotel data from backend API
  useEffect(() => {
    fetch("http://localhost:5004/hotels")
    .then((response) => response.json())
    .then((data) => setHotels(data))
    .catch((error) => console.error("Error fetching hotels:", error));
    
  }, []);
  console.log(hotels);
  
  // Filter hotels based on search, price range, and room type
  const filteredHotels = hotels.filter((hotel) => {
    console.log(hotel);
    console.log(search);
    
    
    const matchesSearch =
    hotel.name.toLowerCase().includes(search.toLowerCase()) ||
    hotel.location.toLowerCase().includes(search.toLowerCase());
    
    // Check for price range
    const matchesPrice = hotel.price <= priceRange;
    
    // Check for room type
    // const matchesRoomType =
    // roomType === "" || (hotel.roomTypes || "").toLowerCase().includes(roomType.toLowerCase());
    
    
    
    // Check for location
    const matchesLocation =
    location === "" || hotel.location.toLowerCase() === location.toLowerCase();
    
    // Return true if all conditions are met
    return matchesSearch && matchesPrice&&matchesLocation;
    
    // return (
      
    //   if (hotel.name.toLowerCase().includes(search.toLowerCase())||
    //     hotel.location.toLowerCase().includes(search.toLowerCase()))&&
    //   hotel.price <= priceRange &&
    //   (roomType === "" || (hotel.roomTypes || "").includes(roomType))
    
    
    //   );
    
    //  {
      //   console.log(hotel.name) 
      // }
      
      // })
      
      // return (
        //   (hotel.name.toLowerCase().includes(search.toLowerCase()) ||
        //     hotel.location.toLowerCase().includes(search.toLowerCase())) &&
        //   hotel.price <= priceRange &&
        //   (roomType === "" || (hotel.roomTypes || "").includes(roomType))
        // );
      });
      console.log(filteredHotels,"from filter");
      
      
      // Handle booking confirmation
      const handleBookingConfirmation = () => {
        fetch("http://localhost:5003/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingDetails),
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.message) {
            alert(data.message);
            setShowModal(false);
          } else {
          alert(data.error);
        }
      })
      .catch((error) => console.error("Error booking hotel:", error));
    };
    
    return (
      <>
      
        <HotelHavenLanding />
    <div className="container">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Hotel Haven</Navbar.Brand>
          <Nav className="ms-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search Hotels..."
                className="me-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          </Nav>
        </Container>
      </Navbar>

      <div className="mt-4">
        <Form.Label>Price Range: ${priceRange}</Form.Label>
        <Form.Range
          min={2500}
          max={6000}
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        {/* <Form.Select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
          <option value="">All Room Types</option>
          <option value="King">King</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
        </Form.Select> */}


<Form.Select value={location} onChange={(e) => setLocation(e.target.value)}>
    <option value="">All Locations</option>
    <option value="Vijayawada">Vijayawada</option>
    <option value="Guntur">Guntur</option>
    <option value="Vizag">Vizag</option>
    <option value="Hyderabad">Hyderabad</option>
    <option value="Rajahmundry">Rajahmundry</option>
</Form.Select>

      </div>

      {/* <div className="row mt-4">
        {filteredHotels.map((hotel) => (
          <div key={hotel.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={hotel.image_url} alt={hotel.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{hotel.name}</h5>
                <p>{hotel.location}</p>
                <p>Price: ${hotel.price}</p>
                <p>Rating: {hotel.rating}</p>
                <Button variant="primary" onClick={() => setSelectedHotel(hotel)}>
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div> */}


<div className="row mt-4">
  {filteredHotels.map((hotel) => (
    <div key={hotel.id} className="col-md-4 mb-4">
      <div className="card h-100 text-center">
        <img 
          src={hotel.image_url } height={"400px"}
          alt={hotel.name} 
          className="card-img-top hotel-image" 
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{hotel.name}</h5>
            <p>{hotel.location}</p>
            <p>Price: ${hotel.price}</p>
            <p>Rating: {hotel.rating}</p>
          </div>
          <Button 
            variant="primary" 
            className="mt-auto book-button" 
            onClick={() => setSelectedHotel(hotel)}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  ))}
</div>


      {/* Booking Modal */}
      <Modal show={!!selectedHotel} onHide={() => setSelectedHotel(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Book {selectedHotel?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>User ID</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setBookingDetails({ ...bookingDetails, user_id: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Room ID</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setBookingDetails({ ...bookingDetails, room_id: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Check-in Date</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setBookingDetails({ ...bookingDetails, check_in: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Check-out Date</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setBookingDetails({ ...bookingDetails, check_out: e.target.value })}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedHotel(null)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleBookingConfirmation}>
            Confirm Booking
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
 </>
  );


}

export default Dashboard;
