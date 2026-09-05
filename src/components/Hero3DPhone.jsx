import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import screenImage from "../assets/Invito Instagram Story.jpg";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  HERO 3D — iPhone 17 Pro (modelo real) CON THREE.JS PURO
 * ─────────────────────────────────────────────────────────────────────────
 *  Qué necesitas para integrarlo en tu proyecto:
 *
 *  1. npm install three
 *
 *  2. Copia estos dos archivos a la carpeta "public" de tu proyecto,
 *     respetando estas rutas (o cambia las constantes de abajo si
 *     prefieres otras):
 *
 *       public/models/iPhone_17_Pro.glb
 *       public/img/invitation.png
 *
 *  3. Modelo: "iPhone 17 Pro" de Ranguel en Sketchfab (CC-BY-4.0) —
 *     si lo publicas, se requiere dar crédito al autor.
 *     https://sketchfab.com/3d-models/iphone-17-pro-4541aa8a28324b33a2baaf81d263aaec
 *
 *  4. El modelo pesa ~9 MB. Para producción te recomiendo comprimirlo
 *     con gltf-transform o gltfpack (Draco + texturas más chicas) antes
 *     de subirlo, o la carga inicial del hero se sentirá pesada.
 *
 *  Cómo se aplica tu imagen: el modelo trae un material llamado "OLED"
 *  que es la pantalla (con brillo emissive ya configurado por el autor).
 *  Al cargar el modelo, busco ese material y le reemplazo su textura por
 *  tu imagen, tanto en el canal de color como en el emissive, para que
 *  se vea como si la pantalla la estuviera mostrando encendida. También
 *  oculto la malla "OLED_off" (pantalla apagada) para que no se monte
 *  encima.
 *
 *  Comportamiento de scroll: el teléfono rota en Y (y se inclina un poco
 *  en X) en proporción al scroll de TODA la página. Si tu hero va a vivir
 *  dentro de una sección específica (no toda la página), busca el
 *  comentario "SCROLL RELATIVO A LA SECCIÓN" para cambiar el cálculo.
 * ─────────────────────────────────────────────────────────────────────────
 */

const MODEL_URL = "/model/iPhone_17_Pro.glb";
const SCREEN_IMAGE_URL = screenImage;

// Si al cargar el teléfono se ve de un tamaño raro o desplazado, ajusta
// esto — se recalcula el encuadre automáticamente, pero un empujoncito
// manual a veces ayuda con modelos de Sketchfab.
const MODEL_SCALE_MULTIPLIER = 1;
const MODEL_Y_OFFSET = 0;
// Si el teléfono carga de espaldas o de lado, prueba con Math.PI o
// Math.PI / 2 aquí.
const MODEL_INITIAL_ROTATION_Y = Math.PI;

// Ajustes finos de cómo se acomoda tu imagen sobre la pantalla, por si
// se ve invertida, rotada o recortada distinto a lo esperado.
const SCREEN_TEXTURE_FLIP_Y = false;
const SCREEN_TEXTURE_ROTATION = 0; // en radianes
const SCREEN_TEXTURE_REPEAT = [-1, 1];
const SCREEN_TEXTURE_OFFSET = [1, 0];

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
    mount.appendChild(renderer.domElement);

    // ── LUCES ──────────────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0xffffff, 1.25);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffd7a8, 2.5); // luz cálida principal
    key.position.set(4, 5, 6);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 20;
    key.shadow.radius = 6;
    scene.add(key);

    const rim = new THREE.DirectionalLight(0x8fa8ff, 1.7); // luz fría de contorno
    rim.position.set(-5, -2, -4);
    scene.add(rim);

    const fill = new THREE.PointLight(0xffffff, 1.1);
    fill.position.set(-3, 1, 5);
    scene.add(fill);

    // ── GRUPO QUE CONTIENE AL TELÉFONO ──────────────────────────────────
    const phoneGroup = new THREE.Group();
    phoneGroup.rotation.x = 0.15;
    phoneGroup.rotation.y = MODEL_INITIAL_ROTATION_Y;
    scene.add(phoneGroup);

    // ── TEXTURA DE LA IMAGEN QUE VA EN LA PANTALLA ──────────────────────
    const textureLoader = new THREE.TextureLoader();
    const screenTexture = textureLoader.load(SCREEN_IMAGE_URL);
    screenTexture.colorSpace = THREE.SRGBColorSpace;
    screenTexture.flipY = SCREEN_TEXTURE_FLIP_Y;
    screenTexture.center.set(0.5, 0.5);
    screenTexture.rotation = SCREEN_TEXTURE_ROTATION;
    screenTexture.repeat.set(
      SCREEN_TEXTURE_REPEAT[0],
      SCREEN_TEXTURE_REPEAT[1],
    );
    screenTexture.offset.set(
      SCREEN_TEXTURE_OFFSET[0],
      SCREEN_TEXTURE_OFFSET[1],
    );
    screenTexture.wrapS = THREE.RepeatWrapping;
    screenTexture.wrapT = THREE.ClampToEdgeWrapping;

    // ── CARGA DEL MODELO REAL (iPhone_17_Pro.glb) ───────────────────────
    new GLTFLoader().load(
      MODEL_URL,
      (gltf) => {
        const model = gltf.scene;

        model.traverse((child) => {
          if (!child.isMesh) return;
          child.castShadow = true;
          child.receiveShadow = true;

          const matName = child.material?.name || "";

          if (matName === "OLED") {
            // Esta es la malla de la pantalla: le ponemos tu imagen.
            child.material.dispose();
            child.material = new THREE.MeshBasicMaterial({
              map: screenTexture,
              side: THREE.DoubleSide,
            });
          }

          if (matName === "OLED_off") {
            // Pantalla "apagada": la ocultamos para que no se vea doble
            // debajo de la pantalla encendida con tu imagen.
            child.visible = false;
          }
        });

        // Centrar y escalar el modelo automáticamente para que quede
        // bien encuadrado sin importar las unidades originales del GLB.
        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);

        model.position.sub(center); // centra en el origen

        const targetHeight = 4.4;
        const scale =
          (targetHeight / Math.max(size.y, 0.0001)) * MODEL_SCALE_MULTIPLIER;
        model.scale.setScalar(scale);
        model.position.y = model.position.y * scale + MODEL_Y_OFFSET;
        model.position.x *= scale;
        model.position.z *= scale;

        phoneGroup.add(model);
      },
      undefined,
      (error) => {
        console.error("No se pudo cargar el modelo del teléfono:", error);
      },
    );

    // ── INTERACCIÓN CON SCROLL ──────────────────────────────────────────
    let targetRotY = MODEL_INITIAL_ROTATION_Y;
    let targetRotX = 0.12;
    let targetY = 0;
    let userRotY = 0;
    let userRotX = 0;
    let isDragging = false;
    let lastPointerX = 0;
    let lastPointerY = 0;

    function handleScroll() {
      // SCROLL RELATIVO A LA SECCIÓN:
      // si prefieres que la rotación dependa solo de esta sección del hero
      // (y no de toda la página), cambia este bloque por algo como:
      //
      //   const rect = sectionRef.current.getBoundingClientRect();
      //   const progress = 1 - Math.min(Math.max(rect.bottom / window.innerHeight, 0), 1);
      //
      const rect = mount.getBoundingClientRect();
      const sectionRange = window.innerHeight + rect.height;
      const progress = Math.min(
        Math.max((window.innerHeight - rect.top) / sectionRange, 0),
        1,
      );

      targetRotY = MODEL_INITIAL_ROTATION_Y + progress * 0.22 + userRotY;
      targetRotX = 0.12 + progress * 0.04 + userRotX;
      targetY = -progress * 0.1;
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    function handlePointerDown(event) {
      isDragging = true;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      mount.setPointerCapture?.(event.pointerId);
      mount.style.cursor = "grabbing";
    }

    function handlePointerMove(event) {
      if (!isDragging) return;
      const deltaX = event.clientX - lastPointerX;
      const deltaY = event.clientY - lastPointerY;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      userRotY += deltaX * 0.012;
      userRotX = Math.max(-0.65, Math.min(0.65, userRotX + deltaY * 0.008));
      handleScroll();
    }

    function handlePointerUp(event) {
      isDragging = false;
      mount.releasePointerCapture?.(event.pointerId);
      mount.style.cursor = "grab";
    }

    mount.addEventListener("pointerdown", handlePointerDown);
    mount.addEventListener("pointermove", handlePointerMove);
    mount.addEventListener("pointerup", handlePointerUp);
    mount.addEventListener("pointercancel", handlePointerUp);
    mount.addEventListener("pointerleave", handlePointerUp);
    mount.style.cursor = "grab";
    mount.style.touchAction = "none";

    // ── LOOP DE ANIMACIÓN ────────────────────────────────────────────────
    let frameId;
    let idleT = 0;
    function animate() {
      frameId = requestAnimationFrame(animate);
      idleT += 0.008;

      const cinematicRotation = isDragging ? 0 : Math.sin(idleT) * 0.035;
      const cinematicTilt = Math.sin(idleT * 0.7) * 0.035;
      phoneGroup.rotation.y +=
        (targetRotY + cinematicRotation - phoneGroup.rotation.y) * 0.08;
      phoneGroup.rotation.x += (targetRotX - phoneGroup.rotation.x) * 0.06;
      phoneGroup.rotation.z += (cinematicTilt - phoneGroup.rotation.z) * 0.06;
      phoneGroup.position.y +=
        (targetY + Math.sin(idleT * 0.8) * 0.06 - phoneGroup.position.y) * 0.08;

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
      mount.removeEventListener("pointerdown", handlePointerDown);
      mount.removeEventListener("pointermove", handlePointerMove);
      mount.removeEventListener("pointerup", handlePointerUp);
      mount.removeEventListener("pointercancel", handlePointerUp);
      mount.removeEventListener("pointerleave", handlePointerUp);
      screenTexture.dispose();
      phoneGroup.traverse((child) => {
        if (child.isMesh) {
          child.geometry?.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else {
            child.material?.dispose();
          }
        }
      });
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
