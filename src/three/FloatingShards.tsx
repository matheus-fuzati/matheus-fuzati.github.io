import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group, Mesh } from "three";

interface Props {
  scrollRef: React.MutableRefObject<number>;
}

/**
 * Sem objeto central — 4 fragmentos de vidro flutuando e derivando de
 * forma independente pela cena (cada um com seu próprio período/fase),
 * mais o campo de partículas (ver ParticleField). Pedido do autor: tirar
 * a "bola" que ficava atrás da foto e deixar só a animação 3D solta.
 */
export default function FloatingShards({ scrollRef }: Props) {
  const group = useRef<Group>(null);
  const shardA = useRef<Mesh>(null);
  const shardB = useRef<Mesh>(null);
  const shardC = useRef<Mesh>(null);
  const shardD = useRef<Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (group.current) {
      const scroll = scrollRef.current;
      group.current.position.y = -scroll * 2.4;
      const scale = Math.max(0.001, 1 - scroll * 0.9);
      group.current.scale.setScalar(scale);
    }

    if (shardA.current) {
      shardA.current.position.set(
        Math.sin(t * 0.18) * 2.6 + 1.3,
        Math.sin(t * 0.3) * 1.1 + 0.5,
        Math.cos(t * 0.18) * 1.2 - 0.6
      );
      shardA.current.rotation.x += delta * 0.4;
      shardA.current.rotation.y += delta * 0.25;
    }
    if (shardB.current) {
      shardB.current.position.set(
        Math.cos(t * 0.14 + 2) * 2.9 - 0.9,
        Math.sin(t * 0.22 + 1) * 1.3 - 0.4,
        Math.sin(t * 0.14) * 1.4 - 1.1
      );
      shardB.current.rotation.x += delta * 0.18;
      shardB.current.rotation.z += delta * 0.3;
    }
    if (shardC.current) {
      shardC.current.position.set(
        Math.cos(t * 0.2 + 4) * 2.2 + 0.3,
        Math.sin(t * 0.28 + 3) * 0.9 + 1.2,
        Math.cos(t * 0.2) * 1 - 0.8
      );
      shardC.current.rotation.y += delta * 0.35;
    }
    if (shardD.current) {
      shardD.current.position.set(
        Math.sin(t * 0.16 + 1) * 3.1 - 1.7,
        Math.cos(t * 0.24 + 2) * 1 - 1,
        Math.sin(t * 0.16) * 1.1 - 0.5
      );
      shardD.current.rotation.z += delta * 0.22;
      shardD.current.rotation.x += delta * 0.15;
    }
  });

  const glass = {
    roughness: 0.06,
    metalness: 0.05,
    transmission: 1,
    thickness: 0.6,
    ior: 1.35,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
    specularIntensity: 1,
  } as const;

  return (
    <group ref={group}>
      <mesh ref={shardA}>
        <octahedronGeometry args={[0.42, 0]} />
        <meshPhysicalMaterial color="#eaf4ff" {...glass} />
      </mesh>
      <mesh ref={shardB}>
        <tetrahedronGeometry args={[0.52, 0]} />
        <meshPhysicalMaterial color="#fbe9d9" {...glass} />
      </mesh>
      <mesh ref={shardC}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshPhysicalMaterial color="#dff2ec" {...glass} />
      </mesh>
      <mesh ref={shardD}>
        <icosahedronGeometry args={[0.36, 1]} />
        <meshPhysicalMaterial color="#eef0ea" {...glass} />
      </mesh>
    </group>
  );
}
