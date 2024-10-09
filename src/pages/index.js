import React from "react";
import Home from '../components/home/Home'

export { Home }

export const Bodas = React.lazy(()=> import('../components/galeria/Bodas'))
export const Infantiles = React.lazy(()=> import('../components/galeria/Infantiles'))
export const Maternidad = React.lazy(()=> import('../components/galeria/Maternidad'))
export const NewBorn = React.lazy(()=> import('../components/galeria/NewBorn'))
export const Smash = React.lazy(()=> import('../components/galeria/Smash'))
export const Seguimiento = React.lazy(()=> import('../components/galeria/Seguimiento'))
