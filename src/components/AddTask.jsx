"use client";

import { CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, ModalBackdrop, ModalContainer, ModalDialog, ModalHeader, ModalBody, ModalFooter, ModalCloseTrigger, Surface, TextField } from "@heroui/react";
import { useActionState, useRef, useState } from "react";

const initialState = {
    message: "",
    status: "idle",
    task: null,
};

export function AddTask({ createPost }) {
    const [isOpen, setIsOpen] = useState(false);
    const [state, formAction, pending] = useActionState(createPost, initialState);
    const formRef = useRef(null);

    return (
        <>
            <Button onPress={() => setIsOpen(true)} variant="secondary">Add Task</Button>
            <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
                <ModalBackdrop>
                    <ModalContainer placement="auto">
                        <ModalDialog className="sm:max-w-md">
                            <ModalCloseTrigger />
                            <ModalHeader>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <CirclePlus className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>Input task info</Modal.Heading>
                            </ModalHeader>
                            <form action={formAction} className="contents" ref={formRef}>
                                <ModalBody className="p-6">
                                    <Surface variant="default">
                                        <div className="flex flex-col gap-4">
                                            <TextField className="w-full" name="id" type="text">
                                                <Label>Task ID</Label>
                                                <Input name="id" placeholder="Enter task ID" required />
                                            </TextField>
                                            <TextField className="w-full" name="title" type="text">
                                                <Label>Title</Label>
                                                <Input name="title" placeholder="Enter title" required />
                                            </TextField>
                                            <TextField className="w-full" name="description" type="text">
                                                <Label>Description</Label>
                                                <Input name="description" placeholder="Enter description" required />
                                            </TextField>
                                            <TextField className="w-full" name="completed" type="text">
                                                <Label>Completed</Label>
                                                <Input name="completed" placeholder="Either true or false" required />
                                            </TextField>
                                            <TextField className="w-full" name="dueDate">
                                                <Label>Due Date</Label>
                                                <Input name="dueDate" placeholder="Enter the due date" required />
                                            </TextField>
                                            <TextField className="w-full" name="priority">
                                                <Label>Priority</Label>
                                                <Input name="priority" placeholder="Give the priority" required />
                                            </TextField>
                                        </div>
                                    </Surface>
                                </ModalBody>
                                <ModalFooter>
                                    <div className="flex w-full items-center justify-between gap-4">
                                        <p aria-live="polite" className="text-sm text-foreground-500">
                                            {state?.message}
                                        </p>
                                        <div className="flex gap-3">
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button isDisabled={pending} type="submit">
                                                {pending ? "Submitting..." : "Submit"}
                                            </Button>
                                        </div>
                                    </div>
                                </ModalFooter>
                            </form>
                        </ModalDialog>
                    </ModalContainer>
                </ModalBackdrop>
            </Modal>
        </>
    );
}
