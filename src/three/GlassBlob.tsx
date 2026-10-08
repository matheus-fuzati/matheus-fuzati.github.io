import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

/**
 * Objeto soft/glass da direção "Daylight Systems" — rotação lenta e
 * contida, com um leve tilt seguindo o cursor (nunca dramático).
 */
export default function GlassBlob() {
  const ref = useRef<Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const mesh = ref.current;
    if (!mesh) return;
    pointer.current.x += (state.pointer.x - pointer.current.x) * 0.04;
    pointer.current.y += (state.pointer.y - pointer.current.y) * 0.04;
    mesh.rotation.y += 0.0025;
    mesh.rotation.x = pointer.current.y * 0.15;
    mesh.rotation.z = -pointer.current.x * 0.1;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.3, 6]} />
      <meshPhysicalMaterial
        color="#dff2ec"
        roughness={0.06}
        metalness={0.05}
        transmission={1}
        thickness={1.6}
        ior={1.35}
        clearcoat={1}
        clearcoatRoughness={0.05}
        specularIntensity={1}
      />
    </mesh>
  );
}
