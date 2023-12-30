import React from 'react';
import styles from './style.module.css';

const NeuralNetworkGraphic = () => {
  // Calculate positions of neurons and connections
  // This is a simplified calculation. You may need a more complex logic based on your design

  const neuralNetworkStructure = [
    { id: 'layer1', neurons: 6 },
    { id: 'layer2', neurons: 4 },
    { id: 'layer3', neurons: 2 }
  ];
  const neuronPositions = neuralNetworkStructure.map((layer, layerIndex) => {
    return Array.from({ length: layer.neurons }).map((_, neuronIndex) => {
      return {
        x: 100 * (layerIndex + 1),
        y: 50 * (neuronIndex + 1)
      };
    });
  });

  return (
    <div className={styles.neuralNetworkContainer}>
      <svg className={styles.networkSvg}>
        {/* Draw connections */}
        {neuronPositions.map((layer, layerIndex) => {
          if (layerIndex === neuralNetworkStructure.length - 1) return null;
          return layer.map((neuron) => {
            return neuronPositions[layerIndex + 1].map((nextNeuron) => (
              <line 
                key={`${neuron.x}-${neuron.y}-${nextNeuron.x}-${nextNeuron.y}`} 
                x1={neuron.x} 
                y1={neuron.y} 
                x2={nextNeuron.x} 
                y2={nextNeuron.y} 
                stroke="black" />
            ));
          });
        })}

        {/* Draw neurons */}
        {neuronPositions.flat().map((neuron, index) => (
          <circle 
            key={`${neuron.x}-${neuron.y}`} 
            cx={neuron.x} 
            cy={neuron.y} 
            r="10" 
            fill="blue" />
        ))}
      </svg>
    </div>
  );
};

export default NeuralNetworkGraphic;
