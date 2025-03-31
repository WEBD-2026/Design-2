const eventsData = {
  "10th April": {
    Technical: {
      STEM: [
        { name: "ChemiTech", Time: "10:00 am", venue: "Chem Dept" },
      ],
      Designing: [
        { name: "Skyline Symphony", Time: "10:00 am", venue: "Lawn Tennis" },
      ],
      Coding: [
        { name: "Hackmol 6.0", Time: "10:00 am", venue: "New Reading Room" },
        { name: "Code Relay", Time: "10:00 am", venue: "SAC" },
        { name: "Speed Quant", Time: "10:00 am", venue: "SAC" },
      ],
      Business: [
        { name: "Analyst Edge Competition", Time: "2:00 pm", venue: "LT 402" },
      ],
    },
    Cultural: {
      Dramatics: [
        { name: "Halla Bol", Time: "11:00 am", venue: "IT Park", },
        { name: "Improv", Time: "03:00 pm", venue: "central lawn", },
      ],
      Music: [
        { name: "The Voice", Time: "11:00 am", venue: "OAT" },
      ],
      Literature: [
        { name: "Charter and change ", Time: "11:00 am", venue: "VCH IT building" },
      ],
      FineArts: [
        { name: "Art Exhibition", Time: "11:00 am", venue: "IT Building" },
        // { name: "One-Stroke Art", Time: "11:00 am", venue: "DRAWING HALL" },
        { name: "Key Chain Customization", Time: "1:30 pm", venue: "DRAWING HALL" },
        { name: "Monochrome pallete", Time: "4:30 pm", venue: "DRAWING HALL" },
      ],
      Movies: [
        { name: "VISION VS REALITY ", Time: "11:00 am", venue: "LT 102" },
      ],
      Photography: [
        { name: "Photography Exhibition (Drishya)", Time: "10:00 am", venue: "IT Building" },
      ],
    },
  },
  "11th April": {
    Technical: {
      STEM: [
        { name: "ChemiTech", Time: "1:00 pm", venue: "LT-204" },
        { name: "Revamping Biotechnology: From Data to Discovery", Time: "2:00 pm", venue: "LT-202" },
      ],
      Designing: [
        { name: "TexPrint", Time: "11:00 am", venue: "Textile Dept. Lab" },
      ],
      Coding: [
        { name: "Hackmol 6.0", Time: "10:00 am", venue: "New Reading Room" },
        { name: "Cryptography Based CTF Event", Time: "10:00 am", venue: "CS Building" },
        { name: "Speed Quant", Time: "10:00 am", venue: "SAC" },
      ],
      Robotics: [
        { name: "Machine WARS", Time: "10:00 am", venue: "Night Canteen" },
        { name: "BlitzGear", Time: "10:00 am", venue: "Kabadi Ground" },
      ],
      Aeronautics: [
        { name: "Drone Obstacle Race", Time: "3:00 pm", venue: "MBH Ground" },
      ],
      Business: [
        { name: "Entrepreneurial Escape Room", Time: "11:00 am", venue: "LT 402" },
      ],
      "3D": [
        { name: "cad modeling ", Time: "11:00 am", venue: "IPE Department" },
      ],
    },
    Cultural: {
      Dramatics: [
        { name: "Eklavya", Time: "11:00 am", venue: "LT 101", },
      ],
      Dance: [
        { name: "Beat The Street", Time: "10:00 am", venue: "Night Canteen", },
        { name: "808 Hustle", Time: "2:00 pm", venue: "CSH", },
      ],
      Music: [
        { name: "Rap Battle", Time: "11:00 am", venue: "OAT" },
      ],
      Literature: [
        { name: "Extempore", Time: "11:00 am", venue: "SB 1" },
      ],
      Quiz: [
        { name: "General Quiz", Time: "2:00 pm", venue: "LT 101" },
      ],
      Rajbhasha: [
        { name: "महफ़िल", Time: "12:00 pm", venue: "Central Lawn" },
      ],
      FineArts: [
        { name: "Art Exhibition", Time: "11:00 am", venue: "IT Building" },
        { name: "Doodle walk", Time: "3:00 pm", venue: "DRAWING HALL" },
        { name: "Cultural Fusion Art", Time: "11:00 am", venue: "DRAWING HALL" },
      ],
      Movies: [
        { name: "MAD-Ads", Time: "11:00 am", venue: "LT 102" },
      ],
      Photography: [
        { name: "Photography Exhibition (Drishya)", Time: "10:00 am", venue: "IT Building" },
        { name: "Snap Treasure", Time: "11:00 am", venue: "IT Building" },
      ],
      "Food & Flavour Club": [
        { name: "Spice Wars", Time: "11:00 am", venue: "SAC-Ground floor" },
      ],
    }
  },

  "12th April": {
    Technical: {
      STEM: [
        { name: "Chemistry Project Exhibition", Time: "10:00 am", venue: "Science Block" },
        { name: "Integration Bee", Time: "11:00 am", venue: "LT-303" },
        { name: "Q-trivia", Time: "11:00 am", venue: "LT-203" },
        { name: "Bio-Expo", Time: "12:00 pm", venue: "BT Department" },
      ],

      Robotics: [
        { name: "Robo War", Time: "2:00 pm", venue: "OAT" },
      ],
      Circuits: [
        { name: "Circuit Saga", Time: "10:00 am", venue: "ECE Building" },
        { name: "Circuit Hunt", Time: "10:00 am", venue: "LT Circle" },
      ],
      Gaming: [
        { name: "Arena X", Time: "10:00 am", venue: "New Reading Room" },
      ],
      Managerial: [
        { name: "Ad Mad Show ", Time: "11:00 am", venue: "Humanities Department" },
      ],
      Literature: [
        { name: "Open Mic", Time: "2:00 pm", venue: "Central Lawn" },
      ],
    },
    Cultural: {
      Dramatics: [
        { name: "Asmita", Time: "2:00 pm", venue: "IT Park", },
      ],
      Dance: [
        { name: "In Sync", Time: "11:00 am", venue: "LT Front", },
        { name: "Bhangra Fiesta", Time: "11:00 am", venue: "CSH", },
      ],
      Literature: [
        { name: "Turn the cap", Time: "11:00 pm", venue: "SB 1" },
      ],
      Quiz: [
        { name: "Pop Culture Quiz", Time: "11:00 am", venue: "LT 101" },
      ],
      Rajbhasha: [
        { name: "Filmy Sangram", Time: "11:00 am", venue: "SB2" },
      ],
      FineArts: [
        { name: "Art Exhibition", Time: "11:00 am", venue: "IT Building" },
        { name: "Music-Inspired Art", Time: "11:00 am", venue: "DRAWING HALL" },
        { name: "Glass painting", Time: "3:00 pm", venue: "DRAWING HALL" },
      ],
      RLC: [
        { name: "Iktara", Time: "2:00 pm", venue: "CSH" },
      ],
      Fashion: [
        { name: "Nirvana", Time: "6:00 pm", venue: "MBH Ground" },
      ],
      "Food & Flavour Club": [
        { name: "Spice Wars", Time: "11:00 am", venue: "Snackers Ground" },
      ],
    }
  },
  "13th April": {
    Technical: {
      Designing: [
        { name: "Techbiz Quest", Time: "11:00 am", venue: "LT 303" },
        { name: "Wall Street - Paper Trading Event", Time: "11:00 am", venue: "LIT Conference Hall" },
      ],

      Robotics: [
        { name: "Blind Robo", Time: "11:00 am", venue: "LT Centre" },
      ],
      Circuits: [
        { name: "Circuit Saga", Time: "10:00 am", venue: "ECE Building" },
      ],
      Aeronautics: [
        { name: "Ad Astra", Time: "2:00 pm", venue: "LT 103" },
      ],
      Gaming: [
        { name: "Arena X", Time: "10:00 am", venue: "New Reading Room" },
      ],
    },
    Cultural: {
      Dramatics: [
        { name: "RangManch", Time: "10:00 am", venue: "CSH", },
      ],

      Music: [
        { name: "Megasonic: The Battle of Bands", Time: "3:00 pm", venue: "OAT" },
      ],

      Rajbhasha: [
        { name: "Sutradhar", Time: "11:00 am", venue: "SB2" },
      ],
      Movies: [
        { name: "SFM", Time: "11:00 am", venue: "online" },
      ],
      FineArts: [
        { name: "Art Exhibition", Time: "11:00 am", venue: "IT Building" },
        { name: "Art from Waste", Time: "11:00 am", venue: "DRAWING HALL" },
        { name: "Clay art", Time: "3:00 pm", venue: "DRAWING HALL" },
      ],
    }
  },
};

export default eventsData;
