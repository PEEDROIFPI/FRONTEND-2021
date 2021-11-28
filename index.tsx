import estilos from './estilo.module.css'

import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";

export function Tarefas(){
    return (
    <div>
        <h2 className={estilos.topo}>Minhas Tarefas</h2>
        <ul>
            <li>Cortar a Grama</li>
            <li>Limpar a Piscina</li>
        </ul>
    </div>
  )
}