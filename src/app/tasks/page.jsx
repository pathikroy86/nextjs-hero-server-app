import { AddTask } from '@/components/AddTask';
import Task from '@/components/Task';
import createPost from '@/lib/actions';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TasksPage = async () => {
    const tasks = await getTasks();

    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-center my-5'>
                <AddTask createPost={createPost}></AddTask>
            </div>
            <div className='grid grid-cols-3 gap-5 my-10'>
                {
                    tasks.map(task => <Task key={task.id} task={task}></Task>)
                }
            </div>

        </div>
    );
};

export default TasksPage;