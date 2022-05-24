import { useEffect, useState } from "react";
import Modal from "./modal";

export default function Gradient() {
  const [bgGradient, setBgGradient] = useState({});
  const [gradientName, setGradientName] = useState("");

  useEffect(() => {
    setBgGradient(getBgGradient());
    setGradientName(getGradientName());
  }, []);

  const getAdjective = () => {
    const adjectiveList = [
      "Angelic",
      "Benevolent",
      "Cosmic",
      "Demure",
      "Dreamy",
      "Enchanting",
      "Ephemeral",
      "Evocative",
      "Fanciful",
      "Furtive",
      "Incandescent",
      "Ineffable ",
      "Lavish",
      "Limitless",
      "Luxurious",
      "Misty",
      "Nimble",
      "Opulent",
      "Peaceful",
      "Pristine",
      "Sanguine",
      "Sempiternal",
      "Tranquil",
      "Vivid",
      "Whimsical",
    ];

    return adjectiveList[getRandom(adjectiveList)];
  };

  const getBgGradient = () => {
    return {
      background: `linear-gradient(to ${getDirection()}, ${getColor()}, ${getColor()})`,
    };
  };

  const getColor = () => {
    return `rgb(${getColorValue()}, ${getColorValue()}, ${getColorValue()})`;
  };

  const getColorValue = () => Math.floor(Math.random() * 256);

  const getDirection = () => {
    const directionList = ["right", "bottom", "top right", "bottom right"];

    return directionList[getRandom(directionList)];
  };

  const getGradientName = () => `${getAdjective()} ${getNoun()}`;

  const getNoun = () => {
    const nounList = [
      "Aurora",
      "Birthday",
      "Breath",
      "Conversation",
      "Departure",
      "Disaster",
      "Elixir",
      "Euphoria",
      "Hall",
      "Impression",
      "Intention",
      "Meadow",
      "Ocean",
      "Perception",
      "Poem",
      "Proposal",
      "Reaction",
      "Reception",
      "Reflection",
      "River",
      "Silhouette",
      "Song",
      "Valley",
      "Vines",
      "Warning",
    ];

    return nounList[getRandom(nounList)];
  };

  const getRandom = (list) => {
    return Math.floor(Math.random() * list.length);
  };

  return (
    <div className="gradient" style={bgGradient}>
      <Modal gradient={bgGradient.background} name={gradientName} />
    </div>
  );
}
