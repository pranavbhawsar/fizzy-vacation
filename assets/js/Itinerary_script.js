// Itinerary Modal Popup Start

const packages = {
  "Chardham Yatra Tour": `
      <p><strong>Day 1: Delhi - Haridwar (205 Kms, 6 hrs)</strong></p>
      <p>Morning breakfast, meet our escort, and drive to Haridwar via Meerut & Roorkee. Check-in at the hotel. By evening, visit the famous Har Ki Pauri for Aarti Darshan. Overnight stay at the hotel.</p>

      <p><strong>Day 2: Haridwar - Barkot (215 Kms, 5-6 hrs)</strong></p>
      <p>Drive to Barkot via Dehradun & Mussoorie. Stop for lunch at Mussoorie. On arrival, check into the luxury Swiss tents. Overnight stay.</p>

      <p><strong>Day 3: Barkot - Yamunotri - Barkot (42 Kms Drive / 6 Kms Trek)</strong></p>
      <p>Early breakfast and leave for Janki Chatti (42 km drive). Trek to Yamunotri (6 km one way). Visit the temple for a Darshan of Goddess Yamuna. After Pooja, return to Barkot. Overnight at the camp.</p>

      <p><strong>Day 4: Barkot - Uttarkashi (100 Kms, 5-6 hrs)</strong></p>
      <p>Drive to Uttarkashi. On arrival, check into the hotel. Overnight stay.</p>

      <p><strong>Day 5: Uttarkashi - Gangotri - Uttarkashi (100 Kms, 4-5 hrs)</strong></p>
      <p>Drive to Gangotri via the scenic Harsil Valley. Take a holy dip in the sacred Ganges (Bhagirathi). Perform Pooja and return to Uttarkashi. Overnight stay.</p>

      <p><strong>Day 6: Uttarkashi - Guptkashi (225 Kms, 8-9 hrs)</strong></p>
      <p>Drive towards Guptkashi, passing by Tehri Dam. Travel along the river Mandakini and reach Guptkashi by evening. Check into the hotel. Overnight stay.</p>

      <p><strong>Day 7: Guptkashi - Kedarnath (32 Kms Drive, 14 Kms Trek)</strong></p>
      <p>Drive to Gaurikund and trek to Kedarnath. En route, stop for lunch at Rambara. On arrival, check into hotel/tourist bungalow. Visit Shri Kedarnath Temple and Adi Shankaracharya Samadhi. Overnight stay.</p>

      <p><strong>Day 8: Kedarnath - Pipalkoti (14 Kms Trek, 145 Kms Drive)</strong></p>
      <p>After breakfast, trek down to Gaurikund and drive towards Pipalkoti. Check into the hotel upon arrival. Overnight stay.</p>

      <p><strong>Day 9: Pipalkoti - Badrinath (72 Kms)</strong></p>
      <p>Drive to Shri Badrinath Ji. Visit Narsingh Temple, Adi Shankaracharya Samadhi, and take a holy dip at Tapt Kund. Visit Mana Village, Bheem Pul, Byas Cave & Ganesha Cave. Overnight at hotel.</p>

      <p><strong>Day 10: Badrinath - Rudraprayag (160 Kms)</strong></p>
      <p>Optionally witness the holy bath at Badrinath at 04:00 AM. After breakfast, drive to Rudraprayag. Overnight stay.</p>

      <p><strong>Day 11: Rudraprayag - Rishikesh (135 Kms, 7 hrs)</strong></p>
      <p>Drive to Rishikesh via Devprayag. Visit Laxman Jhoola. Overnight stay.</p>

      <p><strong>Day 12: Rishikesh - Delhi (234 Kms)</strong></p>
      <p>After breakfast, drive back to Delhi. Arrival in the afternoon.</p>

      <p><strong>Package Includes:</strong></p>
      <ul>
          <li>All transfers by AC Tempo Traveler (A/C will not run in hilly areas).</li>
          <li>Standard category accommodation as per itinerary.</li>
          <li>Breakfast & dinner.</li>
          <li>Fuel charges, toll taxes, parking fees, driver expenses.</li>
      </ul>

      <p><strong>Package Does Not Include:</strong></p>
      <ul>
          <li>Train/airfare to and from Delhi.</li>
          <li>Horse/Mule, Doli, Helicopter, Coolie charges.</li>
          <li>Extra expenses due to natural calamities, landslides, etc.</li>
          <li>Personal expenses like tips, calls, laundry, etc.</li>
          <li>Travel insurance.</li>
      </ul>
  `,

  "Bhimtal-Nainital-Kausani Tour": `
      <p><strong>Day 01: Delhi - Bhimtal (300 Kms / 7 hrs)</strong></p>
      <p>On arrival at Delhi, proceed towards Bhimtal (300 kilometers / 7 hrs drive). On arrival at Bhimtal, check in to the hotel and after a short break, enjoy the lake-side view. Drive to Naukuchiatal (3 km). Overnight stay at Bhimtal.</p>

      <p><strong>Day 02: Bhimtal - Camp Site</strong></p>
      <p>After breakfast, proceed to the camp site. Enjoy lunch at the camp site. After a short break, enjoy an activity (included in the price). Later, have high tea, go for a nature walk, then have dinner along with a bonfire.</p>

      <p><strong>Day 03: Camp Site to Kausani</strong></p>
      <p>After breakfast, check out from the camp and transfer to Kausani (3 hrs). Pass by beautiful valleys, rivers, and panoramic Himalayan views. Arrive and check in at the hotel. Evening free to explore Kausani. Enjoy the sunset at Kausani. Overnight stay in Kausani.</p>

      <p><strong>Day 04: Kausani To Nainital (90 km, 3.5 hrs)</strong></p>
      <p>After breakfast, proceed to Nainital. Check in to the hotel and take a short break. In the evening, enjoy shopping at Mall Road. Overnight stay at the hotel. Evening free for roaming at your own pace.</p>

      <p><strong>Day 05: Nainital To Delhi</strong></p>
      <p>After breakfast, check out from the hotel and enjoy the ropeway (not included in the package) and Snow View Point. Return to parking and depart for Delhi with beautiful memories.</p>

      <p><strong>Note:</strong></p>
      <p>Ranikhet, Almora, and Binsar can be added, and the number of days will increase accordingly.</p>
  `,

  "Andaman Tour": `
      <p><strong>Day 1: Arrive at Port Blair</strong></p>
      <p>On arrival at Port Blair in the morning by flight, you will be received and transferred to your hotel. In the afternoon, start a tour covering the Cellular Jail, Anthropological Museum, Naval Marine Museum, and Cottage Industries Emporium. On Mondays and public holidays, these will be closed, and you will visit Corbyn’s Cove Beach instead. In the evening, attend the enthralling Sound and Light Show at Cellular Jail, depicting the heroic saga of the Indian freedom struggle. Overnight stay in Port Blair.</p>

      <p><strong>Day 2: Neil Island</strong></p>
      <p>In the morning, depart by ferry to Neil Island. In the afternoon, visit Bharatpur Beach, Laxmanpur Beach, and Sitapur Beach. Overnight stay at Neil Island.</p>

      <p><strong>Day 3: Havelock Islands</strong></p>
      <p>In the morning, depart by ferry to Havelock Island. In the afternoon, visit Beach No. 7 (Radhanagar), rated as Asia’s most beautiful beach by Times Magazine. Overnight stay at Havelock Island.</p>

      <p><strong>Day 4: Elephant Beach</strong></p>
      <p>In the morning, visit Elephant Beach to see the underwater corals and marine life. Overnight stay at Havelock Island.</p>

      <p><strong>Day 5: Day trip to Baratang</strong></p>
      <p>Early morning departure by car from Port Blair to Baratang (110 km by road). The journey includes crossing creeks and dense forests. Visit Mud Volcano and Limestone Cave. This trip starts at 03:30 AM and finishes by 05:00 PM. Overnight stay at Port Blair.</p>

      <p><strong>Day 6: Port Blair Attractions</strong></p>
      <p>In the morning, visit Cellular Jail, Anthropological Museum, Naval Marine Museum, and Cottage Industries Emporium. In the afternoon, visit Corbyn’s Cove Beach. In the evening, attend the Sound and Light Show at Cellular Jail. Overnight stay at Port Blair.</p>

      <p><strong>Day 7: Port Blair Airport Transfer</strong></p>
      <p>After breakfast, transfer to the airport for your return journey.</p>

      <p><strong>Price Includes:</strong></p>
      <ul>
          <li>Breakfast for 6 occasions during the stay</li>
          <li>6 Nights Hotel Accommodation as per chosen class</li>
          <li>Meet and Greet services</li>
          <li>Exclusive Air-conditioned Car for sightseeing and transfers</li>
          <li>Service of a professional guide at Cellular Jail (sharing basis)</li>
      </ul>

      <p><strong>Price Excludes:</strong></p>
      <ul>
          <li>Domestic and International air tickets</li>
          <li>Vehicle on disposal basis</li>
          <li>Any Private Expenses</li>
          <li>Room Service Fees</li>
          <li>Peak season surcharges</li>
          <li>Compulsory Special Eve Dinner Charges</li>
          <li>Anything not included in Inclusions</li>
      </ul>
  `,

  "Goa Honeymoon Tour": `
      <p><strong>Day 01: Arrival At Goa</strong></p>
      <p>After arriving at the Dabolim Airport in Goa, get in touch with our representative who will help you with your transfer to the hotel. Overnight stay at the hotel in Goa.</p>

      <p><strong>Day 02 - 03: Day at Goa</strong></p>
      <p>The next two days are allocated to exploring the beaches of Goa and all that they have to offer. Enjoy sunbathing, take a leisurely stroll on the beach, gorge on scrumptious seafood, try various water sports, and enjoy electric beach parties. The beaches you will visit include Anjuna Beach, Baga Beach, Dona Paula Seashore, Miramar Beachfront, Chapora Seaside, Vagator Seaside, and Benaulim Seaside.</p>

      <p><strong>Day 04: Goa</strong></p>
      <p>After a hearty breakfast in the morning, get out of your hotel and get a glimpse of Goa’s lifestyle. Enjoy a game of volleyball on the beach along with a cruise ride on the Mandovi River. Apart from this, there are a variety of water sports which you can enjoy including speed-boating, scuba diving, windsurfing, and parasailing. This is followed by an overnight stay at the hotel.</p>

      <p><strong>Day 06: Goa Onwards</strong></p>
      <p>After enjoying breakfast in the morning, drive to the Dabolim Airport to board the flight back to Mumbai.</p>
  `,

  "Kathmandu - Pokhara Tour": `
      <p><strong>Day 1</strong></p>
      <p>Pickup from Gorakhpur Railway Station. Departure to Gorakhnath Temple (after freshening up, Darshan and Puja at Gorakhnath Temple). Then depart to Lumbini (birthplace of Lord Buddha) and continue to Pokhara. Overnight stay at a hotel in Pokhara.</p>
      
      <p><strong>Day 2</strong></p>
      <p>After breakfast, Pokhara sightseeing including Barahi Temple, Devis Fall, Gupteshwar Cave, and Bindvasini Temple. In the evening, enjoy boating on the lake. Overnight stay at a hotel in Pokhara.</p>
      
      <p><strong>Day 3</strong></p>
      <p>After breakfast, depart from Pokhara to Kathmandu via Manakamana Temple (one of Asia’s largest cable cars). Continue to Kathmandu for an overnight stay at a hotel in Kathmandu.</p>
      
      <p><strong>Day 4</strong></p>
      <p>Local sightseeing in Kathmandu including Pashupatinath Darshan, Buddha Nilkanth, Swambhu Nath, etc. Overnight stay at a hotel in Kathmandu.</p>
      
      <p><strong>Day 5</strong></p>
      <p>Travel from Kathmandu to Chitwan. In the evening, enjoy the Tharu Cultural Program. Overnight stay in Chitwan.</p>
      
      <p><strong>Day 6</strong></p>
      <p>In the morning, enjoy a jungle safari. After breakfast, depart for Gorakhpur and drop off at Gorakhpur Railway Station by 6 PM.</p>
      
      <p><strong>Included Services</strong></p>
      <ul>
          <li>Swift Dzire AC car with all tolls, taxes, permits, parking, and driver charges included.</li>
          <li>Hotel accommodations:</li>
          <ul>
              <li>1 Double bedroom</li>
              <li>2 nights in Pokhara</li>
              <li>2 nights in Kathmandu</li>
              <li>1 night in Chitwan</li>
          </ul>
      </ul>
  `,

  "Udaipur - Mount Abu - Udaipur Tour": `
    <p><strong>Day 1: Arrival in Udaipur</strong></p>
    <p>On your arrival in Udaipur, meet our representative and get transferred to a hotel. Check-in at the hotel and you are free to spend the rest of the time at leisure. You stay overnight in the room. Udaipur is also known as “City of Lakes”. The city has clean lakes dotted with isles, which are decorated with ancient forts and palaces.</p>
    
    <p><strong>Day 2: Udaipur</strong></p>
    <p>Start your day with Lake Pichola. This is the most popular lake of all, having green hills and amazing forts in the backdrop. Later, you head to Fateh Sagar Lake, which has a famous park, known as Nehru Park. Nehru Park is an amusement park, with zoo and restaurant. The best fort of all, City Palace Complex is to be visited next. City Palace Complex reflects Indo-Aryan style of architecture; the complex has intricate carvings. In the evening, relax in Gulabh Bagh; spread over 100 acres of area with a variety in roses and other beautiful flowers.</p>
    
    <p><strong>Day 3: Udaipur - Mount Abu</strong></p>
    <p>In the morning, drive to Mount Abu. Upon reaching the destination, you check in at the hotel. You are now free to explore Mount Abu, the only hill station and summer retreat of Rajasthan. You can enjoy alluring view of the sunset at Sunset Point and Guru Shikhar. In the evening, return to your room and stay overnight.</p>
    
    <p><strong>Day 4: Mount Abu</strong></p>
    <p>The fourth day is dedicated to sightseeing tour of Mount Abu. Today, you visit Dilwara Temple, a white marbled Jain temple dedicated to various Tithankaras. Later, you enjoy a boat ride in Nakki Lake; this man-made lake is surrounded with local markets and restaurants. By late evening, you come back to the room and stay overnight.</p>
    
    <p><strong>Day 5: Mount Abu - Udaipur</strong></p>
    <p>Ride back to Udaipur Airport/ Railway station to continue your onward journey.</p>
  `,
};

$(".open-modal").click(function () {
  var title = $(this).data("title");
  var message = packages[title] || "<p>Itinerary will be updated soon.</p>";

  $("#modal-title").text(title);
  $("#modal-message").html(message);
  $("#packagesModal").fadeIn();
});

$(".close").click(function () {
  $("#packagesModal").fadeOut();
});

$("body").bind("click", function (e) {
  if ($(e.target).hasClass("modal")) {
    $("#packagesModal").fadeOut();
  }
});
// Itinerary Modal Popup End
