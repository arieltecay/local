import React from 'react';

export const TaskBanner = props => (
    // console.log(props),
    <h4 className="bg-primary text-white text-center p-4">
        {props.userName}  -({props.taskItem.filter(t => !t.done).length}) Tareas Pendientes
    </h4>
    
);