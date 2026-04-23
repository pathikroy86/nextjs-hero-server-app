
'use server'

import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";

const createPost = async (previousState, formData) => {

    const title = formData.get('title');
    const description = formData.get('description');
    const taskComplete = formData.get('taskComplete');
    const priority = formData.get('priority');
    const dueDate = formData.get('dueDate');

    const newTask = Object.fromEntries(formData.entries());

    console.log("Received task:", newTask);

    const res = await postTask(newTask);
    if (res.ok) {
        revalidatePath('/tasks');
    }
    return res;

};

export default createPost;
