import React from 'react';

export const TaskBanner = props => (
    // console.log(props),
    <h4 className="bg-primary text-white text-center p-4">
        {props.userName} Api de Ariel Tecay -({props.taskItem.filter(t => !t.done).length}) Tareas Pendientes
    </h4>
    
);