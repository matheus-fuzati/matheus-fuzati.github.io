import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group, Mesh } from "three";

interface Props {
  scrollRef: React.MutableRefObject<number>;
}

/**
 * Cena do hero: um objeto de vidro central grande + 3 fragmentos satélite
 * orbitando em profundidades diferentes + leve parallax de cursor e scroll.
 * Nada aqui é estático — sempre tem alguma deriva lenta rodando.
 */
export default function GlassBlob({ scrollRef }: Props) {
  const group = useRef<Group>(null);
  const core = useRef<Mesh>(null);
  const shardA = useRef<Mesh>(null);
  const shardB = useRef<Mesh>(null);
  const shardC = useRef<Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    pointer.current.x += (state.pointer.x - pointer.current.x) * 0.04;
    pointer.current.y += (state.pointer.y - pointer.current.y) * 0.04;

    if (group.current) {
      const scroll = scrollRef.current;
      group.current.rotation.y = t * 0.08 + pointer.current.x * 0.25;
      group.current.rotation.x = pointer.current.y * 0.12;
      group.current.position.y = -scroll * 2.4;
      group.current.position.z = -scroll * 1.6;
      const scale = Math.max(0.001, 1 - scroll * 0.9);
      group.current.scale.setScalar(scale);
    }
    if (core.current) {
      core.current.rotation.y += delta * 0.12;
      core.current.rotation.z += delta * 0.03;
    }
    if (shardA.current) {
      shardA.current.position.set(Math.cos(t * 0.35) * 2.1, Math.sin(t * 0.5) * 0.9 + 0.6, Math.sin(t * 0.35) * 2.1);
      shardA.current.rotation.x += delta * 0.4;
      shardA.current.rotation.y += delta * 0.25;
    }
    if (shardB.current) {
      shardB.current.position.set(Math.cos(t * 0.22 + 2) * 2.6, Math.sin(t * 0.3 + 1) * 1.1 - 0.5, Math.sin(t * 0.22 + 2) * 2.6);
      shardB.current.rotation.x += delta * 0.18;
      shardB.current.rotation.z += delta * 0.3;
    }
    if (shardC.current) {
      shardC.current.position.set(Math.cos(t * 0.28 + 4) * 1.5, Math.sin(t * 0.4 + 3) * 0.7 + 1.3, Math.sin(t * 0.28 + 4) * 1.5);
      shardC.current.rotation.y += delta * 0.35;
    }
  });

  const glass = {
    roughness: 0.06,
    metalness: 0.05,
    transmission: 1,
    thickness: 1.4,
    ior: 1.35,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
    specularIntensity: 1,
  } as const;

  return (
    <group ref={group} position={[1.95, -0.9, 0]}>
      <mesh ref={core}>
        <icosahedronGeometry args={[1.25, 6]} />
        <meshPhysicalMaterial color="#dff2ec" {...glass} />
      </mesh>
      <mesh ref={shardA}>
        <octahedronGeometry args={[0.32, 0]} />
        <meshPhysicalMaterial color="#eaf4ff" {...glass} thickness={0.6} />
      </mesh>
      <mesh ref={shardB}>
        <tetrahedronGeometry args={[0.4, 0]} />
        <meshPhysicalMaterial color="#fbe9d9" {...glass} thickness={0.6} />
      </mesh>
      <mesh ref={shardC}>
        <octahedronGeometry args={[0.22, 0]} />
        <meshPhysicalMaterial color="#dff2ec" {...glass} thickness={0.5} />
      </mesh>
    </group>
  );
}
