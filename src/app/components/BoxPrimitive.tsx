import * as THREE from "three";

export const BoxPrimitive = () => {
  const vertices = new Float32Array([
    -1,
    -1,
    1, // Bottom-left
    1,
    -1,
    1, // Bottom-right
    1,
    1,
    1, // Top-right
    -1,
    1,
    1, // Top-left

    // Back face
    -1,
    -1,
    -1, // Bottom-left
    1,
    -1,
    -1, // Bottom-right
    1,
    1,
    -1, // Top-right
    -1,
    1,
    -1, // Top-left
  ]);

  const indices = new Uint16Array([
    // Front face
    0, 1, 2, 2, 3, 0,

    // Back face
    4, 5, 6, 6, 7, 4,

    // Top face
    3, 2, 6, 6, 7, 3,

    // Bottom face
    0, 1, 5, 5, 4, 0,

    // Right face
    1, 5, 6, 6, 2, 1,

    // Left face
    0, 4, 7, 7, 3, 0,
  ]);

  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={vertices}
          itemSize={3}
          count={vertices.length / 3}
        />
        <bufferAttribute
          attach="index"
          array={indices}
          itemSize={1}
          count={indices.length}
        />
      </bufferGeometry>
      <meshBasicMaterial color="hotpink" side={THREE.DoubleSide} />
    </mesh>
  );
};
