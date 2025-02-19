import * as THREE from "three";

export const PyramidPrimitive = () => {
  const vertices = new Float32Array(
    [
      [-1, -1, 1],
      [1, -1, 1],
      [-1, -1, -1],
      [1, -1, -1],
      [0, 1, 0],
    ].flatMap((e) => e)
  );

  const indices = new Uint16Array(
    [
      [0, 1, 2],
      [2, 3, 1],
      [0, 1, 4],
      [1, 2, 4],
      [2, 3, 4],
      [3, 0, 4],
    ].flatMap((e) => e)
  );

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
