import React from 'react';
import "../pages/About.css";

const About = () => {
  const aboutAdventure = {
    introduction: {
      title: "What is Adventure?",
      description: "Adventure is a broad concept that encompasses exciting and often risky experiences or activities, usually involving exploration, discovery, or challenges. It can take many forms depending on personal interests, goals, and the environment."
    },
    typesOfAdventure: {
      outdoor: {
        title: "Outdoor Adventures",
        description: "Exploring the great outdoors through various physical and nature-driven activities.",
        examples: [
          "Hiking and Trekking: Exploring nature by walking through trails, mountains, or forests.",
          "Camping: Setting up a temporary shelter in natural surroundings and connecting with nature.",
          "Rock Climbing: Scaling rocks or cliffs, testing both physical strength and mental focus.",
          "Water Sports: Activities like kayaking, rafting, scuba diving, or surfing."
        ]
      },
      travel: {
        title: "Travel Adventures",
        description: "Traveling to new destinations to explore new cultures, environments, and experiences.",
        examples: [
          "Backpacking: Traveling with minimal gear and a focus on discovery and learning.",
          "Road Trips: Traveling by car to explore new regions and destinations.",
          "Wilderness Exploration: Seeking remote or wild locations to test survival skills or disconnect from modern life."
        ]
      },
      extreme: {
        title: "Extreme Adventures",
        description: "Adventuring into high-risk, high-thrill activities.",
        examples: [
          "Skydiving: Jumping out of an airplane for an adrenaline rush.",
          "Bungee Jumping: Leaping from a great height with a bungee cord tied to your body.",
          "Base Jumping: Jumping from fixed objects with a parachute."
        ]
      },
      cultural: {
        title: "Cultural Adventures",
        description: "Immersing in new cultures through travel, exploration, and learning.",
        examples: [
          "Immersive Travel: Living among local communities to experience their cultures and lifestyles.",
          "Historical Exploration: Visiting ancient ruins and landmarks to understand history."
        ]
      },
      personalGrowth: {
        title: "Adventure in Personal Growth",
        description: "Taking on challenges that promote self-improvement, personal development, and new skills.",
        examples: [
          "Learning New Skills: Trying a new language or taking up a challenging new hobby.",
          "Entrepreneurial Ventures: Starting a new business or project."
        ]
      },
      digital: {
        title: "Digital and Technological Adventures",
        description: "Exploring new digital realms and technology-driven experiences.",
        examples: [
          "Virtual Reality Exploration: Soaring through virtual worlds in VR technology.",
          "Gaming Adventures: Participating in immersive adventure games that offer expansive worlds.",
          "Digital Nomad Life: Traveling while working remotely using technology."
        ]
      },
      natureAndWildlife: {
        title: "Adventure in Nature and Wildlife",
        description: "Experiencing nature’s beauty and wildlife through various adventurous activities.",
        examples: [
          "Wildlife Safaris: Exploring wildlife in their natural habitats.",
          "Bird Watching: Observing and identifying bird species in nature.",
          "Eco-Tours: Guided tours focusing on environmental education and conservation."
        ]
      },
      airAdventures: {
        title: "Adventures in the Air",
        description: "Taking part in activities that involve soaring above the earth.",
        examples: [
          "Paragliding: Soaring through the sky in a lightweight glider.",
          "Hot Air Ballooning: Floating above landscapes in a hot air balloon.",
          "Hang Gliding: A non-motorized aircraft flight offering a controlled descent."
        ]
      },
      urban: {
        title: "Urban Adventures",
        description: "Exploring cities, both known and hidden, in exciting and unconventional ways.",
        examples: [
          "Urban Exploration: Exploring abandoned buildings and forgotten spaces.",
          "Street Art Adventures: Discovering murals and graffiti in cities.",
          "Night Adventures: Exploring places after dark for a different experience."
        ]
      },
      intellectual: {
        title: "Intellectual or Philosophical Adventures",
        description: "Embarking on adventures of the mind, exploring deep knowledge or philosophical exploration.",
        examples: [
          "Philosophical Journeys: Exploring different worldviews and ways of thinking.",
          "Quest for Knowledge: Seeking lost knowledge or exploring complex topics.",
          "Artistic Adventure: Experimenting with new forms of art or expression."
        ]
      },
      social: {
        title: "Adventure in Social and Human Connection",
        description: "Adventures that focus on connecting with others, often through service or cultural exchange.",
        examples: [
          "Volunteering Adventures: Traveling to help communities and make a difference.",
          "Humanitarian Expeditions: Helping those in need while facing challenging environments.",
          "Cross-Cultural Exchange: Living and learning with different cultures."
        ]
      },
      psychological: {
        title: "Psychological Benefits of Adventure",
        description: "How adventure can improve mental health, build resilience, and create memorable experiences.",
        examples: [
          "Building Resilience: Facing and overcoming challenges builds mental toughness.",
          "Coping with Stress: Escaping routine and embracing new activities helps reduce stress.",
          "Adrenaline Rush: Engaging in high-thrill activities releases endorphins and boosts mood."
        ]
      },
      adventureLifestyle: {
        title: "Adventure as a Lifestyle",
        description: "Adventure as an ongoing part of life, where exploration and discovery become second nature.",
        examples: [
          "Minimalism and Adventure: Living simply and seeking spontaneous experiences.",
          "Adventure in Groups: Strengthening relationships through shared adventurous experiences.",
          "Adventure Travel Agencies: Customized trips designed for unique and challenging adventures."
        ]
      },
      culinary: {
        title: "Adventure in Food and Drink",
        description: "Exploring new cuisines and culinary techniques as part of an adventure.",
        examples: [
          "Culinary Adventures: Traveling for food and trying exotic dishes.",
          "Wine Tasting Tours: Exploring vineyards and learning about wine.",
          "Cooking Challenges: Trying new recipes or ingredients at home."
        ]
      }
    },
    conclusion: {
      title: "Adventure as a Path to Growth",
      description: "Adventure is about stepping outside of your comfort zone to explore new realms, challenge your abilities, and experience the world in a deeper way. Whether it’s through physical activities, intellectual pursuits, or social connections, adventure brings excitement and opportunities for personal growth."
    }
  };

  return (
    <div className="container my-5">
      {/* Introduction Section */}
      <section className="mb-5 text-center">
        <h1 className="display-4 text-primary">{aboutAdventure.introduction.title}</h1>
        <p className="lead">{aboutAdventure.introduction.description}</p>
      </section>

      {/* Types of Adventure Section */}
      <section>
        <h2 className="text-center text-primary mb-4">Types of Adventure</h2>
        <div className="row">
          {Object.entries(aboutAdventure.typesOfAdventure).map(([key, adventure]) => (
            <div className="col-md-5 mb-4 ml-5 mr-5" key={key}>
              <div className="card shadow-lg h-100 hover-card">
                <div className="card-body">
                  <h3 className="card-title text-success">{adventure.title}</h3>
                  <p className="card-text">{adventure.description}</p>
                  <ul className="list-group list-group-flush">
                    {adventure.examples.map((example, index) => (
                      <li className="list-group-item" key={index}>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="mt-5 text-center">
        <h2 className="text-info">{aboutAdventure.conclusion.title}</h2>
        <p className="lead">{aboutAdventure.conclusion.description}</p>
      </section>
    </div>
  );
};

export default About;
