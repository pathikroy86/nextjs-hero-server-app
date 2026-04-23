
'use server'

const normalizeTask = (formData) => {
    const entries = Object.fromEntries(formData.entries());

    return Object.fromEntries(
        Object.entries(entries).filter(([key]) => !key.startsWith("$ACTION_"))
    );
};

const createPost = async (previousState, formData) => {
    const task = normalizeTask(formData);

    console.log("Received task:", task);

    return {
        message: `Received "${task.title}" successfully.`,
        status: "success",
        task,
    };
};

export default createPost;
