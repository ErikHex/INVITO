import { useEffect, useRef } from "react";
import * as THREE from "three";
import screenImage from "../assets/Invito Bodas Muestra 002 (1).png";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  HERO 3D — TELÉFONO CON THREE.JS PURO (SIN react-three-fiber)
 * ─────────────────────────────────────────────────────────────────────────
 *  Qué necesitas para integrarlo en tu proyecto:
 *
 *  1. npm install three
 *
 *  2. Tu propia imagen para la pantalla del teléfono. Reemplaza la
 *     constante SCREEN_IMAGE_URL más abajo por la ruta/URL de tu imagen
 *     (ej: "/img/app-screenshot.png"). Si la dejas vacía, se genera un
 *     degradado de relleno para que puedas ver el efecto igual.
 *
 *  3. (Opcional) El modelo de teléfono que ves aquí está construido con
 *     geometría real (extrusión + bisel), no es una caja plana — así que
 *     no necesitas un archivo .glb para empezar. Si más adelante quieres
 *     usar un modelo .glb genérico libre de derechos, el lugar donde
 *     conectarlo está marcado con el comentario "PUNTO DE ENGANCHE GLB".
 *
 *  Comportamiento de scroll: el teléfono rota en Y (y se inclina un poco
 *  en X) en proporción al scroll de TODA la página. Si tu hero va a vivir
 *  dentro de una sección específica (no toda la página), busca el
 *  comentario "SCROLL RELATIVO A LA SECCIÓN" para cambiar el cálculo.
 * ─────────────────────────────────────────────────────────────────────────
 */

export default function Hero3DPhone() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── ESCENA, CÁMARA, RENDERER ──────────────────────────────────────
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      32,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.6;
    mount.appendChild(renderer.domElement);

    // ── LUCES ──────────────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffd7a8, 2.6); // luz cálida principal
    key.position.set(4, 5, 6);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 20;
    key.shadow.radius = 6;
    scene.add(key);

    const rim = new THREE.DirectionalLight(0x8fa8ff, 1.8); // luz fría de contorno
    rim.position.set(-5, -2, -4);
    scene.add(rim);

    const fill = new THREE.PointLight(0xffffff, 1.2);
    fill.position.set(-3, 1, 5);
    scene.add(fill);

    // ── GEOMETRÍA DEL TELÉFONO (rectángulo redondeado extruido) ────────
    function roundedRectShape(w, h, r) {
      const shape = new THREE.Shape();
      const x = -w / 2;
      const y = -h / 2;
      shape.moveTo(x, y + r);
      shape.lineTo(x, y + h - r);
      shape.quadraticCurveTo(x, y + h, x + r, y + h);
      shape.lineTo(x + w - r, y + h);
      shape.quadraticCurveTo(x + w, y + h, x + w, y + h - r);
      shape.lineTo(x + w, y + r);
      shape.quadraticCurveTo(x + w, y, x + w - r, y);
      shape.lineTo(x + r, y);
      shape.quadraticCurveTo(x, y, x, y + r);
      return shape;
    }

    const PHONE_W = 2.2;
    const PHONE_H = 4.6;
    const PHONE_R = 0.32;
    const PHONE_DEPTH = 0.32;

    const phoneGroup = new THREE.Group();

    // ── PUNTO DE ENGANCHE GLB ───────────────────────────────────────────
    // Si más adelante quieres cargar un modelo .glb genérico en vez de
    // esta geometría procedural, aquí es donde harías:
    //
    //   import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
    //   new GLTFLoader().load(MODEL_URL, (gltf) => {
    //     phoneGroup.add(gltf.scene);
    //   });
    //
    // y podrías quitar el bloque "cuerpo" y "pantalla" de abajo.
    // ─────────────────────────────────────────────────────────────────

    // Cuerpo del teléfono
    const bodyShape = roundedRectShape(PHONE_W, PHONE_H, PHONE_R);
    const bodyGeo = new THREE.ExtrudeGeometry(bodyShape, {
      depth: PHONE_DEPTH,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.03,
      bevelSegments: 6,
      curveSegments: 24,
    });
    bodyGeo.center();

    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: 0x252a32,
      metalness: 0.82,
      roughness: 0.2,
      clearcoat: 0.9,
      clearcoatRoughness: 0.12,
    });

    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.castShadow = true;
    body.receiveShadow = true;
    phoneGroup.add(body);

    // Pantalla (con la imagen del usuario)
    function makePlaceholderTexture() {
      const c = document.createElement("canvas");
      c.width = 512;
      c.height = 1024;
      const ctx = c.getContext("2d");
      const grad = ctx.createLinearGradient(0, 0, 0, c.height);
      grad.addColorStop(0, "#fff1f5");
      grad.addColorStop(0.55, "#f8a5bc");
      grad.addColorStop(1, "#e34d78");
      ctx.fillStyle = grad;
      x;
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = "rgba(70,20,45,0.85)";
      ctx.font = "600 38px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("INVITO", c.width / 2, c.height / 2);
      return new THREE.CanvasTexture(c);
    }

    let screenTexture;
    if (screenImage) {
      screenTexture = new THREE.TextureLoader().load(screenImage);
      screenTexture.colorSpace = THREE.SRGBColorSpace;
    } else {
      screenTexture = makePlaceholderTexture();
      screenTexture.colorSpace = THREE.SRGBColorSpace;
    }

    const screenWidth = PHONE_W - 0.22;
    const screenHeight = screenWidth / (750 / 1334);
    const screenGeo = new THREE.PlaneGeometry(screenWidth, screenHeight);
    const screenMat = new THREE.MeshStandardMaterial({
      map: screenTexture,
      emissiveMap: screenTexture,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: 1, // Sube o baja esto para controlar qué tan iluminada se ve la pantalla
      roughness: 0.2,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.z = PHONE_DEPTH / 2 + 0.01;
    phoneGroup.add(screen);

    // Muesca de cámara frontal (detalle de realismo)
    const notchGeo = new THREE.CircleGeometry(0.045, 24);
    const notchMat = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0.1,
      metalness: 0.2,
    });
    const notch = new THREE.Mesh(notchGeo, notchMat);
    notch.position.set(0, PHONE_H / 2 - 0.22, PHONE_DEPTH / 2 + 0.015);
    phoneGroup.add(notch);

    phoneGroup.rotation.x = 0.15;
    scene.add(phoneGroup);

    // ── SOMBRA DE CONTACTO EN EL SUELO ──────────────────────────────────
    const shadowGeo = new THREE.PlaneGeometry(6, 6);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.25 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -PHONE_H / 2 - 1.6;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // ── INTERACCIÓN CON SCROLL ──────────────────────────────────────────
    let targetRotY = 0;
    let targetRotX = 0.15;
    let targetY = 0;

    function handleScroll() {
      // SCROLL RELATIVO A LA SECCIÓN:
      // si prefieres que la rotación dependa solo de esta sección del hero
      // (y no de toda la página), cambia este bloque por algo como:
      //
      //   const rect = sectionRef.current.getBoundingClientRect();
      //   const progress = 1 - Math.min(Math.max(rect.bottom / window.innerHeight, 0), 1);
      //
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollProgresRef.current;

      targetRotY = Math.PI * (1 - progress);
      targetRotX = 0.15 + progress * 0.35;
      targetY = -progress * 0.6;
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // ── LOOP DE ANIMACIÓN ────────────────────────────────────────────────
    let frameId;
    let idleT = 0;
    function animate() {
      frameId = requestAnimationFrame(animate);
      idleT += 0.012;

      // suavizado (lerp) hacia el objetivo marcado por el scroll
      const automaticRotation = idleT * 0.7;
      phoneGroup.rotation.y +=
        (targetRotY + automaticRotation - phoneGroup.rotation.y) * 0.08;
      phoneGroup.rotation.x += (targetRotX - phoneGroup.rotation.x) * 0.06;
      phoneGroup.position.y +=
        (targetY + Math.sin(idleT) * 0.06 - phoneGroup.position.y) * 0.08;

      renderer.render(scene, camera);
    }
    animate();

    // ── RESIZE ────────────────────────────────────────────────────────
    function handleResize() {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    }
    window.addEventListener("resize", handleResize);

    // ── LIMPIEZA ─────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      bodyGeo.dispose();
      screenGeo.dispose();
      notchGeo.dispose();
      shadowGeo.dispose();
      bodyMat.dispose();
      screenMat.dispose();
      notchMat.dispose();
      shadowMat.dispose();
      screenTexture.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-label="Vista 3D de una invitación digital"
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(420px, 62vw, 620px)",
        minHeight: 420,
      }}
    />
  );
}
