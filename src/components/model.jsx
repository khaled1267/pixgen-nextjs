"use client";
import React from "react";
import { Person } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, TextField } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function UpdateUserModal() {
  const router = useRouter();

  const onsubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const imageUrl = e.target.imageUrl.value;

    await authClient.updateUser({
      name,
      image: imageUrl, // ✅ `image` লিখুন
    });

   router.push("/"); // ✅ UI আপডেট করুন
  };

  return (
    <Modal>
      <Button variant="secondary">Open Update User</Button>
      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-[480px] rounded-[45px] p-2 bg-white">
            <Modal.CloseTrigger className="top-8 right-8 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-colors" />
            <Modal.Header className="flex flex-col items-start gap-4 px-8 pt-10">
              <div className="bg-blue-100/50 text-blue-500 p-4 rounded-[22px]">
                <Person className="size-7" />
              </div>
              <Modal.Heading className="text-[26px] font-bold text-gray-900 tracking-tight">
                Update User
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="px-8 py-6">
              {/* ✅ form এ id দেওয়া হয়েছে */}
              <form id="update-user-form" onSubmit={onsubmit} className="flex flex-col gap-8">
                <TextField className="w-full flex flex-col gap-3" name="name">
                  <Label className="font-bold text-gray-800 text-lg ml-1">Name</Label>
                  <Input placeholder="Enter your name" className="rounded-[20px] border-gray-200 h-[60px] px-6 text-lg" />
                </TextField>

                <TextField className="w-full flex flex-col gap-3" name="imageUrl">
                  <Label className="font-bold text-gray-800 text-lg ml-1">Image URL</Label>
                  <Input placeholder="Image URL" className="rounded-[20px] border-gray-200 h-[60px] px-6 text-lg" />
                </TextField>
              </form>
            </Modal.Body>

            <Modal.Footer className="px-8 pb-12 pt-4 flex justify-end gap-4">
              <Button slot="close" className="rounded-full px-10 py-7 font-bold text-lg bg-[#f0f2f5] text-blue-500">
                Cancel
              </Button>
              {/* ✅ type="submit" এবং form="update-user-form" যোগ করা হয়েছে */}
              <Button
                type="submit"
                form="update-user-form"
                className="rounded-full px-12 py-7 font-bold text-lg bg-blue-500 text-white"
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}