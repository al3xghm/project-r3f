# 🌚 Xander Face - Projet React Three Fiber

Une expérience 3D interactive basée sur **React**, **Three.js** et **React Three Fiber**. Une tête 3D controllable avec une pluie dynamique de têtes qui tombent du ciel !

## ✨ Fonctionnalités

### 🎮 Contrôle de la tête principale
- **Flèches du clavier** : Rotation X et Y (haut/bas, gauche/droite)
- **Touches Q/E** : Rotation Z (rotation gauche/droite)
- **Effet de respiration** : La tête pulse légèrement pour un effet plus vivant
- **Contrôle à la souris** : Zoom, rotation et panoramique avec OrbitControls

### 🌧️ Système de pluie de têtes
- **50 têtes 3D** qui tombent du ciel en boucle
- **Rotations aléatoires** : Chaque tête tourne sur elle-même
- **Optimisation GPU** : Utilise InstancedMesh pour une performance optimale
- **Recyclage des particules** : Les têtes réapparaissent au sommet quand elles sortent du bas

### 💡 Système d'éclairage
- **Lumière ambiante** : Illumination globale douce
- **Lumière directionnelle** : Lumière principale avec ombres
- **Lumières colorées** : Bleu et rose pour une ambiance cyberpunk
- **Contrôle d'intensité** : Slider pour ajuster la luminosité

### 🎛️ Panneau de contrôle
- **Bouton pluie** : Activer/désactiver la pluie de têtes
- **Slider vitesse** : Contrôler la vitesse de chute (0.1x à 3x)
- **Slider lumière** : Ajuster l'intensité lumineuse (0.5 à 5)

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

## 📁 Structure du projet

```
src/
├── components/
│   ├── MainHEAD.tsx       # Tête 3D principale (controllable)
│   ├── HeadRAIN.tsx       # Pluie de 50 têtes 3D
│   ├── Scene3D.tsx        # Scène 3D principale avec éclairage
│   └── Controls.tsx       # Panneau de contrôle (sliders + boutons)
├── App.tsx                 # Composant principal
├── App.css                 # Styles
└── main.tsx               # Point d'entrée
```

## 🛠️ Technologies utilisées

- **React** : Framework UI
- **React Three Fiber** : Rendu 3D avec Three.js
- **Three.js** : Bibliothèque 3D
- **@react-three/drei** : Utilitaires pour R3F (OrbitControls, useGLTF)
- **TypeScript** : Typage statique
- **Vite** : Bundler et serveur de développement

## 🎨 Contrôles

### Clavier
| Touche | Action |
|--------|--------|
| ⬆️ | Tourner la tête vers le haut |
| ⬇️ | Tourner la tête vers le bas |
| ⬅️ | Tourner la tête à gauche |
| ➡️ | Tourner la tête à droite |
| Q | Rotation Z (gauche) |
| E | Rotation Z (droite) |

### Souris
| Action | Effet |
|--------|-------|
| 🖱️ Drag | Rotation de la scène |
| 🖱️ Scroll | Zoom in/out |
| 🖱️ Clic droit | Panoramique |

## 🔧 Configuration

Le modèle 3D est chargé depuis `/public/models/model.glb`. Pour utiliser votre propre modèle :
1. Placez votre fichier `.glb` dans `public/models/`
2. Modifiez le chemin dans `HeadRAIN.tsx` et `MainHEAD.tsx`

## 📊 Performance

- **InstancedMesh** : Affiche 50 têtes en une seule opération GPU
- **Suspense** : Chargement du modèle en arrière-plan
- **Preload** : Précharge du modèle pour éviter les saccades
- **Inertie** : Rotation douce avec amortissement (0.92x par frame)

## 🎓 Apprentissage

Ce projet est parfait pour apprendre :
- React Three Fiber et Three.js
- Gestion d'états React (useState)
- Hooks personnalisés (useFrame, useGLTF)
- Optimisation GPU avec InstancedMesh
- Interaction utilisateur en 3D
- Systèmes de particules

---

**Créé par** : Étudiant en développement 3D web 🚀
