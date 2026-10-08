import { Suspense, type MutableRefObject } from "react";
import { Canvas } from "@react-three/fiber";
import FloatingShards from "./FloatingShards";
import ParticleField from "./ParticleField";

interface Props {
  scrollRef: MutableRefObject<number>;
}

/**
 * Importado via React.lazy — só entra no bundle quando o WebGL check passa
 * e prefers-reduced-motion está desligado (ver Hero.tsx). Sem objeto
 * central (removido a pedido do autor) — só fragmentos de vidro soltos +
 * campo de partículas, com parallax real ligado ao scroll da seção Hero.
 */
export default function HeroScene({ scrollRef }: Props) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 38 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[2, 2, 3]} intensity={1.1} color="#1e8f77" />
      <directionalLight position={[-3, -1, -2]} intensity={0.5} color="#2f5bd1" />
      <pointLight position={[1.2, 1.6, 2.4]} intensity={2.5} color="#ffffff" distance={6} />
      <Suspense fallback={null}>
        <ParticleField />
        <FloatingShards scrollRef={scrollRef} />
      </Suspense>
    </Canvas>
  );
}
