<template>
  <div class="car-scene"></div>
</template>
<script setup lang="ts">
import * as THREE from 'three'
import { onMounted } from 'vue'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const canvasWidth = window.innerWidth
const convasHeight = window.innerHeight

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(10, 800 / 600, 0.1, 100)
const renderer = new THREE.WebGLRenderer()
const loader = new GLTFLoader()
const controls = new OrbitControls(camera, renderer.domElement)

const initRenderConfig = () => {
  console.log(canvasWidth, convasHeight)
  renderer.setSize(canvasWidth, convasHeight)
  camera.position.z = 10
}
const loadModules = () => {
  loader.load(
    'static/3d/car/scene.gltf',
    function (gltf) {
      scene.add(gltf.scene)
      gltf.scene.traverse((child: any) => {
        if (child.isMesh) {
          child.material.emissive = child.material.color
          child.material.emissiveMap = child.material.map
        }
      })
    },
    undefined,
    function (error) {
      console.error(error)
    }
  )
}

const appendRenderEl = () => {
  document.body.appendChild(renderer.domElement)
}

const animate = () => {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
onMounted(() => {
  initRenderConfig()
  loadModules()
  appendRenderEl()
  animate()
})
</script>
<style scoped lang="less"></style>
